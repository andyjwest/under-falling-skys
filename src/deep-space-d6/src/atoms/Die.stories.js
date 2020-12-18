import React from 'react';

import Die from './Die';
import svgMap from "../svgs/svgMap";

export default {
  title: 'Die',
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />;

export const Commander = Template.bind({});
Commander.args = {
  children: svgMap.Commander
};

export const Threat = Template.bind({});
Threat.args = {
  children: svgMap.Threat
};

export const UsedScience = Template.bind({});
UsedScience.args = {
  children: svgMap.Science,
  condition: 'used'
};
