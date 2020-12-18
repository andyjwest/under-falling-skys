import React from 'react';

import Shields from './Shields';

export default {
  title: 'Shields',
  component: Shields,
  argTypes: {},
};

const Template = (args) => <Shields {...args} />;

export const Full = Template.bind({});
Full.args = {
  currentShields: 3
};
