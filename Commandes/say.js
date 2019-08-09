const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed1 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription("<:non:587649272648957952> Vous n'avez pas la permission")
    .setFooter(`Commande demandée par ${message.author.username}`)

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1);
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
};

module.exports.help = {
    name: 'say'
};