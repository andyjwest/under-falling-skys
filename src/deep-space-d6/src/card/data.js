import crewType from "../Cards/crewType";
import conditions from "../atoms/conditions";

const dealDamage = (hullContext, damage = 0, shield = 0, ignoreShields = false) => {
    if (damage > 0 || shield > 0) {
        if (ignoreShields) {
            hullContext.damageHull(damage)
        } else {
            hullContext.damageShield(damage + shield)
            const totalDamage = damage + shield - hullContext.shield
            hullContext.damageHull(totalDamage > 0 ? totalDamage : 0)
        }
    }
}

const sendCrew = (crewContext, condition)=> {
    crewContext.setCrew(crewContext.crew.map(it => {
        if(it.condition !== (conditions.wounded || conditions.scanning || conditions.confused)){
            return crewContext.constructor(it.type, condition)
        }
        return it
    }))
}

export default [
    {
        name: 'Flagship',
        type: 'External',
        activation: {
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 3, 0)
            },
            damage: 3,
            on: [4, 5, 6],
            description: '3 Damage'
        },
        health: 4,
    }, {
        name: 'Solar Winds',
        type: 'External',
        activation: {
            damage: 5,
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 5, 0)
                // TODO discard self
            },
            on: [2],
            description: '5 Damage then discard',
        }
    }, {
        name: 'Interceptor',
        type: 'External',
        activation: {
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1, 0)
            },
            damage: 1,
            on: [1, 2, 3, 4, 5],
            description: '1 Damage',
        },
        health: 3
    }, {
        //TODO
        name: 'Scouting Ship',
        type: 'External',
        activation: {
            callback: (hullContext, crewContext) => {

            },
        },
        health: 3,
        effect: 'If you lost Hull this round, lose 1 addition Hull',
    }, {
        name: 'Raiders',
        type: 'External',
        activation: {
            hull: 2,
            on: [4, 5],
            description: '2 Damage Ignores Shield',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1, 0, true)
            },
        },
        health: 2,
    }, {
        name: 'Boarding Ship',
        type: 'External',
        activation: {
            damage: 2,
            on: [3, 4],
            description: '2 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
            },
        },
        health: 4,
        awayMission: [
            {
                crew: [crewType.tactical],
                effect: 'Send to Infirmary'
            }
        ]
    }, {
        name: 'Space Pirates',
        type: 'External',
        activation: {
            damage: 2,
            on: [1, 3],
            description: '2 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 3,
    }, {
        name: 'Raiders',
        type: 'External',
        activation: {
            hull: 2,
            on: [4, 6],
            description: '2 Damage Ignores Shield',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2, 0, true)
            },
        },
        health: 2,
    }, {
        name: 'Raiders',
        type: 'External',
        activation: {
            hull: 2,
            on: [1, 4],
            description: '2 Damage Ignores Shield',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2, 0, true)
            },
        },
        health: 3,
    }, {
        name: 'Meteoroid',
        type: 'External',
        activation: {
            on: [1],
            description: '-1 Health',
            callback: (hullContext, crewContext, threatContext) => {
                //TODO remove health
            },
        },
        health: 4,
        destroyed: {
            damage: 5,
            description: '5 Damage when destroyed',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 5)
            },
        }
    }, {
        name: 'Drone',
        type: 'External',
        activation: {
            damage: 1,
            on: [2, 4, 6],
            description: '1 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
            },
        },
        health: 1,
    }, {
        name: 'Bounty Ship',
        type: 'External',
        activation: {
            damage: 1,
            shield: 4,
            on: [1, 2],
            description: 'Destroy all shields, 1 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1, 4)
            },
        },
        health: 4,
    }, {
        name: 'Bomber',
        type: 'External',
        activation: {
            damage: 1,
            on: [3, 4],
            infirmary: 1,
            description: '-1 Hull Send Unit to the Infirmary',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
                sendCrew(crewContext, conditions.wounded)
            },
        },
        health: 3,
    }, {
        name: 'Space Pirates',
        type: 'External',
        activation: {
            damage: 2,
            on: [3, 6],
            description: "2 Damage",
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 2,
    }, {
        name: 'Interceptor X',
        type: 'External',
        activation: {
            damage: 1,
            on: [1, 2, 3, 4, 5],
            description: '1 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
            },
        },
        health: 4,
    }, {
        name: 'Space Pirates',
        type: 'External',
        activation: {
            damage: 2,
            on: [3, 6],
            description: '2 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 2,
    }, {
        name: 'Drone',
        type: 'External',
        activation: {
            damage: 1,
            on: [3, 5],
            description: '1 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
            },
        },
        health: 1,
    }, {
        name: 'Hijackers',
        type: 'External',
        activation: {
            damage: 2,
            on: [4, 5],
            description: '2 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 4,
        awayMission: ['Commander', 'Commander']
    }, {
        name: 'Corsair',
        type: 'External',
        activation: {
            damage: 2,
            on: [4, 5, 6],
            description: '2 Damage',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 2,
    }, {
        name: 'Friendly Fire',
        type: 'Internal',
        drawn: {
            callback: (hullContext, crewContext) => {
                crewContext.setCrew(crewContext.crew.map(it => {
                    if (it.type === crewType.tactical) {
                        return crewContext.crewConstructor(crewType.tactical, conditions.wounded)
                    }
                    return it
                }))
                // TODO discard
            },
            description: 'All Tactical go directly to infirmary. Then discard.',
            discard: true
        }
    }, {
        name: 'Cosmic Existentialism',
        type: 'Internal',
        locks: crewType.science,
        effect: 'Must be completed before assigning any other Science crew.',
        awayMission: [crewType.science]
    }, {
        name: 'Nebula',
        type: 'External',
        activation: {
            health: -1,
            on: [1, 2, 4, 5, 6],
            description: '-1 Health',
            callback: (hullContext, crewContext) => {
                //TODO reduce health
            },
        },
        health: 3,
        drawn: {
            description: 'Shield Offline',
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 0, 4)
            },
        },
        destroyed: 'Shield Online'
    }, {
        name: 'Mercenary',
        type: 'External',
        activation: {
            damage: 2,
            on: [1, 2, 4, 5, 6],
            description: 'If no threats have been activated this round, 2 Damage',
            callback: (hullContext, crewContext) => {
                //TODO
            },
        },
        health: 3,
        effect: 'If no threats have been activated this round, -2 Shield',
    }, {
        name: 'Cloaked Threat',
        activation: {
            on: [2],
            description: 'Roll Damage Die again',
            callback: (hullContext, crewContext) => {
                //TODO
            },
        },
        type: 'Internal',
        awayMission: [crewType.science]
    }, {
        name: 'Assault Cruiser',
        type: 'External',
        activation: {
            damage: 2,
            on: [4, 5],
            description: "2 Damage",
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 2)
            },
        },
        health: 4,
    }, {
        name: 'Distracted',
        activation: {
            on: [3, 4],
            description: 'Return this crew',
            callback: (hullContext, crewContext) => {
                //TODO
            },
        },
        type: 'Internal',
        drawn: {
            description: 'Place 1 crew here',
            callback: (hullContext, crewContext) => {
                sendCrew(crewContext, conditions.confused)
            },
        },
        discardAfter: 'activation',
        awayMission: [crewType.medical, crewType.medical]
    }, {
        name: 'Time Warp',
        activation: {
            on: [2],
            description: 'All threats recover 1 damage',
            callback: (hullContext, crewContext, threatContext) => {
                //todo
            }
        },
        type: 'Internal',
        awayMission: [crewType.science, crewType.science]
    }, {
        name: 'Bomber',
        type: 'External',
        activation: {
            damage: 2,
            on: [2, 4],
            description: '2 Damage. Send a unit to the infirmary',
            infirmary: 1,
            callback: (hullContext, crewContext)=>{
                dealDamage(hullContext, 2)
                sendCrew(crewContext, conditions.wounded)
            },
        },
        health: 2,
    }, {
        name: 'Assault Cruiser',
        type: 'External',
        activation: {
            damage: 2,
            on: [4, 5],
            callback: (hullContext, crewContext)=>{
                dealDamage(hullContext, 2)
            },
        },
        health: 4,
    }, {
        name: 'Bomber',
        type: 'External',
        activation: {
            damage: 2,
            on: [2, 4],
            description: '2 Damage. Send a unit to the infirmary',
            infirmary: 1,
            callback: (hullContext, crewContext)=>{
                dealDamage(hullContext, 2)
                sendCrew(crewContext, conditions.wounded)
            },
        },
        health: 2,
    }, {
        name: 'Boost Morale',
        activation: {
            on: [6],
            effect: 'Return a Threat Detected',
            callback: (hullContext, crewContext)=>{
                crewContext.setCrew(crewContext.crew.map(it => {
                    if(it.condition === conditions.scanning) {
                        return crewContext.constructor(crewType.threat, undefined)
                    }
                    return it
                }))
            },
            discard: true
        },
        type: 'Internal',
    }, {
        name: 'Panel Explosion',
        type: 'Internal',
        drawn: {
            callback: (hullContext, crewContext)=>{
                //TODO
            },
            description: 'You many not assign Engineering',
            locks: crewType.engineering,
        },
        awayMission: [crewType.medical]
    }, {
        name: 'Pandemic',
        type: 'Internal',
        activation: {
            callback: (hullContext, crewContext)=>{
                sendCrew(crewContext, conditions.wounded)
            },
            description: 'Send a unit to the Infirmary (Away Mission is an OR)',
        },
        awayMission: [crewType.medical, crewType.science]
    }, {
        name: 'Invaders',
        type: 'Internal',
        activation: {
            on: [2, 4],
            description: "Send unit ot infirmary",
            infirmary: 1,
            callback: (hullContext, crewContext) => {
                sendCrew(crewContext, conditions.wounded)
            }
        },
        awayMission: [crewType.tactical, crewType.tactical]
    }, {
        name: 'Bomber',
        type: 'External',
        activation: {
            damage: 1,
            on: [2, 4],
            description: '1 Damage. Send a unit to the infirmary',
            infirmary: 1,
            callback: (hullContext, crewContext) => {
                dealDamage(hullContext, 1)
                sendCrew(crewContext, conditions.wounded)
            }
        },
        health: 2,
    }, {
        name: 'Comms Offline',
        type: 'Internal',
        locks: crewType.commander,
        effect: 'You many not assign Commanders',
        awayMission: [crewType.engineering]
    }, {
        name: 'Robot Uprising',
        type: 'Internal',
        activation: {
            on: [1, 2, 3],
            description: "Send unit ot infirmary",
            infirmary: 1,
            callback: (hullContext, crewContext) => {
                sendCrew(crewContext, conditions.wounded)
            }
        },
        awayMission: [crewType.engineering]
    },
]
