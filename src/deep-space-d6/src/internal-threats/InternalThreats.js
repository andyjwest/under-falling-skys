import React from "react";
import {number} from "prop-types";
import './internal-threats.css'
import Card from '../card/Card';

const InternalThreats = ({threats}) =>
    <div className={'internal-threats'}>
        {threats.map(threat => <Card {...threat}/>)}
    </div>

InternalThreats.propTypes = {
    currentHull: number
}

export default InternalThreats
