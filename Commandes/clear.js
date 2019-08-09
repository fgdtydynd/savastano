const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed1 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription(":non: Vous n'avez pas la permission")
    .setFooter(`Commande demandée par ${message.author.username}`)

    var embed2 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription(":non: Je n'ai pas la permission")
    .setFooter(`Commande demandée par ${message.author.username}`)

    var embed3 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription(":non: Vous devez spécifier un nombre de messages à supprimer")
    .setFooter(`Commande demandée par ${message.author.username}`)

    var embed4 = new Discord.RichEmbed()
    .setTitle("Erreur")
    .setColor('#006633')
    .setDescription(":non: Veuillez indiquer un nombre valide")
    .setFooter(`Commande demandée par ${message.author.username}`)

    var embed5 = new Discord.RichEmbed()
    .setTitle("Succès")
    .setColor('#006633')
    .setDescription(`:non: ${args[0]} messages ont été supprimés`)
    .setFooter(`Commande demandée par ${message.author.username}`)

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed2).catch(console.error);

    if(!args[0]) return message.channel.send(embed3);

    if(isNaN(args[0])) return message.channel.send(embed4);

    message.channel.bulkDelete(args[0]);

    message.channel.send(embed5).then(message => message.delete(5000))
};

module.exports.help = {
    name: 'clear'
};