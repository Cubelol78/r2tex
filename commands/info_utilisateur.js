// info_utilisateur.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-utilisateur')
        .setDescription('Affiche des information Utilisateur')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Recherche un utilisateur')
                .setRequired(true)
        )
        ,
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const UserSelect = interaction.options.getUser('user')
        const UserSelectUserName = UserSelect.tag
        const UserSelectID = UserSelect.id
        const UserSelectAvatarUrl = UserSelect.avatarURL()
        const UserSelectDateCreate = UserSelect.createdAt.toLocaleDateString()
        const UserSelectTimeCreate = UserSelect.createdAt.toLocaleTimeString()

        const AvatarUrl = interaction.user.avatarURL()
        //const UserId = interaction.user.id
        const UserName = interaction.user.tag
        //const UserDateCreate = interaction.user.createdAt.toLocaleDateString()
        //const UserTimeCreate = interaction.user.createdAt.toLocaleTimeString()
        //const UserBanner = interaction.user.bannerURL()
        //const FooterURL = 'https://zupimages.net/up/22/03/ws50.jpg'

        //=======================//
        //Bannière d'Utilisateur//
        //=====================//
        const UserSelectBannerCalcul = UserSelect.banner
        var UserSelectBanner = ''
        if ( UserSelectBannerCalcul == null )
            UserSelectBanner = 'Non définis'
        else
            if ( UserSelectBannerCalcul == 'undefined' )
                UserSelectBanner = 'Non définis'
            else
                UserSelectBanner = `${UserSelectBannerCalcul}`
        
        //================//
        //Embed info user//
        //==============//
        const embedinfouser = new EmbedBuilder()
        .setTitle('Information Utilisateur')
        .setColor('#ff0000')
        .setURL(`${UserSelectAvatarUrl}`)
        .addFields(
            { name: 'Nom:', value: `${UserSelectUserName}` },
            { name: 'ID:', value: `${UserSelectID}` },
            { name: 'Date de création:', value: `${UserSelectDateCreate}, ${UserSelectTimeCreate}` },
            { name: 'Bannière', value: `${UserSelectBanner}` },
        )
        //.addField(
        //    "Nom:",`${UserName}`,false
        //)
        //.addField(
        //    "ID:",`${UserId}`,false
        //)
        //.addField(
        //    "Date de création:",`${UserDateCreate}|${UserTimeCreate}`,false
        //)
        //.addField(
        //    "Bannière",`${UserBanner}`,false
        //)
        .setFooter({
           text: `Demandé(e) par ${UserName}`,
           iconURL: `${AvatarUrl}`
       })
        .setThumbnail(
             `${UserSelectAvatarUrl}` 
        )
        .setTimestamp()
        await interaction.reply({ embeds: [embedinfouser], ephemeral: false });
    }
}
// ces /n pour allez a la ligne