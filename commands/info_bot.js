// info_bot.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-bot')
        .setDescription('Affiche des information sur le Bot'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const BotId = interaction.client.user.id
        const BotName = interaction.client.user.tag
        //const GuildCounter = interaction.client.guilds.cache.size
        const BotDateCreate = interaction.client.user.createdAt.toLocaleDateString()
        const BotTimeCreate = interaction.client.user.createdAt.toLocaleTimeString()
        const BotAvatarUrl = interaction.client.user.avatarURL()
        const FooterURL = 'https://zupimages.net/up/22/03/ws50.jpg'

     const embedinfobot = new EmbedBuilder()
        .setTitle('Information Bot')
        .setColor('#ff0000')
        .setURL(`${BotAvatarUrl}`)
        .addFields(
            { name: 'Nom du Bot:', value: `${BotName}` },
            { name: 'ID:', value: `${BotId}` },
            { name: 'Date de création:', value: `${BotDateCreate}|${BotTimeCreate}` }
        )
        //.addField(
        //    "Nom du Bot:",`${BotName}`,false
        //)
        //.addField(
        //    "ID:",`${BotId}`,false
        //)
        //.addField(
        //    "Date de création:",`${BotDateCreate}|${BotTimeCreate}`,false
        //)
        ////.addField(
        ////    "Serveur rejoint:",`${GuildCounter}`,false
        ////)
        .setFooter({
           text: 'Monsieur Propre !!!',
           iconURL: `${FooterURL}`
       })
        .setThumbnail(
             `${BotAvatarUrl}` 
        )
        .setTimestamp()

        await interaction.reply({ embeds: [embedinfobot] });
    }
}
// ces /n pour allez a la ligne