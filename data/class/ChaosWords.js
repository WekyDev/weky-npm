class ChaosWords {

    constructor(options) {
        if(!options.words) throw new TypeError('Missing argument: words')
        if(typeof options.words !== 'object') throw new TypeError('words must be array')
        
        if(!options.maxTries) throw new TypeError('Missing argument: maxTries')
        if(typeof options.maxTries !== 'number') throw new TypeError('maxTries must be number')

        if(!options.charGenerated) throw new TypeError('Missing argument: charGenerated')
        if(typeof options.charGenerated !== 'number') throw new TypeError('charGenerated must be number')

        if(!options.embedFooter) throw new TypeError('Missing argument: embedFooter')
        if(typeof options.embedFooter !== 'string') throw new TypeError('embedFooter must be number')

        if(!options.embedTitle) throw new TypeError('Missing argument: embedTitle')
        if(typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be number')

        if(!options.embedColor) throw new TypeError('Missing argument: embedColor')
        if(typeof options.embedColor !== 'string') throw new TypeError('embedColor must be number')

        if(!options.message) throw new TypeError('Missing argument: message')

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