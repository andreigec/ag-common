import styled from 'styled-components';
import React, { useState } from 'react';
import { warn } from '../../../common/helpers/log';
import { notEmpty } from '../../../common/helpers/array';
import { AxiosWrapper, User } from '../../helpers/jwt';
export const UserImageIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-58.6 0-111.1-26.6-146.1-68.3 17.8-7.7 62.2-23.7 90.3-31.9 2.2-.7 2.6-.8 2.6-10.7 0-10.6-1.2-18.1-3.8-23.6-3.5-7.5-7.7-20.2-9.2-31.6-4.2-4.9-9.9-14.5-13.6-32.9-3.2-16.2-1.7-22.1.4-27.6.2-.6.5-1.2.6-1.8.8-3.7-.3-23.5-3.1-38.8-1.9-10.5.5-32.8 15-51.3 9.1-11.7 26.6-26 58-28h17.5c31.9 2 49.4 16.3 58.5 28 14.5 18.5 16.9 40.8 14.9 51.3-2.8 15.3-3.9 35-3.1 38.8.1.6.4 1.2.6 1.7 2.1 5.5 3.7 11.4.4 27.6-3.7 18.4-9.4 28-13.6 32.9-1.5 11.4-5.7 24-9.2 31.6-3.3 6.9-6.6 15.1-6.6 23.3 0 9.9.4 10 2.7 10.7 26.7 7.9 72.7 23.8 93 32.1-35 41.8-87.5 68.5-146.2 68.5z" />
  </svg>
);

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
}: {
  image?: string;
  className?: string;
}) => {
  const [fallback, setFallback] = useState(false);
  const showImage = image && !fallback;

  return (
    <Base className={className} title={'user image'}>
      {showImage && (
        <Img alt="user" src={image} onError={() => setFallback(true)} />
      )}
      {!showImage && UserImageIcon}
    </Base>
  );
};

export const UserProfileImage = ({
  className,
  user,
}: {
  className?: string;
  user: AxiosWrapper<User>;
}) => {
  const image = user?.data?.picture;

  if (image) {
    if (!images.domains.find((i) => (image as string).includes(i))) {
      warn(`bad domain:${image}`);
    }
  }

  const titleA = [user?.data?.fullname, user?.data?.userId].filter(notEmpty);
  const title = titleA.length === 0 ? '' : titleA.join(' - ');

  return (
    <Base className={className} title={title}>
      {image && <Img alt="user" src={image} />}
      {!image && UserImageIcon}
    </Base>
  );
};
