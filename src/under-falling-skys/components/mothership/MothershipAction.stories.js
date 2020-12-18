import React from "react";
import MothershipAction from "./MothershipAction";

export default {
    title: 'Components/MotherShip Action',
    component: MothershipAction
}

const Template = args => <MothershipAction {...args} />

export const One = Template.bind({})

One.args = {
    difficultly:[true, true, true, true],
    motherShipRow: 0
}


