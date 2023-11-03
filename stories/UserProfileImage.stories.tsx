// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type {
  IUserImage,
  IUserProfileImage,
} from '../src/ui/components/UserImage';
import { UserImage, UserProfileImage } from '../src/ui/components/UserImage';

const base: Meta<typeof UserImage> = {
  title: 'UI/UserProfileImage',
  component: UserImage,
};

const TemplateUserImage: StoryFn<typeof UserImage> = (args) => (
  <UserImage {...args} />
);

const TemplateUserProfileImage: StoryFn<typeof UserProfileImage> = (args) => (
  <UserProfileImage {...args} />
);

export const WorkingUserImage: StoryFn<IUserImage> = TemplateUserImage.bind({});

WorkingUserImage.args = {
  image: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
} satisfies IUserImage;

export const BrokenUserImage: StoryFn<IUserImage> = TemplateUserImage.bind({});

BrokenUserImage.args = {
  image: 'https://xxx',
} satisfies IUserImage;

export const WorkingUserProfileImage: StoryFn<typeof UserProfileImage> =
  TemplateUserProfileImage.bind({});

WorkingUserProfileImage.args = {
  user: {
    picture: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
    fullname: 'test name',
    userId: 'my id',
  },
} satisfies IUserProfileImage;

export const BrokenUserProfileImage: StoryFn<typeof UserProfileImage> =
  TemplateUserProfileImage.bind({});

BrokenUserProfileImage.args = {
  user: { picture: 'https://xxx', fullname: 'full name', userId: 'my id' },
} satisfies IUserProfileImage;
export default base;

export const DefaultWithArgs = () => (
  <WorkingUserImage {...(WorkingUserImage.args as IUserProfileImage)} />
);
