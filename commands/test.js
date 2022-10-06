// info_bot.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Cette commande est présente pour faire des test en interne'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const embedtest = new EmbedBuilder()
        .setTitle(
            "Titre (Test des envois d'embed en V14)"
        )
        .setAuthor({
            name: 'Auteur',
            iconURL: 'https://zupimages.net/up/22/03/ws50.jpg',
            url: 'https://zupimages.net/up/22/03/ws50.jpg'
         })
        .setColor(
            'Red'
        )
        .setDescription(
            'Description'
        )
        .addFields(
            { name: 'Field 1', value: 'Valeur 1' },
            { name: 'Field 2', value: 'Valeur 2' },
            { name: 'Field 3', value: 'Valeur 3' }
        )
        .setFooter({
            text:"Footer",
            iconURL:'https://zupimages.net/up/22/03/ws50.jpg'
        })

        await interaction.reply({ embeds: [embedtest] });
    }
}
// ces /n pour allez a la ligne