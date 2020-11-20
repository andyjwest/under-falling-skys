import React, {useEffect, useState} from "react";
import {Mothership} from "./components/mothership/Mothership";
import Sky from "./components/sky/Sky";
import ShipsContext from '../ships-context'
import Lab from "./components/lab/Lab";
import {easyLab, hardLab} from "./components/lab/lab-data"
import Energy from "./components/energy/Energy";
import MothershipAction from "./components/mothership/MothershipAction";
import {arrayOf, bool} from "prop-types";
import {rows as motherShipActionRows, types as mothershipActionTypes} from "./components/mothership/data";
import Base from "./components/base/Base";
import {base1Easy, base2Easy} from "./components/base/base-configurations";

const Game = ({tileDifficulty, labDifficulty, baseDifficulty}) => {
    const [ships, setShips] = useState(Array(5).fill(0).map((it, index) => ({x: index, y: 0})))
    const [motherShipRow, setMotherShipRow] = useState(0)
    const [labProgress, setLabProgress] = useState(0)
    const [energy, setEnergy] = useState(2)
    const [excavator, setExcavator] = useState(0)
    const [win, setWin] = useState(undefined)
    const [damage, setDamage] = useState(0)

    useEffect(()=> {
        const lives = baseDifficulty[0] && baseDifficulty[1] ? 5 : 4
        if(damage> lives){
            setWin(false)
        }
    }, [baseDifficulty, damage] )

    const moveShip = index => setShips(ships.map((it, i) => {
        if (i === index) {
            return {x: it.x, y: it.y + 1}
        } else {
            return it
        }
    }))

    const moveMothership = (value = 1)=> {
        const newRow = motherShipRow + value
        const action = motherShipActionRows[newRow]
        setMotherShipRow(newRow)
        if(action.type){
            switch(action.type){
                case mothershipActionTypes.damage: {
                    //TODO damage base
                    break
                }
                case mothershipActionTypes.research: {
                    setLabProgress(labProgress + action.value)
                    break
                }
                case mothershipActionTypes.reinforce : {
                    //todo
                    break
                }
                case mothershipActionTypes.excavation : {
                    setExcavator(excavator + action.value)
                    break
                }
                case mothershipActionTypes.lose : {
                    setWin(false)
                    break
                }
                default : {
                    break
                }
            }
        }
    }

    const grid = {
        display: 'grid',
        gridTemplateColumns: `repeat(5, 50px)`,
        gridTemplateRows: `repeat(6, 50px)`
    }

    return <div style={{display: 'flex'}}>
        <Energy currentLevel={energy} initialCount={7}/>
        <div>
            <Mothership/>
            <div style={{display: 'flex'}}>
                <MothershipAction motherShipRow={motherShipRow} difficultly={tileDifficulty}/>
                <ShipsContext.Provider value={{
                    ships: ships,
                    shift: (index, xOffset = 0, yOffset = 0) => {
                        setShips(ships.map((it, i) => {
                            if (i === index) {
                                return {
                                    x: it.x + xOffset,
                                    y: it.y + yOffset
                                }
                            }
                            return it
                        }))
                    },
                    moveMothership: (value) => {
                        setMotherShipRow(motherShipRow + value)
                    }
                }}>
                    <Sky motherShipRow={motherShipRow} difficultly={tileDifficulty}/>
                </ShipsContext.Provider>
            </div>
            <Base baseData={base1Easy.concat(base2Easy)}/>
            <div style={{display: 'grid'}}>

            </div>
            <button onClick={() => moveShip(0)}>Move 1</button>
            <button onClick={() => moveShip(1)}>Move 2</button>
            <button onClick={() => moveShip(2)}>Move 3</button>
            <button onClick={() => moveShip(3)}>Move 4</button>
            <button onClick={() => moveShip(4)}>Move 5</button>
            <button onClick={() => moveShip(4)}>Move 5</button>
            <button onClick={() => moveMothership()}>Mothership</button>
        </div>
        <Lab progress={labProgress} labSettings={labDifficulty ? easyLab : hardLab}/>
    </div>
}

export default Game

Game.propTypes = {
    tileDifficulty: arrayOf(bool),
    labDifficulty: bool
}
