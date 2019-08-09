const Discord = require("discord.js");
const config = require("../config.json");
const color = require("../utils/color.json");

module.exports.run = async(client, message, args) => {
	message.channel.send(`<@${message.author.id}> 😈Je te vois😈.`)
};

module.exports.help = {
	name: 'je'
}