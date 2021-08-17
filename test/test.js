const { Client, Intents } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES],
});
const { Fight } = require('../index');

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
	if(message.content.startsWith('test')) {
		message.channel.send({
			content: client.ws.ping.toString()
		});
		await Fight({
			message: message,
			opponent: message.mentions.users.first(),
			embed: {
				title: 'Fight | Weky Development',
				color: '#7289da',
				timestamp: true
			},
			buttons: {
			  hit: 'Hit',
			  heal: 'Heal',
			  cancel: 'Stop',
			  accept: 'Accept',
			  deny: 'Deny'
			},
			acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
			winMessage: 'GG, <@{{winner}}> won the fight!',
			endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
			cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
			fightMessage: '{{player}} you go first!',
			opponentsTurnMessage: 'Please wait for your opponents move!',
			highHealthMessage: 'You cannot heal if your HP is above 80!',
			lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
			returnWinner: false,
			othersMessage: 'Only {{author}} can use the buttons!'
		});
	}
});

client.login('Token =)');