import React, {useState} from "react";
import {Mothership} from "../components/mothership/Mothership";
import Sky from "../components/sky/Sky";

export default function (props) {
    const [ships, setShips] = useState(Array(5).fill({x:0,y:0}))
    return <div>
        <Mothership/>
        <Sky motherShipRow={0} shiftShip={(value, shipIndex) => {
            const newPosition = ships[shipIndex].x + value
            setShips(ships.map((ship, index) => index === shipIndex ? {x: newPosition, y: ship.y} : ship))
        }} ships={ships} difficultly={[]}/>

    </div>
}
