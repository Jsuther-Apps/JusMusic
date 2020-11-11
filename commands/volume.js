const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	execute(message, args); {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[0]; // eslint-disable-line
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`I set the volume to: **${args[0]}**`);
	}
};

module.exports.config = {
	name:"Volume",
 description:"Moves the volume up or down by a number (Has to be playing a song to work)",
 usage:"?volume",
 accessableby:"Members",
 aliases:["v", "sound"],
 cooldown: 20
 }