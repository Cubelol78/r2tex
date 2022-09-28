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

        const embedcalcul = new EmbedBuilder()
        .setTitle('Calcul du ping !')

        await interaction.reply({ content: ".",embeds: [embedcalcul], ephemeral: true });

        const message = await interaction.fetchReply();

        //await interaction.editReply({ content: `Le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms pour me parvenir et te revenir.\nTon ping est de ${interaction.client.ws.ping} ms.`, ephemeral: true});

        const embedping = new EmbedBuilder()
        .setTitle('Ping')
        .setColor('#ff0000')
        .setDescription(
            ` Le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms pour me parvenir et te revenir.\nTon ping est de ${interaction.client.ws.ping} ms. `
        )
        .setURL('')
        .setAuthor({
            name: '',
            iconURL: '',
            url: ''
         })
        .setFooter({
            text: 'Monsieur Propre !!!',
            iconURL: 'https://zupimages.net/up/22/03/ws50.jpg'
        })
        .setThumbnail(
            `${interaction.user.avatarURL()}` 
       )
        .setTimestamp()

        //await interaction.deleteReply();
        return interaction.editReply({ content:".",embeds: [embedping], ephemeral: true });
    }
}