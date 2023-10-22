import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StyledButton from '.';

// 파일 안의 스토리 설정 (메타데이터 객체)
export default {
  // 그룹명
  title: 'stories/Button',
  // 사용하는 컴포넌트
  component: StyledButton,
  argTypes: {
    backgroundColor: { control: 'text' },
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = function Template(args) {
  return <StyledButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'bg-blue-500',
  label: 'Primary Button',
};

export const Success = Template.bind({});
Success.args = {
  backgroundColor: 'bg-yellow-500',
  label: 'Success Button',
};

export const Example = Template.bind({});
Example.args = {
  backgroundColor: 'bg-green-500',
  label: 'Example Button',
};
