import React from 'react';

import App from './App';

export default {
    title: 'App',
    component: App,
    argTypes: {},
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
