import { warn } from '../../../common/helpers/log';
import { notEmpty } from '../../../common/helpers/array';
import { User } from '../../helpers/jwt';
import React, { useState } from 'react';
import styled from 'styled-components';
import { UserOutline } from '../../icons/UserOutline';

const Base = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: solid 1px white;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const images = {
  domains: ['platform-lookaside.fbsbx.com', 'lh3.googleusercontent.com'],
};

export const UserImage = ({
  image,
  className,
  title = 'user image',
}: {
  image?: string;
  className?: string;
  title?: string;
}) => {
  const [fallback, setFallback] = useState(false);

  return (
    <Base className={className} title={title}>
      {image && !fallback && (
        <Img alt="user" src={image} onError={() => setFallback(true)} />
      )}
      {(!image || fallback) && UserOutline}
    </Base>
  );
};

export const UserProfileImage = ({
  className,
  user,
}: {
  className?: string;
  user?: User;
}) => {
  const image = user?.picture;

  if (image) {
    if (!images.domains.find((i) => (image as string).includes(i))) {
      warn(`bad domain:${image}`);
    }
  }

  const titleA = [user?.fullname, user?.userId].filter(notEmpty);
  const title = titleA.length === 0 ? '' : titleA.join(' - ');

  return <UserImage image={image} title={title} className={className} />;
};
