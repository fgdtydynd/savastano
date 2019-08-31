const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {
	var embed1 = new Discord.RichEmbed()
		.setTitle("San Andreas Rp")
		.setColor(color.black)
		.setTitle("San Andreas Rp")
		.setColor(color.black)
		.setThumbnail('https://cdn.discordapp.com/attachments/600741152982827009/607909446030721034/JPEG_20190727_170515.jpg')
		.addField("🥀 Commande RP 🥀:", `${config.prefix}chuchoter, ${config.prefix}crie, ${config.prefix}parler`)
		.addField("🔰 Commande admin 🔰:", `${config.prefix}rp, ${config.prefix}mpall, ${config.prefix}say, ${config.prefix}clear`)
		.addField("💎 Commande divers 💎:", ` ${config.prefix}ping`)

		.setImage('https://cdn.discordapp.com/attachments/600741152982827009/607903023309783040/20190724_211825-1.gif')
		.setFooter(`${client.user.username} By LeStyle`)


	message.delete(10000000)
	message.channel.send(embed1).then(message => message.delete(50000000))
	message.author.send(embed2)

};

module.exports.help = {
	name: "help"
};
