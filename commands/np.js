const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	execute(message); {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	}
};

module.exports.config = {
	name:"Np",
 description:"Shows what's playing right now",
 usage:"?np",
 accessableby:"Members",
 aliases:[]
 }