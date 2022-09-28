// info_utilisateur.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-utilisateur')
        .setDescription('Affiche des information Utilisateur'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const AvatarUrl = interaction.user.avatarURL()
        const UserId = interaction.user.id
        const UserName = interaction.user.tag
        const UserDateCreate = interaction.user.createdAt.toLocaleDateString()
        const UserTimeCreate = interaction.user.createdAt.toLocaleTimeString()
        const UserBanner = interaction.user.banner

        const embedinfouser = new EmbedBuilder()
        .setTitle('Information Utilisateur')
        .setColor('#ff0000')
        .setDescription(
            '' 
            )
        .setURL('')
        .setAuthor({
           name: '',
           iconURL: '',
           url: ''
        })
        .addField(
            "Nom:",`${UserName}`,false
        )
        .addField(
            "ID:",`${UserId}`,false
        )
        .addField(
            "Date de création:",`${UserDateCreate}|${UserTimeCreate}`,false
        )
        .addField(
            "Bannière",`${UserBanner}`,false
        )
        .setFooter({
           text: 'Monsieur Propre !!!',
           iconURL: 'https://zupimages.net/up/22/03/ws50.jpg'
       })
        .setThumbnail(
             `${AvatarUrl}` 
        )
        .setTimestamp()
        await interaction.reply({ embeds: [embedinfouser], ephemeral: true });
    }
}
// ces /n pour allez a la ligne