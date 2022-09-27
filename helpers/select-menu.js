const { SelectMenuInteraction, MessageEmbed, MessageActionRow } = require('discord.js');

//=====================//
//Interaction des menu//
//===================//

/**
 * 
 * @param {SelectMenuInteraction} interaction 
 */
const handleSelectMenu = async interaction => {
    switch (interaction.customId) {
        case 'SetCouleur':
            await interaction.update({content: `Tu as choisis ${interaction.values[ 0 ]}`, components: [  ]});
            break;

        default:
            break;
    }
};

module.exports = handleSelectMenu;