import React from 'react';
import Game from './Game'

export default {
    title: 'Components/Game',
    component: Game
}

export const One = args => <Game {...args}/>

One.args = {
    tileDifficulty:[true, true, true, true],
    labDifficulty: false,
    baseDifficulty: [false, false]
}
