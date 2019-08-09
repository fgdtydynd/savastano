const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {

    let heure = args.join(" ")

	var embed1 = new Discord.RichEmbed()
    	.setTitle("Erreur")
    	.setColor(color.red)
    	.setDescription("Vous n'avez pas la permission")
    	.setFooter(`${client.user.username}`)

    var embed2 = new Discord.RichEmbed()
    	.setTitle("Erreur")
    	.setColor(color.red)
    	.setDescription("Veuillez indiquer une heure")
    	.setFooter(`${client.user.username}`)

    var embed3 = new Discord.RichEmbed()
    	.setTitle("Annonce session")
    	.setColor(color.orange)
    	.addField(`__Qui Veut Rp Demain à ${heure}:__`, "\n<:oui:562564646922485767> _Oui_\n<:JSP:552551785576005637> _Je sais pas_\n<:non:562564617692250113> _Non_\n\nMerci")
    	.setFooter(`${client.user.username}`)

    var emoji1 = client.emojis.find("name", "oui");
    var emoji2 = client.emojis.find("name", "JSP");
    var emoji3 = client.emojis.find("name", "non");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(embed1);
    if(!heure) return message.channel.send(embed2);
    message.delete()
    message.channel.send(embed3).then(function (message) {
        message.react(emoji1)
        message.react(emoji2)
        message.react(emoji3)
    }).catch(function() {
    });
    message.channel.send("@everyone").then(message => message.delete(10))
};

module.exports.help = {
	name: 'rp'
};