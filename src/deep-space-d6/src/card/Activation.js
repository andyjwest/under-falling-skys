import React, {useContext} from "react";
import {arrayOf, number, string} from "prop-types";
import Die from "../atoms/Die";
import {HullContext} from "../hull-context";

const Activation = ({damage, on, description, infirmary}) => {
    const hullContext = useContext(HullContext)

    return <div className={'activation'}>
        {on.map(it => <Die>{it}</Die>)}
        <div>{description}</div>
    </div>
}

Activation.propTypes = {
    damage: number,
    on: arrayOf(number),
    description: string,
    infirmary: number
}

export default Activation
