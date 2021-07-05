const data = new Set();
const Discord = require('discord.js');
const disbut = require('discord-buttons');
const {
	randomHexColor,
	getRandomString,
	checkForUpdates,
} = require('../functions/function');

module.exports = async (options) => {
	checkForUpdates();
	if (!options.message) {
		throw new Error('Weky Error: message argument was not specified.');
	}
	if (!(options.message instanceof Discord.Message)) {
		throw new TypeError('Weky Error: Invalid Discord Message was provided.');
	}

	if (!options.opponent) {
		throw new Error('Weky Error: opponent argument was not specified.');
	}
	if (!(options.opponent instanceof Discord.User)) {
		throw new TypeError('Weky Error: Invalid Discord User was provided.');
	}

	if (!options.xEmoji) {
		options.xEmoji = '❌';
	}
	if (typeof options.xEmoji !== 'string') {
		throw new TypeError('Weky Error: xEmoji must be a string');
	}

	if (!options.oEmoji) {
		options.oEmoji = '0️⃣';
	}
	if (typeof options.oEmoji !== 'string') {
		throw new TypeError('Weky Error: oEmoji must be a string');
	}

	if (!options.embed) options.embed = {};
	if (typeof options.embed !== 'object') {
		throw new TypeError('Weky Error: embed must be an object.');
	}

	if (!options.embed.title) {
		options.embed.title = 'Tic Tac Toe | Weky Development';
	}
	if (typeof options.embed.title !== 'string') {
		throw new TypeError('Weky Error: title must be a string.');
	}

	if (!options.embed.color) options.embed.color = randomHexColor();
	if (typeof options.embed.color !== 'string') {
		throw new TypeError('Weky Error: embed color must be a string.');
	}

	if (!options.embed.timestamp) options.embed.timestamp = true;
	if (typeof options.embed.timestamp !== 'boolean') {
		throw new TypeError('Weky Error: timestamp must be a boolean.');
	}

	if (!options.buttons) options.buttons = {};
	if (typeof options.buttons !== 'object') {
		throw new TypeError('Weky Error: buttons must be an object.');
	}

	if (!options.buttons.accept) {
		options.buttons.accept = 'Accept';
	}
	if (typeof options.buttons.accept !== 'string') {
		throw new Error('Weky Error: accept button text must be a string.');
	}

	if (!options.buttons.deny) {
		options.buttons.deny = 'Deny';
	}
	if (typeof options.buttons.deny !== 'string') {
		throw new Error('Weky Error: deny button text must be a string.');
	}

	if (!options.acceptMessage) {
		options.acceptMessage =
			'<@{{challenger}}> has challenged <@{{opponent}}> for a game of Tic Tac Toe!';
	}
	if (typeof options.acceptMessage !== 'string') {
		throw new Error('Weky Error: acceptMessage must be a string.');
	}

	if (!options.winMessage) {
		options.winMessage = 'GG, {{winner}} won!';
	}
	if (typeof options.winMessage !== 'string') {
		throw new TypeError('Weky Error: winMessage must be a string.');
	}

	if (!options.drawMessage) {
		options.drawMessage = 'This game is deadlock!';
	}
	if (typeof options.drawMessage !== 'string') {
		throw new TypeError('Weky Error: drawMessage must be a string.');
	}

	if (!options.endMessage) {
		options.endMessage =
			'<@{{opponent}}> didn\'t answer in time. So, I dropped the game!';
	}
	if (typeof options.endMessage !== 'string') {
		throw new TypeError('Weky Error: endMessage must be a string.');
	}

	if (!options.cancelMessage) {
		options.cancelMessage =
			'<@{{opponent}}> refused to have a game of Tic Tac Toe with you!';
	}
	if (typeof options.cancelMessage !== 'string') {
		throw new TypeError('Weky Error: cancelMessage must be a string.');
	}

	if (!options.startMessage) {
		options.startMessage = '{{player}} you go first!';
	}
	if (typeof options.startMessage !== 'string') {
		throw new TypeError('Weky Error: startMessage must be a string.');
	}

	if (!options.othersMessage) {
		options.othersMessage = 'Only {{author}} can use the buttons!';
	}
	if (typeof options.othersMessage !== 'string') {
		throw new TypeError('Weky Error: othersMessage must be a string.');
	}

	if (!options.opponentsTurnMessage) {
		options.opponentsTurnMessage = 'Please wait for your opponents move!';
	}
	if (typeof options.opponentsTurnMessage !== 'string') {
		throw new TypeError('Weky Error: opponentsTurnMessage must be a string.');
	}

	if (
		options.opponent.bot ||
		options.message.author.id === options.opponent.id
	) {
		return;
	}

	if (data.has(options.message.author.id) || data.has(options.opponent.id)) {
		return;
	}
	data.add(options.opponent.id);
	data.add(options.message.author.id);

	let a1 = '⬜';
	let a2 = '⬜';
	let a3 = '⬜';
	let b1 = '⬜';
	let b2 = '⬜';
	let b3 = '⬜';
	let c1 = '⬜';
	let c2 = '⬜';
	let c3 = '⬜';

	const a11 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const a22 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const a33 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const b11 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const b22 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const b33 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const c11 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const c22 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const c33 =
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4) +
		'-' +
		getRandomString(4);

	const gameData = [
		{
			member: options.message.author,
			em: options.xEmoji,
			color: 'red',
		},
		{
			member: options.opponent,
			em: options.oEmoji,
			color: 'blurple',
		},
	];

	let acceptbutton = new disbut.MessageButton()
		.setStyle('green')
		.setLabel(options.buttons.accept)
		.setID('accept');
	let denybutton = new disbut.MessageButton()
		.setStyle('red')
		.setLabel(options.buttons.deny)
		.setID('deny');
	let component = new disbut.MessageActionRow().addComponent([
		acceptbutton,
		denybutton,
	]);

	const embed = new Discord.MessageEmbed()
		.setTitle(options.embed.title)
		.setDescription(
			options.acceptMessage
				.replace('{{challenger}}', options.message.author.id)
				.replace('{{opponent}}', options.opponent.id),
		)
		.setFooter('©️ Weky Development')
		.setColor(options.embed.color);
	if (options.embed.timestamp) {
		embed.setTimestamp();
	}
	const question = await options.message.inlineReply({
		embed,
	});
	question.edit({
		embed,
		component,
	});
	const Collector = await question.createButtonCollector((fn) => fn, {
		time: 60000,
	});

	Collector.on('collect', async (_btn) => {
		if (_btn.clicker.member.id !== options.opponent.id) {
			return _btn.reply.send(
				options.othersMessage.replace(
					'{{author}}',
					`<@${options.opponent.id}>`,
				),
				true,
			);
		}
		_btn.reply.defer();
		if (_btn.id === 'deny') {
			acceptbutton = new disbut.MessageButton()
				.setDisabled()
				.setStyle('green')
				.setLabel(options.buttons.accept)
				.setID('accept');
			denybutton = new disbut.MessageButton()
				.setDisabled()
				.setStyle('red')
				.setLabel(options.buttons.deny)
				.setID('deny');
			component = new disbut.MessageActionRow().addComponent([
				acceptbutton,
				denybutton,
			]);
			const emd = new Discord.MessageEmbed()
				.setTitle(options.embed.title)
				.setDescription(
					options.cancelMessage.replace('{{opponent}}', options.opponent.id),
				)
				.setFooter('©️ Weky Development')
				.setColor(options.embed.color);
			if (options.embed.timestamp) {
				emd.setTimestamp();
			}
			Collector.stop();
			data.delete(options.opponent.id);
			data.delete(options.message.author.id);
			return question.edit({
				embed: emd,
				component,
			});
		} else if (_btn.id === 'accept') {
			Collector.stop();
			let player = Math.floor(Math.random() * gameData.length);
			let Embed = new Discord.MessageEmbed()
				.setTitle(options.embed.title)
				.setDescription(
					options.startMessage.replace('{{player}}', gameData[player].member),
				)
				.setColor(options.embed.color)
				.setTitle(options.embed.title)
				.setFooter('©️ Weky Development');
			if (options.embed.timestamp) {
				Embed.setTimestamp();
			}
			let A1 = new disbut.MessageButton()
				.setID(a11)
				.setStyle('gray')
				.setLabel('\u200b');
			let A2 = new disbut.MessageButton()
				.setID(a22)
				.setStyle('gray')
				.setLabel('\u200b');
			let A3 = new disbut.MessageButton()
				.setID(a33)
				.setStyle('gray')
				.setLabel('\u200b');
			let B1 = new disbut.MessageButton()
				.setID(b11)
				.setStyle('gray')
				.setLabel('\u200b');
			let B2 = new disbut.MessageButton()
				.setID(b22)
				.setStyle('gray')
				.setLabel('\u200b');
			let B3 = new disbut.MessageButton()
				.setID(b33)
				.setStyle('gray')
				.setLabel('\u200b');
			let C1 = new disbut.MessageButton()
				.setID(c11)
				.setStyle('gray')
				.setLabel('\u200b');
			let C2 = new disbut.MessageButton()
				.setID(c22)
				.setStyle('gray')
				.setLabel('\u200b');
			let C3 = new disbut.MessageButton()
				.setID(c33)
				.setStyle('gray')
				.setLabel('\u200b');
			question.edit({
				embed: Embed,
				components: [
					{
						type: 1,
						components: [A1, A2, A3],
					},
					{
						type: 1,
						components: [B1, B2, B3],
					},
					{
						type: 1,
						components: [C1, C2, C3],
					},
				],
			});
			const gameCollector = question.createButtonCollector((fn) => fn);
			gameCollector.on('collect', async (btn) => {
				if (
					btn.clicker.user.id !== options.message.author.id &&
					btn.clicker.user.id !== options.opponent.id
				) {
					return btn.reply.send(
						options.othersMessage.replace(
							'{{author}}',
							`<@${options.message.author.id}> and <@${options.opponent.id}>`,
						),
						true,
					);
				}
				if (
					btn.id == a11 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					a1 = gameData[player].em;
					console.log(a1);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.opponent.id);
						data.delete(options.message.author.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					A1 = new disbut.MessageButton()
						.setID(a11)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == a22 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					a2 = gameData[player].em;
					console.log(a2);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					A2 = new disbut.MessageButton()
						.setID(a22)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == a33 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					a3 = gameData[player].em;
					console.log(a3);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					A3 = new disbut.MessageButton()
						.setID(a33)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == b11 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					b1 = gameData[player].em;
					console.log(b1);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					B1 = new disbut.MessageButton()
						.setID(b11)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == b22 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					b2 = gameData[player].em;
					console.log(b2);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					B2 = new disbut.MessageButton()
						.setID(b22)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == b33 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					b3 = gameData[player].em;
					console.log(b3);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					B3 = new disbut.MessageButton()
						.setID(b33)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == c11 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					c1 = gameData[player].em;
					console.log(c1);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					C1 = new disbut.MessageButton()
						.setID(c11)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == c22 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					c2 = gameData[player].em;
					console.log(c2);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					C2 = new disbut.MessageButton()
						.setID(c22)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else if (
					btn.id == c33 &&
					gameData[player].member.id === btn.clicker.user.id
				) {
					btn.reply.defer();
					c3 = gameData[player].em;
					console.log(c3);
					if (
						(a1 == options.xEmoji &&
							b1 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b1 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a2 == options.xEmoji &&
							b2 == options.xEmoji &&
							c2 == options.xEmoji) ||
						(a2 == options.oEmoji &&
							b2 == options.oEmoji &&
							c2 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b3 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b3 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							a2 == options.xEmoji &&
							a3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							a2 == options.oEmoji &&
							a3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(b1 == options.xEmoji &&
							b2 == options.xEmoji &&
							b3 == options.xEmoji) ||
						(b1 == options.oEmoji &&
							b2 == options.oEmoji &&
							b3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(c1 == options.xEmoji &&
							c2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(c1 == options.oEmoji &&
							c2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a1 == options.xEmoji &&
							b2 == options.xEmoji &&
							c3 == options.xEmoji) ||
						(a1 == options.oEmoji &&
							b2 == options.oEmoji &&
							c3 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						(a3 == options.xEmoji &&
							b2 == options.xEmoji &&
							c1 == options.xEmoji) ||
						(a3 == options.oEmoji &&
							b2 == options.oEmoji &&
							c1 == options.oEmoji)
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(
								options.winMessage.replace(
									'{{winner}}',
									gameData[player].member,
								),
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send(_embed);
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					} else if (
						a1 !== '⬜' &&
						a2 !== '⬜' &&
						a3 !== '⬜' &&
						b1 !== '⬜' &&
						b2 !== '⬜' &&
						b3 !== '⬜' &&
						c1 !== '⬜' &&
						c2 !== '⬜' &&
						c3 !== '⬜'
					) {
						const _embed = new Discord.MessageEmbed()
							.setTitle(options.embed.title)
							.setDescription(options.drawMessage)
							.setFooter('©️ Weky Development')
							.setColor(options.embed.color);
						if (options.embed.timestamp) {
							_embed.setTimestamp();
						}
						options.message.channel.send({ embed: _embed });
						gameCollector.stop();
						data.delete(options.message.author.id);
						data.delete(options.opponent.id);
					}
					player = (player + 1) % 2;
					if (player == 0) {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`🎮 **${options.message.author}** - **versus** - ${options.opponent}`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					} else {
						Embed = new Discord.MessageEmbed()
							.setDescription(
								`${options.message.author} - **versus** - **${options.opponent}** 🎮`,
							)
							.setColor(options.embed.color)
							.setTitle(options.embed.title)
							.setFooter('©️ Weky Development');
						if (options.embed.timestamp) {
							Embed.setTimestamp();
						}
					}
					C3 = new disbut.MessageButton()
						.setID(c33)
						.setStyle(gameData[player].color)
						.setEmoji(gameData[player].em)
						.setDisabled();
					question.edit({
						embed: Embed,
						components: [
							{
								type: 1,
								components: [A1, A2, A3],
							},
							{
								type: 1,
								components: [B1, B2, B3],
							},
							{
								type: 1,
								components: [C1, C2, C3],
							},
						],
					});
				} else {
					return btn.reply.send(options.opponentsTurnMessage, true);
				}
			});
		}
	});
};