import React from "react";
import Row from "./Row";

export default {
    title: 'Molecules/Row',
    component: Row
}

function TestCell({data}){
    return <div>{data}</div>
}

export const One = () => <Row data={["test1", 'test2']} Component={TestCell}/>



