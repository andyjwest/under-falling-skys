import React from "react";
import Sky from './Sky'

export default {
    title: 'Templates/Sky',
    component: Sky
}

const Template = args => <Sky {...args} />

export const SkyALLEasy = Template.bind({})

SkyALLEasy.args = {
    difficultly:[true, true, true, true],
    ships: [
        {x:0, y:0},
        {x:1, y:1},
        {x:2, y:2},
        {x:3, y:3},
        {x:4, y:4}
    ]
}
//
// export const SkyAllEasyNoShips = () => <Sky difficultly={[true, true, true, true]} shiftShip={(value, shipIndex)=>{}} motherShipRow={4}/>
// export const SkyAllHardNoShips = () => <Sky difficultly={[false, false, false, false]} />


