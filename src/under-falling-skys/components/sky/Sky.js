import React, {useContext} from "react";
import {rows} from "./sky-data";
import {arrayOf, bool, func, number, shape} from "prop-types";
import './sky.scss'
import SkySpace from "./SkySpace";
import ShipsContext from '../../../ships-context'
import Ship from "../../../atoms/ship/Ship";
import {ReactComponent as MotherShip} from "../../../atoms/icons/mothership.svg";
import {types} from "../../../atoms/icons/Icons";
import Bracket from "../../../atoms/icons/Bracket";

const Sky = ({difficultly, motherShipRow}) => {

    const {ships, moveMothership, shift} = useContext(ShipsContext)

    return <div
        className='sky' style={{gridTemplateRows: `repeat(${rows.length - motherShipRow -1}, 100px)`}}>
            {rows(difficultly).map((row, y) => {
                if(motherShipRow > y){
                    return <></>
                }
                return row.map((cell, x) => {
                    let ship
                    let shipIndex
                    if(ships){
                        ship = ships.find(ship => ship.x === x && ship.y === y)
                        shipIndex = ships.indexOf(ship)
                    }
                    return <SkySpace key={`${x}-${y}`}>
                        {ship && <Ship />}
                        {Object.entries(cell).map(([key, value]) => {
                            switch (key) {
                                case 'shift' : return value === 1 ? types.next : types.previous
                                case 'fighter' : return <Bracket size='50px' value={value}/>
                                case 'mothership' : return <MotherShip style={{width: '15px', height: '15px'}}/>
                                default : return <></>
                            }
                        })}</SkySpace>
                })
            })}
    </div>
}

export default Sky

Sky.defaultProps = {
    difficultly: [true, true, true, true],
    motherShipRow: -1
}

Sky.propTypes = {
    difficultly: arrayOf(bool),
    ships: arrayOf(shape({
        x: number,
        y: number
    })),
    motherShipRow: number,
    shiftShip: func
}
