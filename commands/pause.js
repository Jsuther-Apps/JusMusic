const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	execute(message); {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}
};

module.exports.config = {
	name:"Pause",
 description:"Pause what's playing",
 usage:"?pause",
 accessableby:"Members",
 aliases:[]
 }