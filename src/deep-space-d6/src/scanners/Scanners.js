import React from "react";
import {number} from "prop-types";
import svgMap from "../svgs/svgMap";
import './scanners.css'
import Die from "../atoms/Die";
import crewType from "../Cards/crewType";

const Scanners = ({threatLevel}) => <div className={'space-evenly'}>
    {Array(3).fill(0).map((it, index) => {
        const threatSlot = 3 - index
        return <Die>{threatLevel >= threatSlot && svgMap[crewType.threat]}</Die>
    })}
</div>

Scanners.propTypes = {
    currentHull: number
}

export default Scanners
