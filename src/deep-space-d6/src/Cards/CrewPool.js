import React, {useCallback, useState} from "react";
import svgMap from "../svgs/svgMap";
import Die from "../atoms/Die";

const CrewPool = ({crew})=>{
    const [fireCount, setFireCount] = useState(0)
    const [repairCount, setRepairCount] = useState(0)

    return <div className={'flex'}>
        {crew.map(member => <div>
            <Die>{svgMap[member]}</Die>
        </div>)}
    </div>
}

export default CrewPool
