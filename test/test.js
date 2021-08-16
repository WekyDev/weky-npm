const { Client, Intents} = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES],
});
const { ChaosWords } = require('../index');

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
	if(message.content === 'test') {
		await ChaosWords({
			message: message,
			embed: {
				title: 'ChaosWords | Weky Development',
				description: 'You have **{{time}}** to find the hidden words in the below sentence.',
				color: '#7289da',
				field1: 'Sentence:',
				field2: 'Words Found/Remaining Words:',
				field3: 'Words found:',
				field4: 'Words:',
				timestamp: true
			},
			winMessage: 'GG, You won! You made it in **{{time}}**.',
			loseMessage: 'Better luck next time!',
			wrongWordMessage: 'Wrong Guess! You have **{{remaining_tries}}** tries left.',
			correctWordMessage: 'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).',
			time: 60000,
			words: ['hello', 'these', 'are', 'words'],
			charGenerated: 17,
			maxTries: 10,
			buttonText: 'Cancel',
			othersMessage: 'Only <@{{author}}> can use the buttons!'
		});
	}
});

client.login('ODAzMDE3OTU3NTI4Njk4OTEz.YA3qwA.64GJCdzFHxIig7IkaTpuTnuaBUM');