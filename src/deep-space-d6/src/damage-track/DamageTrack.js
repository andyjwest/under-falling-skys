import React from "react";
import {arrayOf, shape} from "prop-types";
import './damage-track.css'
import {CardSchema} from "../Cards/data";
import Card from "../card/Card";

const DamageTrack = ({threats}) => <div style={{margin: '1em'}}>
    {Array(4).fill(0).map((zero, index) => <div className={'row'}>
        {threats.filter(it => it.health === 4-index).map((it, index) => <Card key={index} {...it} />)}
    </div>)}
    {threats.find(it => typeof it.health === 'undefined') && <div className={'row'}>
        {threats.filter(it => typeof it.health === 'undefined').map((it, index) => <Card key={index} {...it} />)}
    </div>}
</div>

DamageTrack.propTypes = {
    threats: arrayOf(shape(CardSchema))
}

export default DamageTrack
