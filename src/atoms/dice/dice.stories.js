import React from "react";
import Dice from './Dice'

export default {
    title: 'Atoms/Dice',
    component: Dice
}

export const WhiteDice = () => <div style={{width: '50px', height: '50px', backgroundColor: 'black'}}>
    <Dice color='white'/>
</div>
export const BlackDice = () => <Dice color='black'/>
export const BlueDice = () => <Dice color='blue'/>
