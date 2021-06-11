class ChaosWords {

    /**
     * @name ChaosWords
     * @kind constructor
     * @param {Object} options options
     * @param {object} [options.words] words (array) => ['word'] 
     * @param {any} [options.message] the discord message
     * @param {number} [options.maxTries] the number of max tries
     * @param {number} [options.charGenerated] length of the sentence (small lenght might cause errors) 
     * @param {string} [options.embedFooter] footer of the embed 
     * @param {string} [options.embedTitle] title of the embed
     * @param {string} [options.embedColor] color of embed 
    */

    constructor(options) {
        if(!options.words) throw new TypeError('Weky Error: Missing argument words')
        if(typeof options.words !== 'object') throw new TypeError('Weky Error: words must be an array')
        
        if(!options.maxTries) throw new TypeError('Weky Error: Missing argument maxTries')
        if(typeof options.maxTries !== 'number') throw new TypeError('Weky Error: maxTries must be a number')

        if(!options.charGenerated) throw new TypeError('Weky Error: Missing argument charGenerated')
        if(typeof options.charGenerated !== 'number') throw new TypeError('Weky Error: charGenerated must be a number')

        if(!options.embedFooter) throw new TypeError('Weky Error: Missing argument embedFooter')
        if(typeof options.embedFooter !== 'string') throw new TypeError('Weky Error: embedFooter must be a string')

        if(!options.embedTitle) throw new TypeError('Weky Error: Missing argument embedTitle')
        if(typeof options.embedTitle !== 'string') throw new TypeError('Weky Error: embedTitle must be a string')

        if(!options.embedColor) throw new TypeError('Weky Error: Missing argument embedColor')
        if(typeof options.embedColor !== 'string') throw new TypeError('Weky Error: embedColor must be a string')

        if(!options.message) throw new TypeError('Weky Error: Missing argument message')

        this.message = options.message;
        this.words = options.words
        this.maxTries = options.maxTries
        this.charGenerated = options.charGenerated
        this.RESULT = ''
        this.embedFooter = options.embedFooter
        this.embedTitle = options.embedTitle
        this.embedColor = options.embedColor
    }
    async start() {
        let r = 0
        let tries = 0
        let b = this.words
            var array = []
                    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
                for ( var i = 0; i < this.charGenerated; i++ ) {
            
            array.push(randomChars.charAt(Math.floor(Math.random() * randomChars.length)))
                    }
            b.forEach((e) => {
            array.splice(Math.floor(Math.random() * array.length), 0, e)
            })
            if(b.length > this.charGenerated) throw new Error('Weky Error: Array has more characters than length')
            const dicord = require('discord.js')
            

            this.message.reply(new dicord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setDescription(array.join(''))
            .setFooter(this.embedFooter)
            .setColor(this.embedColor)).then(async (mes) => {
    
            const filter = m => m.author.id === this.message.author.id

            var game = await this.message.channel.createMessageCollector(filter)
            game.on('collect', async msg => {
                
            if(b.includes(msg.content.toLowerCase())){
                r++
    let pos = array.indexOf(msg.content.toLowerCase())
    array.splice(pos, 1)
    array.splice(pos, 0, '**'+msg.content.toLowerCase()+'**')
                mes.edit((new dicord.MessageEmbed()
                .setTitle(this.embedTitle)
                .setDescription(array.join(''))
                .setFooter(this.embedFooter)
                .setColor(this.embedColor)))
                let wordsRemaining = (r)+'/'+b.length
                this.message.reply('Word found! `' + msg.content.toLowerCase() + `\` ` 
                + wordsRemaining)
                if(r === b.length){
                    this.RESULT = 'win'
                    game.stop()
                }
            }else if(['cancel', 'end', 'stop'].includes(msg.content.toLowerCase())){
                game.stop()
                msg.reply('Ended...')
            }else{
                tries++
                let triesLeft = this.maxTries-tries
                this.message.reply('Wrong! You have `'+triesLeft +'` more tries.').then((m) => m.delete({timeout: 1000}))
    
                if(tries === this.maxTries){
                    this.RESULT = 'lose'
                    game.stop()
                }
            }
        })
        })
        return this.RESULT
    }

}

module.exports = ChaosWords;