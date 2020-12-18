import React from "react";

export const ThreatContext = React.createContext({
    internal: [],
    external: [],
    damageExternal: ()=> {},
    assignToInternal: ()=> {},
    stasis: {internal: [], external: []},
    addStasis: ()=>{}
})
