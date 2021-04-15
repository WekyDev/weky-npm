class ShuffleGuess {
        /**
         * @name ShuffleGuess
         * @kind constructor
         * @param {Object} options options
         * @param {any} [options.message] message
         * @param {any} [options.word] word
         * @param {any} [options.winMessage] win message
         */
        constructor(options) {
            if(!options.word) throw new TypeError('Missing argument: word')
            if(typeof options.word !== 'string') throw new TypeError('Word must be in a string')
            if(!options.winMessage) throw new TypeError('Missing argument: winMessage')
            if(typeof options.winMessage !== 'string') throw new TypeError('winMessage must be in a string')
            if(!options.message) throw new TypeError('Missing argument: message')
        
            this.message = options.message;
            this.word = options.word
            this.winMessage = options.winMessage
        }
        async start() {
            const uuid = '0101'
            const fetch = require('node-fetch')
            const res = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${encodeURIComponent(this.word)}&uid=${uuid}`))).json();
            await this.message.channel.send(`I shuffled a word, it is \`${res.result}\`\nOptions: \`cancel\`,\`reshuffle\`, \`real word\``)
              const gameFilter = m => m.author.id
              const gameCollector = this.message.channel.createMessageCollector(gameFilter);
          
              gameCollector.on('collect', async msg => {
                if(msg.author.bot) return
                    const selection = msg.content.toLowerCase();
        if (selection === this.word) {
        this.message.reply(this.winMessage)
        gameCollector.stop()
                    } else if (selection === 'cancel') {
                      this.message.channel.send(`Successfully stopped the game.`)
                      gameCollector.stop();
                    } else if(selection === 'reshuffle'){
                        const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${encodeURIComponent(this.word)}&uid=${uuid}`))).json();
                        this.message.channel.send(`I reflushed , it is \`${ress.result}\`\nOptions: \`cancel\`,\`reshuffle\`, \`real word\``)
                    } else if (selection !== this.word) {
                      this.message.reply(`Wrong\nOptions: \`cancel\`,\`reshuffle\`, \`real word\``)
                    }
              });
        }
    }
    
    module.exports = ShuffleGuess;
    