'use client';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import { notEmpty } from '../../../common/helpers/array';
import { UserOutline } from '../../icons/UserOutline';

const Base = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: solid 1px white;
  overflow: hidden;
  position: relative;

  @keyframes color {
    0% {
      fill: #bbb;
    }
    50% {
      fill: #aaa;
    }
    100% {
      fill: #bbb;
    }
  }
  svg {
    transition: all 1s;
  }
  &[data-fail='0'] {
    svg {
      fill: white;
    }
  }
  &[data-fail='0.5'] {
    svg {
      animation-name: color;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
  &[data-fail='1'] {
    svg {
      fill: #333;
    }
  }
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export interface IUserImage {
  image?: string;
  className?: string;
  /** default "user image" */
  title?: string;
}
export const UserImage = ({
  image,
  className,
  title = 'user image',
}: IUserImage) => {
  const [failed, setFailed] = useState<0 | 0.5 | 1>(0);
  useEffect(() => {
    setFailed(0.5);
  }, []);

  return (
    <Base className={className} title={title} data-fail={failed}>
      {UserOutline}
      {failed !== 1 && (
        <Img
          alt="user"
          src={image}
          onError={() => setFailed(1)}
          onAbort={() => setFailed(1)}
        />
      )}
    </Base>
  );
};

export interface IUserProfileImage {
  className?: string;
  user?: { picture: string; fullname: string; userId: string };
}
export const UserProfileImage = ({ className, user }: IUserProfileImage) => {
  const image = user?.picture;

  const titleA = [user?.fullname, user?.userId].filter(notEmpty);
  const title = titleA.length === 0 ? '' : titleA.join(' - ');

  return <UserImage image={image} title={title} className={className} />;
};
