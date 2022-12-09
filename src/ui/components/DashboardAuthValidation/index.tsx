import React from 'react';

import { error } from '../../../common/helpers/log';
import { fromBase64 } from '../../../common/helpers/string';
import { AuthedUserContext } from '../../helpers/jwt';
import { IRequestCommon } from '../../helpers/routes';
import { useGranularEffect } from '../../helpers/useGranularHook';
import { isServer } from '../../helpers/useQueryString';
import { Loader } from '../Loader';

/**
 *
 * @param param0 handles auth loading/error
 * @returns
 */
export const DashboardAuthValidation = ({
  rc: { request, pushPath },
  cac: {
    error: authError,
    loginWithRedirect,
    logout,
    isAuthenticated,
    loading: authLoading,
  },
  getDashboardPath,
  getUnauthedPage,
  addToast,
}: {
  addToast: (
    m: string,
    options?:
      | {
          appearance: 'error' | 'success';
          autoClose?: number;
        }
      | undefined,
  ) => void;
  getDashboardPath: () => string;
  /**
   * will goto when landing on page without auth. undefined will not redirect
   */

  getUnauthedPage: undefined | (() => string);
  cac: AuthedUserContext;
  rc: {
    request: IRequestCommon;
    pushPath: (p: string) => Promise<void>;
  };
}): { render?: JSX.Element; openApiDisabled: boolean } => {
  useGranularEffect(
    () => {
      if (authError) {
        const emailOption = authError.message.includes('email')
          ? ` We require the use of your email for the functionality of this app.
        You can update your settings at https://www.facebook.com/settings?tab=applications`
          : '';

        addToast(
          `An Error has occured with your login attempt.${emailOption}`,
          {
            appearance: 'error',
          },
        );

        error(`auth error:`, JSON.stringify(authError, null, 2));
        void logout();
      }
    },
    [authError],
    [authError, addToast, logout],
  );

  const forceLogin = Object.keys(request.url.query || {}).includes('login');
  if (forceLogin) {
    if (!isAuthenticated) {
      void loginWithRedirect(request.url.query.state);
      return { render: <></>, openApiDisabled: true };
    }

    if (isAuthenticated) {
      void pushPath(getDashboardPath());
      return { render: <></>, openApiDisabled: true };
    }
  }

  if (request.url.query.state && isAuthenticated) {
    const decoded = JSON.parse(fromBase64(request.url.query.state));
    if (decoded.redirect) {
      void pushPath(decoded.redirect);
      return { render: <></>, openApiDisabled: true };
    }
  }

  const serverAuthLoading =
    isServer &&
    !authError &&
    !authLoading &&
    !isAuthenticated &&
    Object.keys(request.url.query || {}).includes('code');

  if (authLoading || serverAuthLoading) {
    return {
      render: <Loader name="authload"></Loader>,
      openApiDisabled: true,
    };
  }

  if (!isAuthenticated && !authLoading && !authError && getUnauthedPage) {
    void pushPath(getUnauthedPage());
    return { render: <></>, openApiDisabled: true };
  }

  const openApiDisabled = !isAuthenticated || authLoading || !!authError;

  return { openApiDisabled };
};
