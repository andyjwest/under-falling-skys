import React from "react";
import {rows} from "./data";
import {arrayOf, bool, number} from "prop-types";
import './MothershipActions.scss'
import SkySpace from "../sky/SkySpace";

const MothershipAction = ({difficultly, motherShipRow})=> <div className={'mothership-actions'}>
    {rows(difficultly).map((it, i) => i+1 > motherShipRow
        ? <SkySpace>{it.type} {it.value}</SkySpace>
        : <></>
    )}
</div>

export default MothershipAction

MothershipAction.propTypes = {
    difficultly: arrayOf(bool),
    motherShipRow: number.isRequired
}
