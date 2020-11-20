import React from "react";
import {element} from "prop-types";
import './sky-space.scss'

const SkySpace = ({children})=> {
    return <div className='sky-space'>{children}</div>
}

SkySpace.propTypes = {
    children: element
}

export default SkySpace
