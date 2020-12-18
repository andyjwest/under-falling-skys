import React from "react";
import './card.css'
import svgMap from "../svgs/svgMap";
import {CardSchema} from "../Cards/data";
import {bool} from "prop-types";
import Die from "../atoms/Die";

const Card = ({name, activation, health, awayMission, drawn, effect, destroyed, showFireOverlay, selectOverlay, discardAfter}) =>
    <div className={`card${showFireOverlay ? ' overlay-parent' : ''}`}>
        {showFireOverlay && <div className={'fire-overlay'} onClick={selectOverlay}/>}
        {health && <div className={'health'}>
            {Array(health).fill(0).map(it => <div className={'health-bar'}/>)}
        </div>}
        <h1>{name}</h1>
        <div>{drawn}</div>
        {Array.isArray(activation) && <div className={'activation'}>
            {activation.map(it => <Die>{it}</Die>)}
        </div>}
        <div>{effect}{discardAfter === 'activation' && ' then discard'}</div>
        <div>{!!destroyed && `When Destroyed: ${destroyed}`}</div>
        <div className={'away-mission'}>{awayMission && awayMission.map(it => <Die>{svgMap[it]}</Die>)}</div>
    </div>

Card.propTypes = {
    ...CardSchema,
    showFireOverlay: bool
}

export default Card
