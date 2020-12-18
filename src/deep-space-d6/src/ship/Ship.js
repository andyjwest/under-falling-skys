import React, {useCallback, useState} from "react";
import './ship.css'
import {rollCrewDice} from "../Cards/data";
import {func, number} from "prop-types";
import {HullContext} from "../hull-context";
import Die from "../atoms/Die";
import svgMap from "../svgs/svgMap";
import conditions from "../atoms/conditions";
import crewType from "../Cards/crewType";
import Tactical from "../tactical/Tactical";
import Science from "./Science";

const Ship = ({increaseThreatLevel, threatLevel}) => {

    const rollCrew = useCallback((crew, isReroll = false) => {
        const persistentCrew = crew.filter(it => {
            if(isReroll){
                return typeof it.condition === 'undefined'
            }else {
                return !!it.condition && it.condition !== conditions.used
            }
        })

        let crewLength = crew.length - persistentCrew.length
        if(crew.length === 0){
            crewLength = 5
        }

        const crewTypes = rollCrewDice(crewLength)

        const threatCount = crewTypes.filter(it => it === crewType.threat).length
        if (threatCount > 0) {
            increaseThreatLevel(threatCount)
        }

        return crewTypes.map(it => ({
            type: it,
            condition: it === crewType.threat ? conditions.scanning : undefined,
        }))
    }, [increaseThreatLevel])

    const [infirm, setInfirm] = useState(0)

    const [crew, setCrew] = useState([])

    const setToUsed = type => {
        let firstTime = true
        const newCrew = crew.map(it => {
            if (firstTime && it.type === type && typeof it.condition === 'undefined') {
                firstTime = false
                return {
                    type: type,
                    condition: conditions.used
                }
            }
            return it
        })
        setCrew(newCrew)
    }

    const sendToInfirmary = () => {
        let clonedCrew = crew.slice()
        clonedCrew[infirm].condition = conditions.wounded
        setCrew(clonedCrew)
    }

    const showType = useCallback((type) => {
        return crew.filter(it => it.type === type).length > 0
    }, [crew])

    const isDisabled = type => !crew.filter(it => it.type === type && (typeof it.condition === 'undefined')).length > 0

    const rerollCrew = () => {
        let firstUnusedCommander = true
        const modifiedCrew = crew.map(it => {
            if (firstUnusedCommander && it.type === crewType.commander && !!it.condition) {
                firstUnusedCommander = false
                return {locked: false, used: true, type: it.type}
            }
            return it
        })
        const usedCrew = modifiedCrew.filter(it => it.used || it.locked)
        const unusedCrew = modifiedCrew.filter(it => !it.used && !it.locked)

        const rerolledCrew = rollCrew(unusedCrew.length)
        setCrew(usedCrew.concat(rerolledCrew))
    }

    const returnThreat = () => {
        setToUsed(crewType.medical)
        increaseThreatLevel(-1)
    }

    const heal = ()=> {
        let clonedCrew = crew.slice()
        setCrew(clonedCrew.map(it => {
            if(it.condition === conditions.wounded){
                return {
                    type: it.type,
                    condition: conditions.used
                }
            }
            return it
        }))
    }

    return <>
        <div className={'space-evenly'}>
            <button onClick={()=> {
                setCrew(rollCrew(crew))
            }}>Roll Crew</button>
            <button>Roll Threat</button>
        </div>
        <div className={'space-evenly'}>
            {crew.map((it, index) => <Die key={index} condition={it.condition}>{svgMap[it.type]}</Die>)}
        </div>
        <div className={'space-evenly'}>
            {showType(crewType.commander) && <>
                <button disabled={isDisabled(crewType.commander)} onClick={rerollCrew}>Reroll</button>
                <button disabled={isDisabled(crewType.commander)} onClick={() => {
                    console.log('TODO')
                }}>Command</button>
            </>}
            {showType(crewType.medical) && <>
                <button onClick={heal}>Heal</button>
                <button disabled={threatLevel === 0 || isDisabled(crewType.medical)} onClick={returnThreat}>
                    Return Threat
                </button>
            </>}
            {showType(crewType.science) && <>
                <HullContext.Consumer>
                    {({hull, shield, damageHull, damageShield}) => (
                        <button disabled={shield > 3} onClick={() => damageShield(-4)}>Charge Shields</button>
                    )}
                </HullContext.Consumer>
                <button onClick={() => console.log('TODO')}>Status</button>
            </>}
            {showType(crewType.engineering) && <HullContext.Consumer>
                {({hull, shield, damageHull, damageShield}) => (
                    <button disabled={isDisabled(crewType.engineering)} onClick={() => {
                        if (crew.find(it => it.type === conditions.used)) {
                            damageHull(-2)
                        } else {
                            damageHull(-1)
                        }
                    }}>Repair
                    </button>)}
            </HullContext.Consumer>}
            {}
        </div>
        {showType(crewType.tactical) &&
        <Tactical isDisabled={()=> isDisabled(crewType.tactical)}
                  setCrewToUsed={() => setToUsed(crewType.tactical)}
                  usedThisRound={!!crew.find(it => it.type === crewType.tactical && it.condition === conditions.used)}/>}
        {showType(crewType.science) && <Science setCrewToUsed={()=> setToUsed(crewType.science)} isDisabled={()=> isDisabled(crewType.science)} />}
        <HullContext.Consumer>
            {({hull, shield, damageHull, damageShield}) => (
                <button onClick={() => {
                    damageHull(1)
                }}>Damage Hull</button>)}
        </HullContext.Consumer>
        <div>
            <select onChange={e => setInfirm(e.target.value)} value={infirm}>
                {crew.map((it, index) => <option key={index} value={index}>{it.type}</option>)}
            </select>
            <button onClick={sendToInfirmary}>Send to infirmary</button>
        </div>
    </>
}

Ship.propTypes = {
    threatLevel: number.isRequired,
    increaseThreatLevel: func.isRequired
}

export default Ship
