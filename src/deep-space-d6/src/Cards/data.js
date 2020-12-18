import {arrayOf, oneOf, string} from "prop-types";
import {CrewTypes} from "./crewType";

export const CardSchema = {
    name: string.isRequired,
    type: oneOf(['Internal', 'External']),
    activation: arrayOf(oneOf([1, 2, 3, 4, 5, 6])),
    health: oneOf([1, 2, 3, 4]),
    drawn: string,
    effect: string,
    destroyed: string,
    awayMission: arrayOf(oneOf(CrewTypes)),
    discardAfter: oneOf(['activation'])
}

export const rollDice = () => Math.floor(Math.random() * Math.floor(6));

export const rollCrewDice = (crewCount) => Array(crewCount).fill(0)
    .map(() => CrewTypes[rollDice()])
