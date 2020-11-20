import React, {useContext} from "react";
import {rows} from "./sky-data";
import {arrayOf, bool, func, number, shape} from "prop-types";
import './sky.scss'
import SkySpace from "./SkySpace";
import ShipsContext from '../../../ships-context'
import Ship from "../../../atoms/ship/Ship";

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
                                case 'shift' : return <>Move {value}</>
                                case 'fighter' : return <>Fighter {value}</>
                                case 'mothership' : return <>Mothership {value}</>
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
