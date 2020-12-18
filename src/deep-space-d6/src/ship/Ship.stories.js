import React from 'react';

import Ship from './Ship';
import {rollCrewDice} from "../Cards/data";
import {CrewTypes} from "../Cards/crewType";

export default {
  title: 'Ship',
  component: Ship,
  argTypes: {},
};

const Template = (args) => <Ship {...args} />;

export const Random = Template.bind({});
Random.args = {
  crew: rollCrewDice(5)
};

export const Commanders = Template.bind({});
Commanders.args = {
  crew: ['Commander', 'Commander', 'Commander']
};

export const All = Template.bind({});
All.args = {
  crew: CrewTypes
};
