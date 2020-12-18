import React from "react";
import './icons.scss'
import {ReactComponent as Research} from './universe.svg'
import {ReactComponent as Target} from './target.svg'
import {ReactComponent as Robot} from './robot.svg'
import {ReactComponent as Previous} from './previous.svg'
import {ReactComponent as Next} from './next.svg'

const size = '15px'

export const Bolt = (scale = 1) => <i className='gg-bolt' style={{scale: scale}}/>

export const types = {
    energy: Bolt(),
    down: <i className='gg-arrow-down-r'/>,
    fighter: <Target style={{width:size, height:size}}/>,
    research: <Research style={{width:size, height:size}}/>,
    robot: <Robot style={{width:size, height:size}}/>,
    next: <Next style={{width:size, height:size}}/>,
    previous: <Previous style={{width:size, height:size}}/>,
}
