const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {
	message.channel.send(`<@${message.author.id}> crie, toutes les personnes peuvent l'entendre.`)
};

module.exports.help = {
	name: 'crie'
}