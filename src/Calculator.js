const math = require('mathjs');
const {
	MessageEmbed,
	MessageButton
} = require('discord.js');
const {
	randomHexColor,
	checkForUpdates,
	getRandomString,
} = require('../functions/function');

const blurple = 'PRIMARY';
const gray = 'SECONDARY';
const green = 'SUCCESS';
const red = 'DANGER';

module.exports = async (options) => {
	try {
		checkForUpdates();
		if (!options.message) {
			throw new Error('Weky Error: message argument was not specified.');
		}
		if (typeof options.message !== 'object') {
			throw new TypeError('Weky Error: Invalid Discord Message was provided.');
		}

		if (!options.embed) options.embed = {};
		if (typeof options.embed !== 'object') {
			throw new TypeError('Weky Error: embed must be an object.');
		}

		if (!options.embed.title) {
			options.embed.title = 'Calculator | Weky Development';
		}
		if (typeof options.embed.title !== 'string') {
			throw new TypeError('Weky Error: embed title must be a string.');
		}

		if (!options.embed.color) options.embed.color = randomHexColor();
		if (typeof options.embed.color !== 'string') {
			throw new TypeError('Weky Error: embed color must be a string.');
		}

		if (!options.embed.timestamp) options.embed.timestamp = true;
		if (typeof options.embed.timestamp !== 'boolean') {
			throw new TypeError('Weky Error: timestamp must be a boolean.');
		}

		if (!options.disabledQuery) options.disabledQuery = 'Calculator is disabled!';
		if (typeof options.disabledQuery !== 'string') {
			throw new TypeError('Weky Error: disabledQuery must be a string.');
		}

		if (!options.invalidQuery) {
			options.invalidQuery = 'The provided equation is invalid!';
		}
		if (typeof options.invalidQuery !== 'string') {
			throw new TypeError('Weky Error: invalidQuery must be a string.');
		}

		if (!options.othersMessage) {
			options.othersMessage = 'Only <@{{author}}> can use the buttons!';
		}
		if (typeof options.othersMessage !== 'string') {
			throw new TypeError('Weky Error: othersMessage must be a string.');
		}

		// if (data.has(options.message.author.id)) return;
		// data.add(options.message.author.id);

		// Button ID generator
		let str = ' ';
		let stringify = '```\n' + str + '\n```';
		const calc_lock = getRandomString(20);
		const calc_percent = getRandomString(20);
		const calc_7 = getRandomString(20);
		const calc_8 = getRandomString(20);
		const calc_9 = getRandomString(20);
		const calc_1 = getRandomString(20);
		const calc_2 = getRandomString(20);
		const calc_3 = getRandomString(20);
		const calc_4 = getRandomString(20);
		const calc_5 = getRandomString(20);
		const calc_0 = getRandomString(20);
		const calc_6 = getRandomString(20);
		const calc_e1 = getRandomString(20);
		const calc_e2 = getRandomString(20);
		const calc_dot = getRandomString(20);
		const calc_plus = getRandomString(20);
		const calc_multiply = getRandomString(20);
		const calc_equal = getRandomString(20);
		const calc_clear = getRandomString(20);
		const calc_minus = getRandomString(20);
		const calc_devide = getRandomString(20);
		const calc_backspace = getRandomString(20);
		const calc_uppercase = getRandomString(20);
		const noncalc_space = getRandomString(20);
		const noncalc_spacee = getRandomString(20);

		// Buttons

		// Row 1
		const e1 = new MessageButton()
			.setCustomId(calc_e1)
			.setLabel('(')
			.setStyle(blurple);

		const e2 = new MessageButton()
			.setCustomId(calc_e2)
			.setLabel(')')
			.setStyle(blurple);

		const uppercase = new MessageButton()
			.setCustomId(calc_uppercase)
			.setLabel('^')
			.setStyle(blurple);

		const percent = new MessageButton()
			.setCustomId(calc_percent)
			.setLabel('%')
			.setStyle(blurple);

		const clear = new MessageButton()
			.setCustomId(calc_clear)
			.setLabel('AC')
			.setStyle(red);

		// Row 2	
		const seven = new MessageButton()
			.setCustomId(calc_7)
			.setLabel('7')
			.setStyle(gray);

		const eight = new MessageButton()
			.setCustomId(calc_8)
			.setLabel('8')
			.setStyle(gray);

		const nine = new MessageButton()
			.setCustomId(calc_9)
			.setLabel('9')
			.setStyle(gray);

		const devide = new MessageButton()
			.setCustomId(calc_devide)
			.setLabel('÷')
			.setStyle(blurple);

		const destroy = new MessageButton()
			.setCustomId(calc_lock)
			.setLabel('Lock')
			.setStyle(red);

		// Row 3
		const four = new MessageButton()
			.setCustomId(calc_4)
			.setLabel('4')
			.setStyle(gray);

		const five = new MessageButton()
			.setCustomId(calc_5)
			.setLabel('5')
			.setStyle(gray);

		const six = new MessageButton()
			.setCustomId(calc_6)
			.setLabel('6')
			.setStyle(gray);

		const multiply = new MessageButton()
			.setCustomId(calc_multiply)
			.setLabel('x')
			.setStyle(blurple);

		const backspace = new MessageButton()
			.setCustomId(calc_backspace)
			.setLabel('⌫')
			.setStyle(red);

		// Row 4
		const one = new MessageButton()
			.setCustomId(calc_1)
			.setLabel('1')
			.setStyle(gray);

		const two = new MessageButton()
			.setCustomId(calc_2)
			.setLabel('2')
			.setStyle(gray);

		const three = new MessageButton()
			.setCustomId(calc_3)
			.setLabel('3')
			.setStyle(gray);

		const minus = new MessageButton()
			.setCustomId(calc_minus)
			.setLabel('-')
			.setStyle(blurple);

		// Row 5
		const dot = new MessageButton()
			.setCustomId(calc_dot)
			.setLabel('.')
			.setStyle(blurple);

		const zero = new MessageButton()
			.setCustomId(calc_0)
			.setLabel('0')
			.setStyle(gray);

		const equal = new MessageButton()
			.setCustomId(calc_equal)
			.setLabel('=')
			.setStyle(green);

		const plus = new MessageButton()
			.setCustomId(calc_plus)
			.setLabel('+')
			.setStyle(blurple);

		// Universal
		const space = new MessageButton()
			.setCustomId(noncalc_space)
			.setLabel('\u200b')
			.setStyle(gray)
			.setDisabled();

		const spacee = new MessageButton()
			.setCustomId(noncalc_spacee)
			.setLabel('\u200b')
			.setStyle(gray)
			.setDisabled();

		// ----------------------------------------------------------------------

		const embed = new MessageEmbed()
			.setTitle(options.embed.title)
			.setDescription(stringify)
			.setColor(options.embed.color)

		if (options.embed.timestamp) {
			embed.setTimestamp();
		}
		options.message.channel.send({
			embeds: [embed]
		}).then(async (msg) => {
			// console.log([seven, eight, nine, slash, destroy])
			msg.edit({
				embeds: [embed],
				components: [{
						type: 1,
						components: [e1, e2, uppercase, percent, clear],
					},
					{
						type: 1,
						components: [seven, eight, nine, devide, destroy],
					},
					{
						type: 1,
						components: [four, five, six, multiply, backspace],
					},
					{
						type: 1,
						components: [one, two, three, minus, space],
					},
					{
						type: 1,
						components: [dot, zero, equal, plus, spacee],
					},
				],
			});
			async function edit() {
				const _embed = new MessageEmbed()
					.setTitle(options.embed.title)
					.setDescription(stringify)
					.setColor(options.embed.color)

				if (options.embed.timestamp) {
					_embed.setTimestamp();
				}
				msg.edit({
					embeds: [_embed],
					components: [{
							type: 1,
							components: [e1, e2, uppercase, percent, clear],
						},
						{
							type: 1,
							components: [seven, eight, nine, devide, destroy],
						},
						{
							type: 1,
							components: [four, five, six, multiply, backspace],
						},
						{
							type: 1,
							components: [one, two, three, minus, space],
						},
						{
							type: 1,
							components: [dot, zero, equal, plus, spacee],
						},
					],
				});
			}
			async function lock() {
				const _embed = new MessageEmbed()
					.setTitle(options.embed.title)
					.setColor(options.embed.color)
					.setDescription(stringify)

				if (options.embed.timestamp) {
					_embed.setTimestamp();
				}
				msg.edit({
					embeds: [_embed],
					components: [{
							type: 1,
							components: [e1.setDisabled(), e2.setDisabled(), uppercase.setDisabled(), percent.setDisabled(), clear.setDisabled()],
						},
						{
							type: 1,
							components: [seven.setDisabled(), eight.setDisabled(), nine.setDisabled(), devide.setDisabled(), destroy.setDisabled()],
						},
						{
							type: 1,
							components: [four.setDisabled(), five.setDisabled(), six.setDisabled(), multiply.setDisabled(), backspace.setDisabled()],
						},
						{
							type: 1,
							components: [one.setDisabled(), two.setDisabled(), three.setDisabled(), minus.setDisabled(), space.setDisabled()],
						},
						{
							type: 1,
							components: [dot.setDisabled(), zero.setDisabled(), equal.setDisabled(), plus.setDisabled(), spacee.setDisabled()],
						},
					],
				});
			}
			const filter = (btn) => btn.user.id == options.message.member.id;
			const calc = msg.channel.createMessageComponentCollector({
				filter
			});;

			calc.on('collect', async btn => {
				if (btn.user.id !== options.message.author.id) {
					return btn.reply({
						content: options.othersMessage.replace(
							'{{author}}',
							options.message.author.id,
						),
						emphemeral: true,
					});
				}
				btn.deferUpdate();
				switch (btn.customId) {
					case calc_0:
						str += '0';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_1:
						str += '1';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_2:
						str += '2';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_3:
						str += '3';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_4:
						str += '4';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_5:
						str += '5';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_6:
						str += '6';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_7:
						str += '7';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_8:
						str += '8';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_9:
						str += '9';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_plus:
						str += '+';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_minus:
						str += '-';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_devide:
						str += '/';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_uppercase:
						str += '^';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_multiply:
						str += '*';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_dot:
						str += '.';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_clear:
						str = ' ';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_e1:
						str += '(';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_e2:
						str += ')';
						stringify = '```\n' + str + '\n```';
						edit();
						break;
					case calc_backspace:
						if (str === ' ' || str === '' || str === null || str === undefined) {
							return;
						} else {
							str = str.split('');
							str.pop();
							str = str.join('');

							stringify = '```\n' + str + '\n```';
							edit();
							break;
						}
						case calc_percent:
							str += '%';
							stringify = '```\n' + str + '\n```';
							edit();
							break;
				}

				if (btn.customId === calc_equal) {
					if (str === ' ' || str === '' || str === null || str === undefined) {
						return;
					} else {
						try {
							str += ' = ' + math.evaluate(str);
							stringify = '```\n' + str + '\n```';
							edit();
							str = ' ';
							stringify = '```\n' + str + '\n```';
						} catch (e) {
							str = options.invalidQuery;
							stringify = '```\n' + str + '\n```';
							edit();
							str = ' ';
							stringify = '```\n' + str + '\n```';
						}
					}
				} else if (btn.customId === calc_lock) {
					str = options.disabledQuery;
					stringify = '```\n' + str + '\n```';
					edit();
					calc.stop();
					lock();
				}
			});
		});
	} catch (error) {
		console.error(error);
	}
};