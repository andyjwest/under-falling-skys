import React from "react";
import {ReactComponent as Commander} from './helmet.svg';
import {ReactComponent as Tactical} from './laser.svg';
import {ReactComponent as Medical} from './astronaut.svg';
import {ReactComponent as Science} from './research.svg';
import {ReactComponent as Engineering} from './mars-rover.svg';
import {ReactComponent as Threat} from './radars.svg';

const style = {
    width: '100%',
    height: '100%'
}

export default {
    Commander: <Commander style={style}/>,
    Tactical:<Tactical style={style}/>,
    Medical:<Medical style={style}/>,
    Science:<Science style={style}/>,
    Engineering:<Engineering style={style}/>,
    Threat: <Threat style={style}/>
}
