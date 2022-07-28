import { UserImage, UserProfileImage } from '../src/ui/components/UserImage';
import { User } from '../src/ui/helpers/jwt';
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
WorkingUserImage.args = {
  image: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
};

export const BrokenUserImage = TemplateUserImage.bind({});
BrokenUserImage.args = {
  image: 'https://xxx',
};

export const WorkingUserProfileImage = TemplateUserProfileImage.bind({});
WorkingUserProfileImage.args = {
  user: {
    picture: 'https://avatars.githubusercontent.com/u/1860848?s=40&v=4',
    fullname: 'test name',
  },
} as { user: User };

export const BrokenUserProfileImage = TemplateUserProfileImage.bind({});
BrokenUserProfileImage.args = {
  user: { picture: 'https://xxx' },
} as { user: User };
