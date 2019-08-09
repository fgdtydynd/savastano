const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {

    var embed1 = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setColor(color.red)
        .setDescription("Vous n'avez pas la permission ``ADMINISTRATEUR``")
        .setFooter(`${client.user.username}`)

    var embed2 = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setColor(color.red)
        .setDescription("Precise un message")
        .setFooter(`${client.user.username}`)

    var args = message.content.split(" ").slice(1);
                var msge = args.join(' ');
 
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);
                if(!msge) return message.channel.send(embed2)
 
                var mpall = new Discord.RichEmbed()
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setColor(color.orange)
                .addField("Annonce :", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))

};

module.exports.help = {
    name: "mpall"
};