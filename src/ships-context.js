import React from "react";

export default React.createContext({
    positions :[
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
    ],
    shift: (value, index) => {},
    moveMothership: (value)=> {},
})
