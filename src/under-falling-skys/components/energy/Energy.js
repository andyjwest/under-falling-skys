import React from "react";
import './energy.scss'

export default function Energy({initialCount, currentLevel}) {

    console.log(Array(initialCount+1).fill(0))

    return <div className='energy-bar'>
        {Array(initialCount+1).fill(0).map((value, index) => {
            return index > currentLevel ? <div className='empty'>{index}</div> : <div className='full' >{index}</div>
            }
        )}
    </div>
}
