import React from "react";
import {number} from "prop-types";
import './shields.css'

const Shields = ({currentShields}) => {
    return <div>
        {Array(4).fill(0).map((it, index) => {
            const hullValue = 4 - index
            return <div key={index} className={`shields${hullValue > currentShields ? ' down': ''}`}>
                {hullValue}
            </div>
        })}
    </div>
}

Shields.propTypes = {
    currentShields: number
}

export default Shields
