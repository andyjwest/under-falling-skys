import React from "react";

export const HullContext = React.createContext({
    hull: 8,
    shield: 4,
    damageHull: ()=> {},
    damageShield: ()=> {},
})
