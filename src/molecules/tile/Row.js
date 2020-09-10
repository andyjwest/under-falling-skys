import React from "react";
import './row.scss'
import {arrayOf, object} from "prop-types";

export default function Row({data, Component}) {
    return <div>
        {data.map(cellData => <Component data={cellData} />)}
    </div>
}

Row.propTypes = {
    data: arrayOf(object)
}
