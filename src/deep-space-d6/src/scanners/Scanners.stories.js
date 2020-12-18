import React from 'react';

import Scanners from './Scanners';

export default {
  title: 'Scanners',
  component: Scanners,
  argTypes: {},
};

const Template = (args) => <Scanners {...args} />;

export const Full = Template.bind({});
Full.args = {
  threatLevel: 2
};
