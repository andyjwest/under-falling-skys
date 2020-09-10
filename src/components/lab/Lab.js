import React from "react";
import './lab.scss'

export default function ({labSettings, progress}) {

    return <div className='lab'>{labSettings.map((value, index) => {
        return <div className={`step${ (progress > index) ? ' full' : ''}`}><div>{value}</div></div>
    })
    }

    </div>
}
