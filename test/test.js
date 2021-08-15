const { Client, Intents} = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES],
});
// const disbut = require('discord-buttons');
const { Calculator } = require('../index');
// disbut(client);

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
	if(message.content === '!calculator') {
		await Calculator({
			message: message,
			embed: {
				title: 'Calculator | Weky Development',
				color: '#5865F2',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
	}
});

client.login('ODAzMDE3OTU3NTI4Njk4OTEz.YA3qwA.64GJCdzFHxIig7IkaTpuTnuaBUM');