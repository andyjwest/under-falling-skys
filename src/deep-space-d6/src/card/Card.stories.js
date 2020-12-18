import React from 'react';

import Card from './Card';
import data from '../Cards/data'

export default {
    title: 'Card',
    component: Card,
    argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Full = Template.bind({});
Full.args = {
    name: 'Nebula',
    activation: [1, 2, 3, 4, 5],
    health: 3,
    effect: "-1 Health"
};

export const Hijackers = Template.bind({});
Hijackers.args = {
    name: 'Hijackers',
    type: 'External',
    activation: [4, 5],
    health: 4,
    effect: '-2 TurnTrack',
    awayMission: ['Commander', 'Commander']
}

export const Random = Template.bind({});
Random.args = data[Math.floor(Math.random() * Math.floor(data.length))]

export const Distracted = Template.bind({});
Distracted.args = data.find(it =>  it.name === 'Distracted')

export const HijackersFire = Template.bind({});
HijackersFire.args = {
    name: 'Hijackers',
    type: 'External',
    activation: [4, 5],
    health: 4,
    effect: '-2 TurnTrack',
    awayMission: ['Commander', 'Commander'],
    showFireOverlay: true
}
