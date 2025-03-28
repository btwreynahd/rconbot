const config = {}

require('dotenv').config()

config.rcon = {
    server: "fivem.btwreynahd",
    port: 30120,
    passwort: process.env.PASSWORT
}

config.bot = {
    token: process.env.TOKEN,
    color: "#ff0000",
    activitys: [
        {
            name: 'through the matix',
            type: 'Watching',
            status: 'online'
        },
        {
            name: 'with your feelings',
            type: 'Playing',
            status: 'dnd'
        },
    ],
    intervall: 10 * 1000 // 10 Sekunden
}

config.logs = {
    enabled: true,
    channel: "1150796337026170950"
}

config.commands = [
    {
        name: "status",
        description: "Get the server status",
        options: [],
        execute: "status",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "revive",
        description: "Revive a player",
        options: [
            {
                name: "player_id",
                description: "The player to revive",
            }
        ],
        execute: "revive {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "kill",
        description: "Kill a player",
        options: [
            {
                name: "player_id",
                description: "The player to kill",
            }
        ],
        execute: "kill {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "freeze",
        description: "Freeze a player",
        options: [
            {
                name: "player_id",
                description: "The player to freeze",
            }
        ],
        execute: "freeze {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "unfreeze",
        description: "Unfreeze a player",
        options: [
            {
                name: "player_id",
                description: "The player to unfreeze",
            }
        ],
        execute: "unfreeze {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "kick",
        description: "Kick a player",
        options: [
            {
                name: "player_id",
                description: "The player to kick",
            },
            {
                name: "reason",
                description: "The reason for the kick",
                required: false
            }
        ],
        execute: "kickplayer {player_id} {reason}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "setgroup",
        description: "Set the group of a player",
        options: [
            {
                name: "player_id",
                description: "The player to set the group",
            },
            {
                name: "group",
                description: "The group to set",
            }
        ],
        execute: "setgroup {player_id} {group}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "setjob",
        description: "Set the job of a player",
        options: [
            {
                name: "player_id",
                description: "The player to set the job",
            },
            {
                name: "job",
                description: "The job to set",
            },
            {
                name: "grade",
                description: "The grade to set",
            }
        ],
        execute: "setjob {player_id} {job} {grade}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "clearinventory",
        description: "Clear the inventory of a player",
        options: [
            {
                name: "player_id",
                description: "The player to clear the inventory",
            }
        ],
        execute: "clearinventory {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "clearloadout",
        description: "Clear the loadout of a player",
        options: [
            {
                name: "player_id",
                description: "The player to clear the loadout",
            }
        ],
        execute: "clearloadout {player_id}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "giveitem",
        description: "Give an item to a player",
        options: [
            {
                name: "player_id",
                description: "The player to give the item",
            },
            {
                name: "item",
                description: "The item to give",
            },
            {
                name: "count",
                description: "The count of the item to give",
            }
        ],
        execute: "giveitem {player_id} {item} {count}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "giveweapon",
        description: "Give a weapon to a player",
        options: [
            {
                name: "player_id",
                description: "The player to give the weapon",
            },
            {
                name: "weapon",
                description: "The weapon to give",
            },
            {
                name: "ammo",
                description: "The ammo of the weapon to give",
            }
        ],
        execute: "giveweapon {player_id} {weapon} {ammo}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "setmoney",
        description: "Set the money of an account",
        options: [
            {
                name: "player_id",
                description: "The player to set the money",
            },
            {
                name: "account",
                description: "The account to set the money",
                choices: [
                    {
                        name: "Cash",
                        value: "money"
                    },
                    {
                        name: "Bank",
                        value: "bank"
                    },
                    {
                        name: "Dirty Money",
                        value: "black_money"
                    }
                ]
            },
            {
                name: "amount",
                description: "The ammount to set",
            }
        ],
        execute: "setaccountmoney {player_id} {account} {amount}",
        perms: ["1150853066808103014", "1131279456892362792"]
    },
    {
        name: "custom",
        description: "Set the money of an account",
        options: [
            {
                name: "cmd",
                description: "enter your own command",
            },
        ],
        execute: "{cmd}",
        perms: ["1150853066808103014", "1131279456892362792"]
    }
]

module.exports = config
