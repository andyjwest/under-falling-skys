import React from "react";
import {ReactComponent as EmptyTarget} from './empty-target.svg'

const Bracket = ({size, value}) => <div style={{position: 'relative'}}>
    <div style={{lineHeight: size, textAlign: 'center', position: 'absolute', width: '100%', color: 'red'}}>
        {value}
    </div>
    <EmptyTarget style={{width: size, height: size, position: 'absolute'}}/>
</div>

export default Bracket
