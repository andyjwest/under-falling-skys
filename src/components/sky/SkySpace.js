import React from "react";
import {object} from "prop-types";
import './sky-space.scss'
import Ship from "../../atoms/ship/Ship";

const SkySpace = ({data, ship, shiftShip})=> {
    return <div className='sky-space'>
        {ship && <Ship />}
        {Object.entries(data).map(([key, value]) => {
            switch (key) {
                case 'shift' : {
                    shiftShip(value)
                    return <>Move {value}</>
                }
                case 'fighter' : return <>Fighter {value}</>
                case 'mothership' : return <>mothership {value}</>
                default : return <></>
            }
        })}
    </div>
}

SkySpace.propTypes = {
    data: object.isRequired
}

export default SkySpace
