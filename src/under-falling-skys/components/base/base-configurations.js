export const excavatorLocation = (easy) => easy ? [8] : [8]

export const base1Easy = [
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},

    {type: ['energy'], diceModifier: -1},
    {type: ['robot'], diceModifier: -1, energyCost: 1},
    {type: ['fighter'], diceModifier: -1, energyCost: 1},
    {},
    {type: ['research'], diceModifier: -1, energyCost: 1},

    {type: ['research'], energyCost: 1},
    {type: ['energy'], columnSpan: 2},
    {type: ['fighter'], energyCost: 2},
    {type: ['excavator']}
]
export const base1Hard = [
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},
    {type: ['down']},

    {type: ['energy'], diceModifier: -2, columnSpan: 2},
    {type: ['fighter'], energyCost: 2},
    {type: ['research'], diceModifier: -2},
    {type: ['excavator']},

    {type: ['fighter'], energyCost: 2, diceModifier: 1},
    {type: ['research'], energyCost: 2, diceModifier: 1},
    {},
    {type: ['energy', 'robot'], diceModifier: -6, columnSpan: 2}
]
export const base2Easy = [
    {type: ['robot'], energyCost: 2},
    {type: ['fighter'], energyCost: 2, diceModifier: 1},
    {type: ['research'], columnSpan: 2, energyCost: 1},
    {type: ['energy']},

    {type: ['energy', 'fighter'], diceModifier: -3, columnSpan: 2},
    {},
    {type: ['robot'], energyCost: 1},
    {type: ['fighter'], energyCost: 1},

    {},
    {type: ['research'], energyCost: 1, columnSpan: 3},
    {},
]
export const base2Hard = [
    {type: ['robot'], diceModifier: -1},
    {type: ['research', 'fighter'], diceModifier: -3, columnSpan: 2},
    {type: ['energy'], diceModifier: -1},
    {type: ['fighter'], diceModifier: -1},

    {},
    {type: ['fighter'], columnSpan: 2},
    {type: ['robot'], energyCost: 2},
    {type: ['research'], energyCost: 1, rowSpan: 2},

    {type: ['research'], diceModifier: 2, energyCost: 3},
    {},
    {}
]
