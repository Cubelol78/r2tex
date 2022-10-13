//ping.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction,EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Envoie ton Ping avec le Bot'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        //const FooterURL = 'https://zupimages.net/up/22/03/ws50.jpg'
        const AvatarDefault = interaction.user.defaultAvatarURL
        const UserName = interaction.user.tag

        //=====================//
        //Avatar d'utilisateur//
        //===================//
        const UserAvatarCalcul = interaction.user.avatarURL()
        var UserAvatar = ''
        if ( UserAvatarCalcul == null )
            UserAvatar = `${AvatarDefault}`
        else
            if ( UserAvatarCalcul == '' )
                UserAvatar = `${AvatarDefault}`
            else
                if ( UserAvatarCalcul == 'undefined' )
                    UserAvatar = `${AvatarDefault}`
                else
                    UserAvatar = `${UserAvatarCalcul}`

        //==================//
        //Embed Calcul Ping//
        //================//
        const embedcalcul = new EmbedBuilder()
        .setTitle('Calcul du ping !')

        await interaction.reply({ content: ".",embeds: [embedcalcul], ephemeral: false });

        const message = await interaction.fetchReply();

        //await interaction.editReply({ content: `Le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms pour me parvenir et te revenir.\nTon ping est de ${interaction.client.ws.ping} ms.`, ephemeral: true});

        const embedping = new EmbedBuilder()
        .setTitle('Ping')
        .setColor('#ff0000')
        .setDescription(
            ` Le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms pour me parvenir et te revenir.\nTon ping est de ${interaction.client.ws.ping} ms. `
        )
        .setFooter({
            text: `Demandé(e) par ${UserName}`,
            iconURL: `${UserAvatar}`
        })
        .setThumbnail(
            `${UserAvatar}` 
       )
        .setTimestamp()

        //await interaction.deleteReply();
        return interaction.editReply({ content:".",embeds: [embedping], ephemeral: false });
    }
}