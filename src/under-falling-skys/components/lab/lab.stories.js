import React from 'react';
import Lab from "./Lab";
import {easyLab, hardLab} from "./lab-data"


export default {
    title: 'Components/Lab',
    component: Lab
}

export const Easy = () => <Lab labSettings={easyLab}/>
export const Easy4 = () => <Lab labSettings={easyLab} progress={4}/>
export const Hard = () => <Lab labSettings={hardLab}/>

