const midDuel = new Set();
const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { randomHexColor, getRandomString } = require('../functions/function');

module.exports = async (options) => {
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

	if (!options.opponent) {
		throw new TypeError('Weky Error: Missing argument opponent');
	}
	if (typeof options.opponent !== 'object') {
		throw new TypeError('Weky Error: Provided opponent data is Invalid');
	}

	if (!options.message) {
		throw new TypeError('Weky Error: Missing argument message');
	}
	if (typeof options.message !== 'object') {
		throw new TypeError('Weky Error: Provided message data is Invalid');
	}

	if (!options.embed) options.embed = {};
	if (typeof options.embed !== 'object') {
		throw new TypeError('Weky Error: embed must be an object.');
	}

	if (!options.embed.color) options.embed.color = randomHexColor();
	if (typeof options.embed.color !== 'string') {
		throw new TypeError('Weky Error: embed color must be a string.');
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
			'<@{{challenger}}> has challenged <@{{opponent}}> for a fight!';
	}
	if (typeof options.acceptMessage !== 'string') {
		throw new Error('Weky Error: acceptMessage must be a string.');
	}

	if (!options.winMessage) {
		options.winMessage = 'GG, <@{{winner}}> won the fight!';
	}
	if (typeof options.winMessage !== 'string') {
		throw new TypeError('Weky Error: winMessage must be an string.');
	}

	if (!options.endMessage) {
		options.endMessage =
			'<@{{opponent}}> didn\'t answer in time. So, I dropped the game!';
	}
	if (typeof options.endMessage !== 'string') {
		throw new TypeError('Weky Error: endMessage must be a string.');
	}

	if (!options.cancelMessage) {
		options.cancelMessage = '<@{{opponent}}> refused to have a fight with you!';
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

	if (
		options.opponent.bot ||
		options.message.author.id === options.opponent.id
	) {
		return;
	}

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

	const member = options.opponent;
	const author = options.message.author.id;
	const authorName = options.message.author.username;

	if (midDuel.has(author)) {
		return options.message.channel.send('You\'re currently in a duel');
	} else if (midDuel.has(member.id)) {
		return options.message.channel.send(
			`<@${member.id}> is currently in a duel`,
		);
	}

	const gameData = [
		{
			member: options.message.author,
			em: options.xEmoji,
			color: 'red',
		},
		{
			member: member,
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
	let component = new disbut.MessageActionRow()
		.addComponent([
			acceptbutton,
			denybutton,
		]);
	const embed = new Discord.MessageEmbed()
		.setTitle(options.embed.title)
		.setDescription(
			options.acceptMessage
				.replace('{{challenger}}', author)
				.replace('{{opponent}}', member.id),
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
		if (_btn.clicker.member.id !== member.id) {
			return _btn.reply.send(
				options.othersMessage.replace('{{author}}', `<@${member.id}>`),
				true,
			);
		}
		_btn.reply.defer();
		if (_btn.id === 'deny') {
			acceptbutton = new disbut.MessageButton()
				.setStyle('green')
				.setLabel(options.buttons.accept)
				.setID('accept');
			denybutton = new disbut.MessageButton()
				.setStyle('red')
				.setLabel(options.buttons.deny)
				.setID('deny');
			component = new disbut.MessageActionRow()
				.addComponent([
					acceptbutton,
					denybutton,
				]);
			const emd = new Discord.MessageEmbed()
				.setTitle(options.embed.title)
				.setDescription(
					options.cancelMessage.replace('{{opponent}}', member.id),
				)
				.setFooter('©️ Weky Development')
				.setColor(options.embed.color);
			if (options.embed.timestamp) {
				emd.setTimestamp();
			}
			Collector.stop();
			return question.edit({
				embed: emd,
				component,
			});
		} else if (_btn.id === 'accept') {
			Collector.stop();
			let player = Math.floor(Math.random() * gameData.length);
			let Embed = new Discord.MessageEmbed();
			player = (player + 1) % 2;
			if (player == 0) {
				Embed = new Discord.MessageEmbed()
					.setDescription(options.startMessage.replace('{{player}}', authorName))
					.setColor(options.embed.color);
			} else {
				Embed = new Discord.MessageEmbed()
					.setDescription(options.startMessage.replace('{{player}}', options.opponent.username))
					.setColor(options.embed.color);
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
			})
				.then(async (msg) => {
					midDuel.add(author);
					midDuel.add(member.id);
					const gameFilter = (m) =>
						m.clicker.user.id === options.message.author.id ||
				m.clicker.user.id === options.opponent.id;
					const gameCollector = msg.createButtonCollector(gameFilter);
					gameCollector.on('collect', async (btn) => {
						if (
							btn.id == a11 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									a1 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								A1 = new disbut.MessageButton()
									.setID(a11)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == a22 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									a2 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								A2 = new disbut.MessageButton()
									.setID(a22)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == a33 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									a3 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								A3 = new disbut.MessageButton()
									.setID(a33)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == b11 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									b1 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								B1 = new disbut.MessageButton()
									.setID(b11)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == b22 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									b2 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								B2 = new disbut.MessageButton()
									.setID(b22)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == b33 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									b3 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								B3 = new disbut.MessageButton()
									.setID(b33)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == c11 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									c1 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								C1 = new disbut.MessageButton()
									.setID(c11)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == c22 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									c2 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								C2 = new disbut.MessageButton()
									.setID(c22)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else if (
							btn.id == c33 &&
					gameData[player].member.id === btn.clicker.user.id
						) {
							btn.reply.defer();
							if (btn.label == options.oEmoji || btn.label == options.xEmoji) {
								btn.reply.send('That spot is already occupied.');
							} else {
								try {
									c3 = gameData[player].em;
									if (
										(a1 == options.xEmoji &&
									b1 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b1 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a2 == options.xEmoji &&
									b2 == options.xEmoji &&
									c2 == options.xEmoji) ||
								(a2 == options.oEmoji &&
									b2 == options.oEmoji &&
									c2 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b3 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b3 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									a2 == options.xEmoji &&
									a3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									a2 == options.oEmoji &&
									a3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(b1 == options.xEmoji &&
									b2 == options.xEmoji &&
									b3 == options.xEmoji) ||
								(b1 == options.oEmoji &&
									b2 == options.oEmoji &&
									b3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(c1 == options.xEmoji &&
									c2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(c1 == options.oEmoji &&
									c2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a1 == options.xEmoji &&
									b2 == options.xEmoji &&
									c3 == options.xEmoji) ||
								(a1 == options.oEmoji &&
									b2 == options.oEmoji &&
									c3 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									} else if (
										(a3 == options.xEmoji &&
									b2 == options.xEmoji &&
									c1 == options.xEmoji) ||
								(a3 == options.oEmoji &&
									b2 == options.oEmoji &&
									c1 == options.oEmoji)
									) {
										options.message.channel.send(
											`${gameData[player].member} wins!`,
										);
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
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
										options.message.channel.send('Tie!');
										gameCollector.stop();
										midDuel.delete(author);
										midDuel.delete(member.id);
									}
								} catch (e) {
									console.log(e);
								}
								player = (player + 1) % 2;
								if (player == 0) {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 **${authorName}** VS ${options.opponent.username} 🎮`,
										)
										.setColor(options.embed.color);
								} else {
									Embed = new Discord.MessageEmbed()
										.setDescription(
											`🎮 ${authorName} VS **${options.opponent.username}** 🎮`,
										)
										.setColor(options.embed.color);
								}
								C3 = new disbut.MessageButton()
									.setID(c33)
									.setStyle(gameData[player].color)
									.setEmoji(gameData[player].em)
									.setDisabled();
								msg.edit({
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
							}
						} else {
							return btn.reply.send('Wait for opponent.', true);
						}
					});
				});
		}
	});
};
