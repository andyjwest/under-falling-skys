import React from "react";
import './icons.scss'
import {ReactComponent as Research} from './universe.svg'
import {ReactComponent as Target} from './target.svg'
import {ReactComponent as Robot} from './robot.svg'

export const Bolt = (scale = 1) => <i className='gg-bolt' style={{scale}}/>

export const types = {
    energy: Bolt(),
    down: <i className='gg-arrow-down-r'/>,
    fighter: <Target style={{width:"30px", height:"30px"}}/>,
    research: <Research style={{width:"30px", height:"30px"}}/>,
    robot: <Robot style={{width:"30px", height:"30px"}}/>
}
