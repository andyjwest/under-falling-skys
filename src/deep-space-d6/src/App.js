import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import {HullContext} from "./hull-context";
import Hull from "./hull/Hull";
import Shields from "./shields/Shields";
import Scanners from "./scanners/Scanners";
import data from "./card/data";
import DamageTrack from "./damage-track/DamageTrack";
import {PhaseContext} from "./phase-context";
import Ship from "./ship/Ship";
import InternalThreats from "./internal-threats/InternalThreats";
import {ThreatContext} from "./threat-context";

function App() {

    const [hull, setHull] = useState(8)
    const [shield, setShield] = useState(4)
    const [scanner, setScanner] = useState(0)
    const [internalThreats, setInternalThreats] = useState([])
    const [externalThreats, setExternalThreats] = useState([])
    const [stasis, setStasis] = useState({internal: [], external: []})
    const [threatDeck, setThreatDeck] = useState(data)
    const [phase, setPhase] = useState(0)

    const drawThreat = () => {
        const index = Math.floor(Math.random() * Math.floor(threatDeck.length))
        if (threatDeck[index].type === 'Internal') {
            setInternalThreats(internalThreats.concat(threatDeck[index]))
        } else {
            setExternalThreats(externalThreats.concat(threatDeck[index]))
        }
        setThreatDeck(threatDeck.filter((it, i) => i !== index))
    }

    const addThreat = (count = 1) => {
        let numberOfDraws = count
        if (count > threatDeck.length) {
            numberOfDraws = threatDeck.length
        }
        let indexes = []
        for (let i = 0; i < numberOfDraws; i++) {
            const index = Math.floor(Math.random() * Math.floor(threatDeck.length))
            if (!indexes.find(it => it === index)) {

            }
        }
    }

    useEffect(() => {
        drawThreat()
        drawThreat()
    }, [])

    useEffect(() => {
        if (scanner > 2) {
            drawThreat()
            setScanner(0)
        }
    }, [scanner])

    const reset = () => {
        setShield(4)
        setHull(8)
        setScanner(0)
        setThreatDeck(data)
        drawThreat()
        drawThreat()
    }

    const hullContext = {
        hull,
        shield,
        damageHull: value => {
            const hullValue = hull - value
            if (hullValue > 8) {
                setHull(8)
            } else if (hullValue < 0) {
                setHull(0)
            } else {
                setHull(hullValue)
            }
        },
        damageShield: value => {
            const shields = hull - value
            if (shields > 4) {
                setShield(4)
            } else if (shields < 0) {
                setShield(0)
            } else {
                setShield(shields)
            }
        }
    }
    const threatContext = useMemo(()=> ({
        internal: internalThreats,
        external: externalThreats,
        damageExternal: (index, damage) => {
            let clone = externalThreats.slice()
            clone[index].health = clone[index].health - damage
            if (clone[index].health < 1) {
                clone = clone.slice(index)
            }
            setExternalThreats(clone)
        },
        assignToInternal: (index, members = []) => {

        },
        stasis: stasis,
        addStasis: (stasis)=> {
            setStasis({
                external: stasis.external,
                internal: stasis.internal
            })
        }
    }), [internalThreats, externalThreats, setExternalThreats, setExternalThreats, stasis, setStasis])

    const increaseScannerValue = useCallback((amount) => setScanner(scanner + amount), [])

    return <div>
        <PhaseContext.Provider value={{
            phase: phase,
            nextPhase: () => {
                if (phase > 1) {
                    setPhase(0)
                } else {
                    setPhase(phase + 1)
                }
            }
        }}>
        </PhaseContext.Provider>
        <div className={'flex'}>
            <HullContext.Provider value={hullContext}>
                <InternalThreats threats={internalThreats}/>
                <div>
                    <Shields/>
                    <Hull/>
                </div>
                <ThreatContext.Provider value={threatContext}>
                    <div>
                        <Scanners threatLevel={scanner}/>
                        <Ship increaseThreatLevel={increaseScannerValue}
                              threatLevel={scanner}
                        />
                    </div>
                    {externalThreats && <DamageTrack threats={externalThreats}/>}
                </ThreatContext.Provider>
        </HullContext.Provider>
    </div>
</div>
}

export default App;
