
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
require("dotenv").config();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

//const rest = new REST({ version: '9' }).setToken(token);
const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
        console.log('╔══════════════╦╕')
        console.log('║Bot R2tex beta║>>Les commandes ont étés enregistrées !')
        console.log('╚══════════════╩╛')
    } catch (error) {
        console.error(error);
    }
})();