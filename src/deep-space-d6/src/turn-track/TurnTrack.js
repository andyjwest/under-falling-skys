import React from "react";
import {any, arrayOf, oneOf} from "prop-types";
import './turn-track.css'
import {PhaseContext} from "../phase-context";
import CrewPool from "../Cards/CrewPool";

const TurnTrack = ({crew}) => <PhaseContext.Consumer>
    {({phase, nextPhase}) =>
        <div>
            <div className={'flex container'}>
                <div>
                    <div className={phase === 0 && 'active'}>Roll Crew</div>
                    <div className={phase === 1 && 'active'}>Assign Crew</div>
                    <div className={phase === 2 && 'active'}>Roll Threat Dice</div>
                </div>
                {phase === 0 && <button onClick={nextPhase}><h1>Roll Crew</h1></button> }
                {phase === 1 && <CrewPool crew={crew} /> }
                {phase === 2 && <button>Roll Crew</button> }
            </div>

        </div>
    }
</PhaseContext.Consumer>


TurnTrack.propTypes = {
    crew: arrayOf(any)
}

export default TurnTrack
