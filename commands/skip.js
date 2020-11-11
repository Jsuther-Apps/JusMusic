const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {s
	execute(message); {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
	}
};

module.exports.config = {
	name:"Skip",
 description:"Skips the current song",
 usage:"?skip",
 accessableby:"Members",
 aliases:["s"],
 cooldown: 5
 }