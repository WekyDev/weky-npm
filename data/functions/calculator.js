module.exports = async (message) => {
    if (!message) throw new TypeError("Weky Error: Missing argument message");
    const {
        MessageButton
    } = require('discord-buttons')

    function i(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result;
    }

    // Button ID generator
    let str = ' '
    let stringify = '```\n' + str + '\n```'
    let calculator_clear = i(20)
    let calculator_e1 = i(20)
    let calculator_e2 = i(20)
    let calculator_uppercase = i(20)
    let calculator_7 = i(20)
    let calculator_8 = i(20)
    let calculator_9 = i(20)
    let calculator_plus = i(20)
    let calculator_minus = i(20)
    let calculator_star = i(20)
    let calculator_devide = i(20)
    let calculator_1 = i(20)
    let calculator_2 = i(20)
    let calculator_3 = i(20)
    let calculator_4 = i(20)
    let calculator_5 = i(20)
    let calculator_0 = i(20)
    let calculator_6 = i(20)
    let calculator_dot = i(20)
    let calculator_equal = i(20)
    let calculator_backspace = i(20)
    let calc_irrc = i(20)
    let empty_irrc = i(20)
    // Buttons
    let ac = new MessageButton().setLabel('AC').setID(calculator_clear).setStyle('red')
    let e1 = new MessageButton().setLabel('(').setID(calculator_e1).setStyle('gray')
    let e2 = new MessageButton().setLabel(')').setID(calculator_e2).setStyle('gray')
    let uppercase = new MessageButton().setLabel('^').setID(calculator_uppercase).setStyle('gray')
    let seven = new MessageButton().setLabel('7️').setID(calculator_7).setStyle('gray')
    let eight = new MessageButton().setLabel('8️').setID(calculator_8).setStyle('gray')
    let nine = new MessageButton().setLabel('9️').setID(calculator_9).setStyle('gray')
    let slash = new MessageButton().setLabel('÷').setID(calculator_devide).setStyle('gray')
    let four = new MessageButton().setLabel('4️').setID(calculator_4).setStyle('gray')
    let five = new MessageButton().setLabel('5️').setID(calculator_5).setStyle('gray')
    let six = new MessageButton().setLabel('6️').setID(calculator_6).setStyle('gray')
    let star = new MessageButton().setLabel('x').setID(calculator_star).setStyle('gray')
    let one = new MessageButton().setLabel('1️').setID(calculator_1).setStyle('gray')
    let two = new MessageButton().setLabel('2️').setID(calculator_2).setStyle('gray')
    let three = new MessageButton().setLabel('3️').setID(calculator_3).setStyle('gray')
    let minus = new MessageButton().setLabel('-').setID(calculator_minus).setStyle('gray')
    let zero = new MessageButton().setLabel('0️').setID(calculator_0).setStyle('gray')
    let dot = new MessageButton().setLabel('.').setID(calculator_dot).setStyle('gray')
    let equal = new MessageButton().setLabel('=').setID(calculator_equal).setStyle('green')
    let plus = new MessageButton().setLabel('+').setID(calculator_plus).setStyle('gray')
    let backspace = new MessageButton().setLabel('Del').setID(calculator_backspace).setStyle('blurple')
    let destroy = new MessageButton().setLabel('DC').setID(calc_irrc).setStyle('red')
    let empty = new MessageButton().setLabel('\u200b').setID(empty_irrc).setStyle('gray').setDisabled()
    // Lock
    let qac = new MessageButton().setLabel('AC').setID(calculator_clear).setStyle('red').setDisabled()
    let qe1 = new MessageButton().setLabel('(').setID(calculator_e1).setStyle('gray').setDisabled()
    let qe2 = new MessageButton().setLabel(')').setID(calculator_e2).setStyle('gray').setDisabled()
    let quppercase = new MessageButton().setLabel('^').setID(calculator_uppercase).setStyle('gray').setDisabled()
    let qseven = new MessageButton().setLabel('7️').setID(calculator_7).setStyle('gray').setDisabled()
    let qeight = new MessageButton().setLabel('8️').setID(calculator_8).setStyle('gray').setDisabled()
    let qnine = new MessageButton().setLabel('9️').setID(calculator_9).setStyle('gray').setDisabled()
    let qslash = new MessageButton().setLabel('÷').setID(calculator_devide).setStyle('gray').setDisabled()
    let qfour = new MessageButton().setLabel('4️').setID(calculator_4).setStyle('gray').setDisabled()
    let qfive = new MessageButton().setLabel('5️').setID(calculator_5).setStyle('gray').setDisabled()
    let qsix = new MessageButton().setLabel('6️').setID(calculator_6).setStyle('gray').setDisabled()
    let qstar = new MessageButton().setLabel('x').setID(calculator_star).setStyle('gray').setDisabled()
    let qone = new MessageButton().setLabel('1️').setID(calculator_1).setStyle('gray').setDisabled()
    let qtwo = new MessageButton().setLabel('2️').setID(calculator_2).setStyle('gray').setDisabled()
    let qthree = new MessageButton().setLabel('3️').setID(calculator_3).setStyle('gray').setDisabled()
    let qminus = new MessageButton().setLabel('-').setID(calculator_minus).setStyle('gray').setDisabled()
    let qzero = new MessageButton().setLabel('0️').setID(calculator_0).setStyle('gray').setDisabled()
    let qdot = new MessageButton().setLabel('.').setID(calculator_dot).setStyle('gray').setDisabled()
    let qequal = new MessageButton().setLabel('=').setID(calculator_equal).setStyle('green').setDisabled()
    let qplus = new MessageButton().setLabel('+').setID(calculator_plus).setStyle('gray').setDisabled()
    let qbackspace = new MessageButton().setLabel('Del').setID(calculator_backspace).setStyle('blurple').setDisabled()
    let qdestroy = new MessageButton().setLabel('DC').setID(calc_irrc).setStyle('red').setDisabled()
    //----------------------------------------------------------------------
    try {
        const filter = m => m.clicker.user.id === message.author.id;
        message.channel.send(stringify, {
            components: [{
                    type: 1,
                    components: [
                        e1, e2, uppercase, backspace, ac
                    ]
                },
                {
                    type: 1,
                    components: [
                        seven, eight, nine, slash, destroy
                    ]
                },
                {
                    type: 1,
                    components: [
                        four, five, six, star, empty
                    ]
                },
                {
                    type: 1,
                    components: [
                        one, two, three, minus, empty
                    ]
                },
                {
                    type: 1,
                    components: [
                        dot, zero, equal, plus, empty
                    ]
                },
            ]
        }).then(async (msg) => {
            async function edit() {
                msg.edit(stringify, {
                    components: [{
                            type: 1,
                            components: [
                                e1, e2, uppercase, backspace, ac
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                seven, eight, nine, slash, destroy
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                four, five, six, star, empty
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                one, two, three, minus, empty
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                dot, zero, equal, plus, empty
                            ]
                        },
                    ]
                })
            }
            async function lock() {
                msg.edit(stringify, {
                    components: [{
                            type: 1,
                            components: [
                                qe1, qe2, quppercase, qbackspace, qac
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                qseven, qeight, qnine, qslash, qdestroy
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                qfour, qfive, qsix, qstar, empty
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                qone, qtwo, qthree, qminus, empty
                            ]
                        },
                        {
                            type: 1,
                            components: [
                                qdot, qzero, qequal, qplus, empty
                            ]
                        },
                    ]
                })
            }
            const calc = msg.createButtonCollector(filter)

            calc.on('collect', async btn => {
                if (btn.clicker.user.id !== message.author.id) {
                    btn.defer()
                }

                btn.defer()
                if (btn.id === calculator_1) {
                    str += '1'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_2) {
                    str += '2'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_3) {
                    str += '3'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_4) {
                    str += '4'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_5) {
                    str += '5'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_6) {
                    str += '6'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_7) {
                    str += '7'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_8) {
                    str += '8'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_9) {
                    str += '9'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_0) {
                    str += '0'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_plus) {
                    str += '+'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_minus) {
                    str += '-'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_devide) {
                    str += '/'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_uppercase) {
                    str += '^'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_star) {
                    str += '*'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_dot) {
                    str += '.'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_clear) {
                    str = ' '
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_e1) {
                    str += '('
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_e2) {
                    str += ')'
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_backspace) {
                    str = str.split('')
                    str.pop()
                    str = str.join('')
                    stringify = '```\n' + str + '\n```'
                    edit()
                } else if (btn.id === calculator_equal) {
                    try {
                        str += ' = ' + require('mathjs').evaluate(str) + ''
                        stringify = '```\n' + str + '\n```' || '```\n'
                        edit()
                        str = ''
                        stringify = '```\n' + str + '\n```'
                    } catch (e) {
                        str = 'Invalid Question Entered'
                        stringify = '```\n' + str + '\n```'
                        edit()
                        str = ''
                        stringify = '```\n' + str + '\n```'
                    }
                } else if (btn.id === calc_irrc) {
                    str = ' '
                    stringify = '```\n' + str + '\n```'
                    edit()

                    str += 'Calculator Destroyed'
                    stringify = '```\n' + str + '\n```'
                    edit()
                    calc.stop()
                    lock()
                }
            })
        })
    } catch (e) {
        console.log(`[Process ${process.pid}] [Cluster 0] [Calculator] Something went wrong with the Calculator!\n${e}`)
    }
}
