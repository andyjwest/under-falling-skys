import React from 'react';
import data from '../Cards/data'

import InternalThreats from './InternalThreats';

export default {
  title: 'InternalThreats',
  component: InternalThreats,
  argTypes: {},
};

const Template = (args) => <InternalThreats {...args} />;

export const Few = Template.bind({});
Few.args = {
  threats: [
      data.find(it=> it.name === 'Distracted'),
      data.find(it=> it.name === 'Cloaked Threat'),
  ]
};

export const All = Template.bind({});
All.args = {
  threats: data.filter(it=> it.type === 'Internal')
};
