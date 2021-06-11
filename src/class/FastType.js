class fasttype {
    /**
     * @name fasttype
     * @kind constructor
     * @param {Object} options options
     * @param {String} [options.loseMessage] message sent when a user loses
     * @param {any} [options.message] the discord message
     * @param {String} [options.winMessage] message sent when a user wins 
     * @param {String} [options.sentence] a setence to be typed
     * @param {Number} [options.time] time the user has in ms
     * @param {String} [options.startMessage] message sent when a user starts playing
     */

    constructor(options) {
        if(!options.loseMessage) throw new TypeError('Weky Error: Missing argument loseMessage');
        if(typeof options.loseMessage !== 'string') throw new TypeError('Weky Error: loseMessage must be a string');

        if(!options.message) throw new TypeError('Weky Error: Missing argument message');

        if(!options.winMessage) throw new TypeError('Weky Error: Missing argument winMessage');
        if(typeof options.winMessage !== 'string') throw new TypeError('Weky Error: winMessage must be a string');

        if(!options.sentence) throw new TypeError('Weky Error: Missing argument sentence');
        if(typeof options.sentence !== 'string') throw new TypeError('Weky Error: sentence must be a string');

        if(!options.time) throw new TypeError('Weky Error: Missing argument time');
        if(typeof options.time !== 'number') throw new TypeError('Weky Error: time must be a number')
        
        if(!options.startMessage) throw new TypeError('Weky Error: Missing argument startMessage');
        if(typeof options.startMessage !== 'string') throw new TypeError('Weky Error: startMessage must be a string');

        this.message = options.message;
        this.winMessage = options.winMessage;
        this.sentence = options.sentence;
        this.loseMessage = options.loseMessage;
        this.time = options.time;
        this.startMessage = options.startMessage;
    }
    
    async start() {
        const inGame = new Set();
        const ms = require('ms');
        const filter = m => m.author.id === this.message.author.id;
        if (inGame.has(this.message.author.id)) return;
        inGame.add(this.message.author.id);
        var i;
        for (i = 0; i < 25; i++) {
            const time = Date.now();
            let sentence = '';
            let ogSentence = this.sentence.toLowerCase();
            ogSentence.split(' ').forEach(argument => {
                sentence += '`' + argument.split('').join(' ') + '` '
            });
            this.message.reply(this.startMessage + ` **(You have ${ms(this.time, {long: true})} !)**:\n${sentence}`)
            try {
                var msg = await this.message.channel.awaitMessages(filter, {
                    max: 1,
                    time: this.time,
                    errors: ['time']
                });
            } catch (ex) {
                this.message.reply('Time\'s up!')
                inGame.delete(this.message.author.id)
                break
            }
            if (['cancel', 'end'].includes(msg.first().content.toLowerCase().trim())) {
                this.message.channel.send('Ended!')
                inGame.delete(this.message.author.id)
                break
            } else if (msg.first().content.toLowerCase().trim() === this.sentence.toLowerCase()) {
                this.message.channel.send(this.winMessage+`\nIt took you ${ms(Date.now() - time, {long: true})}!`)
                break;
            } else {
                this.message.channel.send(this.loseMessage)
                inGame.delete(this.message.author.id)
                break
            }
            if (i === 25) {
                this.message.reply(this.winMessage)
                inGame.delete(this.message.author.id)
                break
            }
        }
    }
}

module.exports = fasttype;
