import React from 'react';
import Energy from "./Energy";


export default {
    title: 'Components/EnergyBar',
    component: Energy
}

export const Bar = () => <Energy initialCount={7} currentLevel={4}/>

