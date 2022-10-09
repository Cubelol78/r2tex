// info_serveur.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder, User, GuildEmoji, Role, Widget } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-serveur')
        .setDescription('Affiche des information Serveur'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const IDowner = interaction.guild.ownerId
        const RoleCount = interaction.guild.roles.cache.size
        const HeureCreate = interaction.guild.createdAt.toLocaleTimeString()
        const DateCreate = interaction.guild.createdAt.toLocaleDateString()
        const GuildName = interaction.guild.name
        const GuildId = interaction.guild.id
        const CounterMemberGuild = interaction.guild.memberCount
        //const BotGuild = interaction.guild.members.cache.filter(member => member.user.bot).size
        //const ClientBotGuild = interaction.client.user.bot
        //const MemberGuild = interaction.guild.members.cache.filter(member => !member.user.bot).size
        const CounterChannelGuild = interaction.guild.channels.cache.size
        //const test = CounterMemberGuild.filter(member => member.user.bot).size
        //const test1 = ClientBotGuild + BotGuild
        //const GuildMember = CounterMemberGuild - test1
        const FooterURL = 'https://zupimages.net/up/22/03/ws50.jpg'
        const BotJoinGuild = interaction.guild.joinedAt.toLocaleString()
        const BotID = interaction.user.id
        const GuildEmojisCounter = interaction.guild.emojis.cache.size
        const GuildRoleList = interaction.guild.roles.cache.map(role => role.toString())
        const GuildUserName = interaction.user.tag
        const DefaultAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png'

        //==========================//
        //Vérification avatar Guild//
        //========================//
        var ServeurIconURLCalcul = interaction.guild.iconURL()
        var ServeurIconURL = ''
        if ( ServeurIconURLCalcul == null )
            ServeurIconURL = `${DefaultAvatar}`
        else
            if ( ServeurIconURLCalcul == 'undefined' )
                ServeurIconURL = `${DefaultAvatar}`
            else
                ServeurIconURL = `${ServeurIconURLCalcul}`
        
        //=========================//
        //Vérification avatar user//
        //=======================//
        const GuildUserAvatarCalcul = interaction.user.avatarURL()
        var GuildUserAvatar = ''
        if ( GuildUserAvatarCalcul == null )
            GuildUserAvatar = `${DefaultAvatar}`
        else
            if ( GuildUserAvatarCalcul == 'undefined' )
                GuildUserAvatar = `${DefaultAvatar}`
            else
                GuildUserAvatar = `${GuildUserAvatarCalcul}`

        //==================//
        //Compteur de Boost//
        //================//
        const GuildBoostCounterCalcul = interaction.guild.premiumSubscriptionCount
        var GuildBoostCounter = ''
        if ( GuildBoostCounterCalcul == null )
            GuildBoostCounter = 'Non définis'
        else
            GuildBoostCounter = `${GuildBoostCounterCalcul}`

        //=====================================================//
        //Authentification a double facteur pour la modération//
        //===================================================//
        const GuildAdminA2FCalcul = interaction.guild.mfaLevel
        var GuildAdminA2F = ''
        if ( GuildAdminA2FCalcul == null )
            GuildAdminA2F = 'Non définis'
        
        if ( GuildAdminA2FCalcul == 0 )
            GuildAdminA2F = 'Désactiver'
            
        if ( GuildAdminA2FCalcul == 1 )
            GuildAdminA2F = 'Activer'

        //=================//
        //Liste des Emojis//
        //===============//
        const GuildEmojisListCalcul = interaction.guild.emojis.cache.map(emoji => emoji.toString())
        var GuildEmojisList = ''
        if ( GuildEmojisListCalcul == null )
            GuildEmojisList = 'Non définis'
        
        if ( GuildEmojisListCalcul == '' )
            GuildEmojisList = 'Non définis'
        else
            GuildEmojisList = `${GuildEmojisListCalcul}`
        
        //=============//
        //Vérification//
        //===========//
        const GuildVerificationCalcul = interaction.guild.verificationLevel
        var GuildVerification = ''
        if ( GuildVerificationCalcul == null )
            GuildVerification = 'Non définis'
        else
            if ( GuildVerificationCalcul == 0 )
                GuildVerification = 'Aucune'
            else
                if ( GuildVerificationCalcul == 1 )
                    GuildVerification = 'Faible-(Doit avoir une adresse email vérifier sur son compte)'
                else
                    if ( GuildVerificationCalcul == 2 )
                        GuildVerification = 'Moyen-(Doit avoir une adresse email vérifier sur son compte et être inscrit depuis plus de 5 minutes)'
                    else
                        if ( GuildVerificationCalcul == 3 )
                            GuildVerification = 'Elevé-(Doit avoir une adresse email vérifier sur son compte et avoir rejoint le serveur depuis plus de 10 minutes)'
                        else
                            if ( GuildVerificationCalcul == 4 )
                                GuildVerification = 'Maximum-(Doit avoir un numéro de téléphone relier à son compte discord)'

        //============//
        //Timeout AFK//
        //==========//
        const GuildAfkTimeoutCalcul = interaction.guild.afkTimeout
        var GuildAfkTimeout = ''
        if ( GuildAfkTimeoutCalcul == null )
            GuildAfkTimeout = 'Non définis'
        else
            GuildAfkTimeout = `${GuildAfkTimeoutCalcul} Secondes`

        //============//
        //Channel AFK//
        //==========//
        const GuildAfkChannelId = interaction.guild.afkChannelId
        var GuildAfkChannel = ''
        if ( GuildAfkChannelId == null )
            GuildAfkChannel = 'Non définis'
        else
            GuildAfkChannel = `<#${GuildAfkChannelId}>`

        //=========================//
        //Channel community update//
        //=======================//
        const GuildComUpdateId = interaction.guild.publicUpdatesChannelId
        var GuildComUpdate = ''
        if ( GuildComUpdateId == null )
            GuildComUpdate = 'Non définis'
        else
            GuildComUpdate = `<#${GuildComUpdateId}>`

        //==================//
        //Channel réglement//
        //================//
        const GuildRuleChannelId = interaction.guild.rulesChannelId
        var GuildRuleChannel = ''
        if ( GuildRuleChannelId == null )
            GuildRuleChannel = 'Non définis'
        else
            GuildRuleChannel = `<#${GuildRuleChannelId}>`

        //======================//
        //Desciption du serveur//
        //====================//
        const GuildDescriptionCalcul = interaction.guild.description
        var GuildDescription = ''
        if ( GuildDescriptionCalcul == null )
            GuildDescription = 'Aucune description définie'

        //=================================================//
        //Paramétrage de l'analyse des contenus du serveur//
        //===============================================//
        const GuildAnalyseCalcul = interaction.guild.explicitContentFilter
        var GuildAnalyse = ''
        if ( GuildAnalyseCalcul == 0 )
            GuildAnalyse = 'Aucun contenu à analyser'
        else
         if ( GuildAnalyseCalcul == 1 )
             GuildAnalyse = 'Analyse les contenus des membres sans rôle'
         else
          if ( GuildAnalyseCalcul == 2 )
              GuildAnalyse = 'Analyse tous les contenus du serveur'
          else
            if ( GuildAnalyseCalcul == null )
                GuildAnalyse = 'Non définis'

        //==================================//
        //Affichage de la Bannière de Guild//
        //================================//
        const GuildBannerUrlCalcul = interaction.guild.bannerURL()
        var GuildBannerUrl
        if ( GuildBannerUrlCalcul == null )
            GuildBannerUrl = 'Bannière de Guild non définis'
        else
            GuildBannerUrl = `${GuildBannerUrlCalcul}`

        //============================================//
        //Paramétrage des notification sur le serveur//
        //==========================================//
        const GuildNotificationCalcul = interaction.guild.defaultMessageNotifications
        var GuildNotification = ''

        if ( GuildNotificationCalcul == null )
            GuildNotification = 'Non définis'
        else
            if ( GuildNotificationCalcul == 0 )
                GuildNotification = 'Tous les messages'
            else
                GuildNotification = '@Mentions seulement'

        //===================//
        //Embed Info Serveur//
        //=================//
        const embedinfoserveur = new EmbedBuilder()
        .setTitle('Information Serveur')
        .setColor('#ff0000')
        .setDescription(
            `  **Nom:** ${GuildName}\n**Id:** ${GuildId}\n**Date de création:**\n${DateCreate}, ${HeureCreate}  ` 
            )
        .setURL(`${ServeurIconURL}`)
        .addFields(
            { name: 'Propriétaire du serveur:', value: `**Pseudo:**<@${IDowner}>`, inline: true },
            { name: 'Boost:', value: `${GuildBoostCounter}`, inline: true },
            { name: 'Description du serveur:', value: `${GuildDescription}`, inline: false },
            { name: 'Membre sur le serveur:', value: `${CounterMemberGuild}`, inline: true },
            { name: 'Nombre de channel:', value: `${CounterChannelGuild}`, inline: true },
            //{ name: 'Nombre de roles', value: `${RoleCount}`, inline: true },
            { name: 'AFK:', value: `**Channel:**${GuildAfkChannel}\n**Timeout:** ${GuildAfkTimeout}`, inline: false },
            { name: 'Réglement:', value: `${GuildRuleChannel}`, inline: true },
            { name: 'Community Updates:', value: `${GuildComUpdate}`, inline: true },
            { name: 'Bannière de Guild:', value: `${GuildBannerUrl}`, inline: false },
            { name: 'Paramétre des Notification:', value: `${GuildNotification}`, inline: true },
            { name: 'Filtre des contenus:', value: `${GuildAnalyse}`, inline: true },
            { name: `Vérification:`, value: `${GuildVerification}`, inline: false },
            { name: `Authentification a double facteur pour la modération:`, value: `${GuildAdminA2F}`, inline: false },
            { name: `Rôles [${RoleCount}]:`, value: `${GuildRoleList}`, inline: false },
            { name: `Emojis [${GuildEmojisCounter}]:`, value: `${GuildEmojisList}`, inline: false },
            { name: `[BOT]R2tex a rejoint le:`, value: `${BotJoinGuild}`, inline: false },
        )
        //.addField(
        //    'Membre sur le serveur', `${CounterMemberGuild}`, true
        //    )
        ////.addField(
        ////    'Nombre de Bot',`${BotGuild}`,false
        ////    )
        ////.addField(
        ////    "Nombre d'utilisateur connecter",`${MemberGuild}`,false
        ////    )
        //.addField(
        //    "Nombre de channel",`${CounterChannelGuild}`,true
        //)
        //.addField(
        //    "Nombre de roles",`${RoleCount}`,true
        //)
        //.addField(
        //    "Propriétaire du serveur",`Pseudo:<@${IDowner}>`,false
        //)
        //.addField(
        //    "AFK",`Channel:<#${GuildAfkChannelId}>\nTimeout: ${GuildAfkTimeout} Seconde`,false
        //)
        //.addField(
        //    "Bannière de Guild",`${GuildBannerUrl}`,false
        //)
        ////.addField(
        ////    "test",`${test}`,false
        ////)
        .setFooter({
           text: `Demandé(e) par ${GuildUserName}`,
           iconURL: `${GuildUserAvatar}`
       })
        .setThumbnail(
             ServeurIconURL 
        )
        .setTimestamp()

        //==================//
        //Envois du message//
        //================//
        await interaction.reply({ embeds: [embedinfoserveur] });
    }
}
// ces /n pour allez a la ligne