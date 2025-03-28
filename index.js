const rcon = require('quake3-rcon')
const config = require('./config.js')
const client = rcon({
    address: config.rcon.server,
    port: config.rcon.port,
    password: config.rcon.passwort,
    debug: true,
})

const Discord = require('discord.js')
const bot = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
})

bot.on('ready', () => {
    let commandlist = []
    config.commands.forEach(command => {
        commandlist.push(command.name)
        command.options.forEach(option => {
            if (option.type == 'string') option.type = 3
            if (option.required == undefined) option.required = true
            option.type = 3
        })
        bot.guilds.cache.forEach(guild => {
            guild.commands.create(command)
        })
    })
    // go through all guilds and delete commands that are not in config.commands
    bot.guilds.cache.forEach(guild => {
        guild.commands.fetch().then(commands => {
            commands.forEach(command => {
                if (!commandlist.includes(command.name)) command.delete()
            })
        })
    })
})

bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return
    
    const command = config.commands.find(command => command.name == interaction.commandName)
    if (!command) return
    const args = {}
    const member = await interaction.guild.members.fetch(interaction.user.id)
    if (!member.roles.cache.some(role => command.perms.includes(role.id))) return interaction.reply({content: "You don't have permission to use this command", ephemeral: true})
    command.options.forEach(option => {
        args[option.name] = interaction.options.get(option.name).value
    })
    try {
        client.send(command.execute.replace(/{([^}]+)}/g, (match, name) => {
            return args[name]
        }), (response) => {
            console.log(response)
            interaction.reply({content: response, ephemeral: true})
        })
    } catch (error) {
        console.log(error)
    }
    if (config.logs.enabled) {
        const channel = await bot.channels.fetch(config.logs.channel)
        const embed = new Discord.EmbedBuilder()
            .setColor(config.bot.color)
            .setTitle('Command executed')
            .setFields([
                {
                    name: "Command",
                    value: command.name,
                    inline: true
                },
                {
                    name: "User",
                    value: interaction.user.toString(),
                    inline: true
                },
                {
                    name: "Arguments",
                    value: "```json\n" + JSON.stringify(args) + "```",
                    inline: false
                }
            ])
            .setTimestamp()
        channel.send({embeds: [embed]})
    }
})

let i = 0
let j = config.bot.activitys.length - 1

setInterval(() => {
    const activity = config.bot.activitys[i]
    bot.user.setPresence({
        activities: [{
            name: activity.name,
            type: Discord.ActivityType[activity.type]
        }],
        status: activity.status
    });
    i++
    if (i > j) i = 0
}, config.bot.intervall);

bot.login(config.bot.token)