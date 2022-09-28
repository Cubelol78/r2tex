// info_serveur.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder, User } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info-serveur')
        .setDescription('Affiche des information Serveur'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        var ServeurIconURL = interaction.guild.iconURL()
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
        const GuildAfkChannelId = interaction.guild.afkChannelId
        const GuildAfkTimeout = interaction.guild.afkTimeout
        const GuildBannerUrl = interaction.guild.bannerURL()
        //const test = CounterMemberGuild.filter(member => member.user.bot).size
        //const test1 = ClientBotGuild + BotGuild
        //const GuildMember = CounterMemberGuild - test1
        //const test = interaction.channel.type(GUILD_TEXT)
        //const test = interaction.guild.channels.cache.filter(channel => channel.type("GUILD_TEXT")).size

        const embedinfoserveur = new EmbedBuilder()
        .setTitle('Information Serveur')
        .setColor('#ff0000')
        .setDescription(
            `  Nom: ${GuildName}\nId: ${GuildId}\nDate de création:\n${DateCreate}|${HeureCreate}  ` 
            )
        .setURL('')
        .setAuthor({
           name: '',
           iconURL: '',
           url: ''
        })
        .addField(
            'Membre sur le serveur', `${CounterMemberGuild}`, true
            )
        //.addField(
        //    'Nombre de Bot',`${BotGuild}`,false
        //    )
        //.addField(
        //    "Nombre d'utilisateur connecter",`${MemberGuild}`,false
        //    )
        .addField(
            "Nombre de channel",`${CounterChannelGuild}`,true
        )
        .addField(
            "Nombre de roles",`${RoleCount}`,true
        )
        .addField(
            "Propriétaire du serveur",`Pseudo:<@${IDowner}>`,false
        )
        .addField(
            "AFK",`Channel:<#${GuildAfkChannelId}>\nTimeout: ${GuildAfkTimeout} Seconde`,false
        )
        .addField(
            "Bannière de Guild",`${GuildBannerUrl}`,false
        )
        //.addField(
        //    "test",`${test}`,false
        //)
        .setFooter({
           text: 'Monsieur Propre !!!',
           iconURL: 'https://zupimages.net/up/22/03/ws50.jpg'
       })
        .setThumbnail(
             ServeurIconURL 
        )
        .setTimestamp()
        await interaction.reply({ embeds: [embedinfoserveur] });
    }
}
// ces /n pour allez a la ligne