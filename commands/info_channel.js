// info_utilisateur.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-channel')
        .setDescription('Affiche des information sur un channel')
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('Recherche un channel')
                .setRequired(true)
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
        //Channel//
        const ChannelSelect = interaction.options.get('channel')
        const ChannelID = ChannelSelect.channel.id
        const ChannelName = ChannelSelect.channel.name
        const ChannelBitRate = ChannelSelect.channel.bitrate
        const ChannelCreateAt = ChannelSelect.channel.createdAt.toLocaleString()

        //Utilisateur//
        const DefaultAvatar = interaction.user.defaultAvatarURL
        const UserName = interaction.user.tag

        //=============================================================================================================//

        //=================================//
        //Vérification d'un avatar Serveur//
        //===============================//
        const GuildAvatarCalcul = interaction.guild.iconURL()
        var GuildAvatar

        if ( GuildAvatarCalcul == null )
            GuildAvatar = DefaultAvatar
        else
            if ( GuildAvatarCalcul == '' )
                GuildAvatar = DefaultAvatar
            else
                if ( GuildAvatarCalcul == undefined )
                    GuildAvatar = DefaultAvatar
                else
                    GuildAvatar = GuildAvatarCalcul

        //=====================================//
        //Vérification d'un avatar utilisateur//
        //===================================//
        const UserAvatarUrlCalcul = interaction.user.avatarURL()
        var UserAvatarUrl = 'Non définis'

        if ( UserAvatarUrlCalcul == null )
            UserAvatarUrl = DefaultAvatar
        else
            if ( UserAvatarUrlCalcul == '' )
                UserAvatarUrl = DefaultAvatar
            else
                if ( UserAvatarUrlCalcul == undefined )
                    UserAvatarUrl = DefaultAvatar
                else
                    UserAvatarUrl = UserAvatarUrlCalcul

        //=============================================================================================================//

        //================//
        //Type de channel//
        //==============//
        const ChannelTypeCalcul = ChannelSelect.channel.type
        var ChannelType
        
        if ( ChannelTypeCalcul == null )
            ChannelType = 'Non définis'
        else
            if ( ChannelTypeCalcul === 0 )
                ChannelType = `Textuel`
            else
                if ( ChannelTypeCalcul === 2 )
                    ChannelType = `Vocal`
                else
                    if ( ChannelTypeCalcul === 4 )
                        ChannelType = `Catégorie`
                    else
                        if ( ChannelTypeCalcul === 5 )
                            ChannelType = `Annonce`
                        else
                            if ( ChannelTypeCalcul === 13 )
                                ChannelType = `Convention`
                            else
                                if ( ChannelTypeCalcul === 15 )
                                    ChannelType = `Forum`

        //=============//
        //Channel NSFW//
        //===========//
        const ChannelNSFWCalcul = ChannelSelect.channel.nsfw
        var ChannelNSFW

        if ( ChannelNSFWCalcul == true )
            ChannelNSFW = `ON`
        else
            if ( ChannelNSFWCalcul == false )
                ChannelNSFW = `OFF`

        //==========================================//
        //Utilisateur maximum dans un channel vocal//
        //========================================//
        const ChannelUserLimitCalcul = ChannelSelect.channel.userLimit
        var ChannelUserLimit

        if ( ChannelUserLimitCalcul == null )
            ChannelUserLimit = 'Non définis'
        else
            if ( ChannelUserLimitCalcul == 0 )
                ChannelUserLimit = '♾️'
            else
                ChannelUserLimit = ChannelUserLimitCalcul
        
        //=============================================================================================================//

        //============================//
        //=====|Channel Textuel|=====//
        //==========================//
        if ( ChannelType === 'Textuel' ) {
            const EmbedInfoChannelTextuel = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'Channel NSFW:', value: `${ChannelNSFW}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelTextuel], ephemeral: false })
        }

        //==========================//
        //=====|Channel Vocal|=====//
        //========================//
        if ( ChannelType === 'Vocal' ) {
            const EmbedInfoChannelVocal = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'BitRate:', value: `${ChannelBitRate}`, inline: true },
                { name: 'Place Maximum:', value: `${ChannelUserLimit}`, inline: true },
                { name: 'Channel NSFW:', value: `${ChannelNSFW}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelVocal], ephemeral: false })
        }

        //======================//
        //=====|Catégorie|=====//
        //====================//
        if ( ChannelType === 'Catégorie' ) {
            const EmbedInfoChannelCatégorie = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'Channel NSFW:', value: `${ChannelNSFW}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelCatégorie], ephemeral: false })
        }

        //============================//
        //=====|Channel Annonce|=====//
        //==========================//
        if ( ChannelType === 'Annonce' ) {
            const EmbedInfoChannelAnnonce = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'Channel NSFW:', value: `${ChannelNSFW}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelAnnonce], ephemeral: false })
        }

        //===============================//
        //=====|Channel Convention|=====//
        //=============================//
        if ( ChannelType === 'Convention' ) {
            const EmbedInfoChannelConvention = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'BitRate:', value: `${ChannelBitRate}`, inline: true },
                { name: 'Place Maximum:', value: `${ChannelUserLimit}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelConvention], ephemeral: false })
        }

        //==================//
        //=====|Forum|=====//
        //================//
        if ( ChannelType === 'Forum' ) {
            const EmbedInfoChannelForum = new EmbedBuilder()
            //Titre
            .setTitle(
                `Info Channel`
                )
            .addFields(
                { name: 'Nom:', value: `${ChannelName}`, inline: false },
                { name: 'ID:', value: `${ChannelID}`, inline: false },
                { name: 'Type de channel:', value: `${ChannelType}`, inline: true },
                { name: 'Channel NSFW:', value: `${ChannelNSFW}`, inline: true },
                { name: 'Date de création:', value: `${ChannelCreateAt}`, inline: false },
            )
            .setColor(
                "DarkPurple"
            )
            .setFooter({
                text: `Demandé(e) par ${UserName}`,
                iconURL: UserAvatarUrl
            })
            //Image en haut a droite
            .setThumbnail(
                GuildAvatar
            )
            //Heure et date d'envoi de l'embed
            .setTimestamp()

            return interaction.reply({ embeds: [EmbedInfoChannelForum], ephemeral: false })
        }

        //========================================//
        //=====//Embed Channel Non définis//=====//
        //======================================//
        const EmbedNonDéfinis = new EmbedBuilder()
        .setTitle('Erreur !!')
        .setDescription(
            "**Une erreur est survenue lors de l'éxécution de la commande**\n**1]:**`Le channel est non définis`\n**2]:**`Le channel n'existe plus`"
        )
        .setColor('#ff0000')
        .setFooter({
           text: `Demandé(e) par ${UserName}`,
           iconURL: `${UserAvatarUrl}`
       })
        .setThumbnail(
             `${GuildAvatar}` 
        )
        .setTimestamp()

        //=============================================================================================================//

        //=====================================//
        //Envois de la réponse en cas d'erreur//
        //===================================//
        await interaction.reply({ embeds: [EmbedNonDéfinis], ephemeral: false });
    }
}
// ces /n pour allez a la ligne