export const types = {
    excavation: 'excavation',
    damage: 'damage',
    reinforce: 'reinforce',
    research: 'research',
    lose: 'lose'
}

export const rows = (difficultly) => [...tile1(difficultly[0]), ...tile2(difficultly[1]), ...tile3(difficultly[2]), ...[{}, {}, {}]]


export const tile1 = (easy) => easy ? [
    {

    },{
        type: types.excavation,
        value: -1
    }, {
        type: types.reinforce,
        value: 1
    }, {
        type: types.research,
        value: -1
    }
] : [
    {
        type: types.excavation,
        value: -2
    },{
        type: types.excavation,
        value: -2
    }, {
        type: types.reinforce,
        value: 1
    }, {
        type: types.excavation,
        value: -1
    }
]
export const tile2 = (easy) => easy ? [
    {
        type: types.excavation,
        value: -1
    },{
        type: types.excavation,
        value: -2
    }, {
        type: types.research,
        value: 2
    }, {
        type: types.reinforce,
        value: 1
    }
] : [
    {
        type: types.reinforce,
        value: 1
    },{
        type: types.research,
        value: -2
    }, {
        type: types.research,
        value: -2
    }, {
        type: types.excavation,
        value: -1
    }
]

export const tile3 = easy => easy ? [
    {
        type: types.excavation,
        value: -1
    },{
        type: types.damage,
        value: 1
    }, {

    }, {
        type: types.lose,
    }
] : [
    {
        type: types.damage,
        value: 1
    },{
        type: types.research,
        value: -1
    }, {
        type: types.lose,
    }, {

    }
]
