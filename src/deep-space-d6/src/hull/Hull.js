import React from "react";
import './hull.css'
import {HullContext} from "../hull-context";

const Hull = () => <HullContext.Consumer>
        {({hull}) =>
            <div>
                {Array(8).fill(0).map((it, index) => {
                    const hullValue = 8 - index
                    return <div className={`hull${hullValue > hull ? ' damaged' : ''}`}>
                        {hullValue}
                    </div>
                })}
            </div>
        }
    </HullContext.Consumer>

export default Hull
