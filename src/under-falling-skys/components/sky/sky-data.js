export const rows = (difficultly) => [
    ...tile1(difficultly[0]), ...tile2(difficultly[1]), ...tile3(difficultly[2]), ...tile4(difficultly[3])]

const shift = (value, shipContext) => {
    shipContext.shift(value)
}

export const tile1 = (easy) => easy ? [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {shift: -1}, {}],
    [{}, {fighter: 1}, {shift: 1}, {}, {}],
    [{fighter: 2}, {shift: 1}, {}, {}, {}]
] : [
    [{shift: 1}, {}, {}, {}, {}],
    [{}, {}, {shift: 1}, {}, {}],
    [{}, {shift: -1}, {}, {mothership: 1}, {fighter: 2}],
    [{mothership: 1}, {fighter: 3}, {}, {}, {shift: -1}],
]
export const tile2 = (easy) => easy ? [
    [{}, {}, {shift: -1}, {shift: 1}, {}],
    [{}, {shift: -1}, {mothership: 1}, {fighter: 2}, {}],
    [{fighter: 3}, {mothership: 1}, {shift: 1}, {}, {fighter: 4}],
    [{shift: 1}, {}, {fighter: 3}, {}, {shift: -1}]
] : [
    [{mothership: 1}, {}, {shift: -1}, {}, {mothership: 1}],
    [{}, {mothership: 1}, {}, {fighter: 5}, {fighter: 4}],
    [{shift: 1}, {}, {fighter: 4}, {shift: 1}, {}],
    [{fighter: 3}, {shift: 1}, {}, {fighter: 7}, {}],
]

export const tile3 = easy => easy ? [
    [{mothership: 1}, {fighter: 6}, {}, {shift: -1}, {}],
    [{shift: 1}, {}, {fighter: 3}, {mothership: 1}, {fighter: 2}],
    [{}, {shift: 1}, {}, {fighter: 5}, {}],
    [{}, {shift: -1}, {mothership: 1}, {}, {shift: -1}]
] : [
    [{}, {shift: -1}, {mothership: 1}, {}, {shift: -1}],
    [{mothership: 1}, {fighter: 5}, {shift: 1}, {}, {}],
    [{shift: 1}, {}, {}, {mothership: 1}, {}],
    [{fighter: 6}, {}, {}, {shift: -1}, {}]
]

export const tile4 = easy => easy ? [
    [{fighter: 5}, {}, {shift: -1}, {fighter: 4}, {mothership: 1}],
    [{}, {fighter: 3}, {fighter: 5}, {shift: 1}, {}],
    [{}, {}, {}, {mothership: 1}, {}]
] : [
    [{}, {fighter: 5}, {mothership: 1}, {mothership: 1}, {}],
    [{mothership: 1}, {}, {shift: -1}, {fighter: 5}, {mothership: 1}],
    [{fighter: 7}, {mothership: 1}, {fighter: 5}, {mothership: 1}, {fighter: 6}],
]
