import React, {useState} from "react";
import {ThreatContext} from "../threat-context";
import {func} from "prop-types";

const Science = ({isDisabled, setCrewToUsed}) => {

    const [target, setTarget] = useState('{}')

    return <div>
        <ThreatContext.Consumer>
            {({external, internal, addStasis}) => <>
                <select value={target} onChange={(e)=> setTarget(e.target.value)}>
                    <optgroup label='External'>
                        {external.map((it, index) => <option value={`external-${index}`}>{it.name} {it.health}</option>)}
                    </optgroup>
                    <optgroup label='Internal'>
                        {internal.map((it, index) => <option value={`internal-${index}`}>{it.name}</option>)}
                    </optgroup>
                </select>
                <button disabled={isDisabled()}
                        onClick={()=>{
                            console.log(JSON.parse((target)))
                            addStasis(JSON.parse(target))
                            setCrewToUsed()
                        }}>Stasis
                </button>
            </>}
        </ThreatContext.Consumer>


    </div>
}

Science.propTypes = {
    setCrewToUsed: func.isRequired,
    isDisabled: func.isRequired,
}

export default Science
