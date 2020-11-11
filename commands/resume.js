const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {s
	execute(message); {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}
};

module.exports.config = {
	name:"Resume",
 description:"Resume after being paused",
 usage:"?resume",
 accessableby:"Members",
 aliases:["r"],
 cooldown: 5
 }