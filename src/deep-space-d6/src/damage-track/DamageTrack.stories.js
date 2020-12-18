import React from 'react';

import DamageTrack from './DamageTrack';
import data from "../Cards/data";

export default {
    title: 'DamageTrack',
    component: DamageTrack,
    argTypes: {},
};

const Template = (args) => <DamageTrack {...args} />;

export const Random = Template.bind({});
Random.args = {
    threats: [
        data[Math.floor(Math.random() * Math.floor(data.length))],
        data[Math.floor(Math.random() * Math.floor(data.length))],
    ]
};

export const Four = Template.bind({});
Four.args = {
    threats: [
        data.find(it => it.name === 'Assault Cruiser'),
        data.find(it => it.name === 'Bomber'),
        data.find(it => it.name === 'Mercenary'),
        data.find(it => it.name === 'Nebula'),
        data.find(it => it.name === 'Corsair'),
        data.find(it => it.name === 'Hijackers'),
        data.find(it => it.name === 'Drone'),
        data.find(it => it.name === 'Solar Winds'),
    ]
};

export const All = Template.bind({})
All.args = {
    threats: data.filter(it => it.type === 'External')
}
