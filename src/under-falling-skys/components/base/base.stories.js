import React from "react";
import Base from './Base'
import {base1Easy, base1Hard, base2Easy, base2Hard} from './base-configurations'

export default {
    title: 'Components/Base',
    component: Base
}

export const BaseAllEasy = () => <Base baseData={base1Easy.concat(base2Easy)}/>
export const Base1Hard2Easy = () => <Base baseData={base1Hard.concat(base2Easy)}/>
export const BaseAllHard = () => <Base baseData={base1Hard.concat(base2Hard)}/>
export const Base1Easy2Hard = () => <Base baseData={base1Easy.concat(base2Hard)}/>

