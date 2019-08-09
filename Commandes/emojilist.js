const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    var embed1 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription(":non: Aucun émoji")
    .setFooter(`${client.user.username}`)

        const List = message.guild.emojis.map(e => e.toString()).join(" ");
        if(!List) {
            message.channel.send(embed1)
        }

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emoji\'s')
            .setColor('#006633')
            .addField("Liste des émojis disponible :", `${List}`)
            .setTimestamp()
        message.channel.send(EmojiList)

};

module.exports.help = {
    name: 'emojilist'
};