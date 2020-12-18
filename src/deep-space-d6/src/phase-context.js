import React from "react";

export const PhaseContext = React.createContext({
    phase: 'crew',
    nextPhase: ()=> {},
})
