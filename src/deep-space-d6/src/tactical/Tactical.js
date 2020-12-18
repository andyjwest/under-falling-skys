import React, {useState} from "react";
import {ThreatContext} from "../threat-context";
import {bool, func} from "prop-types";

const Tactical = ({isDisabled, setCrewToUsed, usedThisRound}) => {

    const [target, setTarget] = useState(0)

    return <div>
        <ThreatContext.Consumer>
            {({external, damageExternal}) => <>
                <select value={target} onChange={(e)=> setTarget(e.target.value)}>
                    {external.map((it, index) => <option value={index}>{it.name} {it.health}</option>)}
                </select>
                <button disabled={isDisabled()}
                        onClick={()=>{
                            if(usedThisRound){
                                damageExternal(target, 2)
                            }else{
                                damageExternal(target, 1)
                            }
                            setCrewToUsed()
                        }}>Fire
                </button>
            </>}
        </ThreatContext.Consumer>


    </div>
}

Tactical.propTypes = {
    setCrewToUsed: func.isRequired,
    isDisabled: func.isRequired,
    usedThisRound: bool
}

export default Tactical
