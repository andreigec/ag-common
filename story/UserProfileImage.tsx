import {
  IUserImage,
  IUserProfileImage,
  UserImage,
  UserProfileImage,
} from '../src/ui/components/UserImage';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/UserProfileImage',
  component: UserImage,
} as ComponentMeta<typeof UserImage>;

const TemplateUserImage: ComponentStory<typeof UserImage> = (args) => (
  <UserImage {...args} />
);

const TemplateUserProfileImage: ComponentStory<typeof UserProfileImage> = (
  args,
) => <UserProfileImage {...args} />;

export const WorkingUserImage = TemplateUserImage.bind({});
const wui: IUserImage = {
  image: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
};

WorkingUserImage.args = wui;

export const BrokenUserImage = TemplateUserImage.bind({});
const bui: IUserImage = {
  image: 'https://xxx',
};

BrokenUserImage.args = bui;

export const WorkingUserProfileImage = TemplateUserProfileImage.bind({});
const wupi: IUserProfileImage = {
  user: {
    picture: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
    fullname: 'test name',
    userId: 'my id',
  },
};

WorkingUserProfileImage.args = wupi;

export const BrokenUserProfileImage = TemplateUserProfileImage.bind({});
const bupi: IUserProfileImage = {
  user: { picture: 'https://xxx', fullname: 'full name', userId: 'my id' },
};

BrokenUserProfileImage.args = bupi;
