import React from "react";
import './lab.scss'
import icon from './flask.svg'

export default function ({labSettings, progress}) {

    return <div className='lab'>
        <img src={icon} style={{width: '54px'}} alt='Flask'/>
        {labSettings.map((value, index) => {
        return <div className={`step${ (progress > index) ? ' full' : ''}`}><div>{value}</div></div>
    })
    }

    </div>
}
