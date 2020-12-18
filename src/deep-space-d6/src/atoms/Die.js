import React from "react";
import './die.css'
import {node, oneOf} from "prop-types";
import conditions from "./conditions";

const Die = ({children, condition}) => <div className={'die'}>
    {children}
    {!!condition && <div className={condition + ' overlay'} />}
</div>

Die.propTypes = {
    children: node,
    condition: oneOf(Object.keys(conditions))
}

export default Die
