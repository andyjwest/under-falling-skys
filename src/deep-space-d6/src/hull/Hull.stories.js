import React from 'react';

import Hull from './Hull';
import {HullContext} from "../hull-context";

export default {
  title: 'Hull',
  component: Hull,
  argTypes: {},
};

const Template = (args) => <HullContext.Provider value={args}>
  <Hull />
</HullContext.Provider>;

export const Full = Template.bind({});
Full.args = {
  hull: 8
};
