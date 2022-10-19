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
                .setRequired(false)
        )
        ,
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        //=============================================================================================================//

        //===============================//
        //=====//Constant Général//=====//
        //=============================//
        
        if ( interaction.options.getUser('user') == null )
            UserSelect = interaction.user
        else
            if ( interaction.options.getUser('user') == undefined )
                UserSelect = interaction.user
            else
                if ( interaction.options.getUser('user') == '' )
                    UserSelect = interaction.user
                else
                    UserSelect = interaction.options.getUser('user')

        //const UserSelect = interaction.options.getUser('user')
        const DefaultAvatar = interaction.user.defaultAvatarURL

        //=============================================================================================================//

        //=================================================//
        //=====//User ou Utilisateur de la commande//=====//
        //===============================================//
        const UserAvatarUrlCalcul = interaction.user.avatarURL()
        //const UserId = interaction.user.id
        const UserName = interaction.user.tag
        //const UserDateCreate = interaction.user.createdAt.toLocaleDateString()
        //const UserTimeCreate = interaction.user.createdAt.toLocaleTimeString()
        //const UserBannerCalcul = interaction.user.bannerURL()
        //const FooterURL = 'https://zupimages.net/up/22/03/ws50.jpg'

        //===================================//
        //Vérification qu'il y est un avatar//
        //=================================//
        var UserAvatarUrl = ''
        if ( UserAvatarUrlCalcul == null )
            UserAvatarUrl = `${DefaultAvatar}`
        else
            if ( UserAvatarUrlCalcul == 'undefined' )
                UserAvatarUrl = `${DefaultAvatar}`
            else
                if ( UserAvatarUrlCalcul == '' )
                    UserAvatarUrl = `${DefaultAvatar}`
                else
                    UserAvatarUrl = `${UserAvatarUrlCalcul}`

        //=============================================================================================================//
        
        //=========================//
        //=====//UserSelect//=====//
        //=======================//

        //=========//
        //Constant//
        //=======//
        const UserSelectUserName = UserSelect.tag
        const UserSelectID = UserSelect.id
        const UserSelectDateCreate = UserSelect.createdAt.toLocaleDateString()
        const UserSelectTimeCreate = UserSelect.createdAt.toLocaleTimeString()
        const UserSelectAvatarUrlCalcul = UserSelect.avatarURL()
        //const UserSelectBannerCalcul = UserSelect.bannerURL()

        //===================================//
        //Vérification qu'il y est un avatar//
        //=================================//
        var UserSelectAvatarUrl = ''
        if ( UserSelectAvatarUrlCalcul == null )
            UserSelectAvatarUrl = `${DefaultAvatar}`
        else
            if ( UserSelectAvatarUrlCalcul == 'undefined' )
                UserSelectAvatarUrl = `${DefaultAvatar}`
            else
                if ( UserSelectAvatarUrlCalcul == '' )
                    UserSelectAvatarUrl = `${DefaultAvatar}`
                else
                    UserSelectAvatarUrl = `${UserSelectAvatarUrlCalcul}`

        //====================//
        //Bannière UserSelect//
        //==================//
        var UserSelectBannerCalcul = ''
        if ( UserSelect == 'undefined' )
            UserSelectBannerCalcul = null
        else
            UserSelectBannerCalcul = UserSelect.bannerURL()
        
        var UserSelectBanner = ''
        if ( UserSelectBannerCalcul == null )
            UserSelectBanner = 'Non définis'
        else
            if ( UserSelectBannerCalcul == 'undefined' )
                UserSelectBanner = 'Non définis'
            else
                if ( UserSelectBannerCalcul == '' )
                    UserSelectBanner = 'Non définis'
                else
                    UserSelectBanner = `${UserSelectBannerCalcul}`

        //=============================================================================================================//
        
        //==============================//
        //=====//Embed Info User//=====//
        //============================//
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
        .setFooter({
           text: `Demandé(e) par ${UserName}`,
           iconURL: `${UserAvatarUrl}`
       })
        .setThumbnail(
             `${UserSelectAvatarUrl}` 
        )
        .setTimestamp()

        //=============================================================================================================//

        //=====================//
        //Envois de la réponse//
        //===================//
        await interaction.reply({ embeds: [embedinfouser], ephemeral: false });
    }
}
// ces /n pour allez a la ligne