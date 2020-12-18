import React from 'react';

import CrewPool from './CrewPool';
import {rollCrewDice} from "./data";

export default {
  title: 'CrewPool',
  component: CrewPool,
  argTypes: {},
};

const Template = (args) => <CrewPool {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  crew: rollCrewDice(5)
};

export const FourRandoms = Template.bind({});
FourRandoms.args = {
  crew: rollCrewDice(4)
};

export const ThreeRandoms = Template.bind({});
ThreeRandoms.args = {
  crew: rollCrewDice(3)
};
