const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {
	message.channel.send(`<@${message.author.id}> chuchote, seul les personnes près de lui peuvent l'entendre.`)
};

module.exports.help = {
	name: 'chuchote'
}