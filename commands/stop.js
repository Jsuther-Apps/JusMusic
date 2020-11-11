const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	execute(message); {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
	}
};

module.exports.config = {
	name:"Stop",
 description:"Stops all songs and clears current queue",
 usage:"?stop",
 accessableby:"Members",
 aliases:[""],
 cooldown: 5
 }