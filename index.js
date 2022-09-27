//index.js :

//===========//
//Connection//
//=========//

const fs = require('fs');
const { Discord, Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

const handleCommand = require('./helpers/command');
const handleSelectMenu = require('./helpers/select-menu');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require("dotenv").config();

//=========//
//Commande//
//=======//

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

//===========================//
//Confirmation de connection//
//=========================//

client.once('ready', () => {
    console.log('Je suis prêt !');
});

//=========================//
//Interaction des commande//
//=======================//

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction);
    if (interaction.isSelectMenu()) handleSelectMenu(interaction);
});


//=====================//
//Doit rester a la fin//
//===================//

client.login(process.env.BOT_TOKEN);