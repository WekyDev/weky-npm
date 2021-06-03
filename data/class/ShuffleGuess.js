class ShuffleGuess {

        /**
     * @name ShuffleGuess
     * @kind constructor
     * @param {Object} options options
     * @param {String} [options.word] wordd to be guessed
     * @param {String} [options.colorReshuffleButton] color of the reshuffle button
     * @param {String} [options.messageReshuffleButton] text of the reshuffle button
     * @param {any} [options.message] the discord message
     * @param {any} [options.client] the discord client
     * @param {String} [options.colorCancelButton] color of the cancle button
     * @param {String} [options.messageCancelButton] text of the reshuffle button
     * @param {String} [options.winMessage] message sent when a user wins
    */

  constructor(options) {
      if(!options.word) throw new TypeError('Weky Error: Missing argument word')
      if(typeof options.word !== 'string') throw new TypeError('Weky Error: word must be a string')
      
      if(!options.colorReshuffleButton) throw new TypeError('Weky Error: Missing argument colorReshuffleButton')
      if(typeof options.colorReshuffleButton !== 'string') throw new TypeError('Weky Error: colorReshuffleButton must be a string')
      
      if(!options.messageReshuffleButton) throw new TypeError('Weky Error: Missing argument messageReshuffleButton')
      if(typeof options.messageReshuffleButton !== 'string') throw new TypeError('Weky Error: messageReshuffleButton must be a string')
                  
      if(!options.colorCancelButton) throw new TypeError('Weky Error: Missing argument colorCancelButton')
      if(typeof options.colorCancelButton !== 'string') throw new TypeError('Weky Error: colorCancelButton must be a string')
      
      if(!options.messageCancelButton) throw new TypeError('Weky Error: Missing argument messageCancelButton')
      if(typeof options.messageCancelButton !== 'string') throw new TypeError('Weky Error: messageCancelButton must be a string')

      if(!options.winMessage) throw new TypeError('Weky Error: Missing argument winMessage')
      if(typeof options.winMessage !== 'string') throw new TypeError('Weky Error: winMessage must be a string')
      
      if(!options.client) throw new TypeError('Weky Error: Missing argument client')
      
      if(!options.message) throw new TypeError('Weky Error: Missing argument message')
      
      function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    let id1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
    let id2 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      this.message = options.message;
      this.word = options.word
      this.winMessage = options.winMessage
      this.colorReshuffleButton = options.colorReshuffleButton
      this.messageReshuffleButton = options.messageReshuffleButton
      this.idReshuffleButton = id1
      this.idCancelButton = id2
      this.messageCancelButton = options.messageCancelButton
      this.colorCancelButton = options.colorCancelButton
      this.client = options.client
  }
  async start() {

      const uuid = '0101'
      const fetch = require('node-fetch')
      const res = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${encodeURIComponent(this.word)}&uid=${uuid}`))).json();
      const { MessageButton, MessageActionRow } = require('discord-buttons')
      const gameFilter = m => m.author.id
        const gameCollector = this.message.channel.createMessageCollector(gameFilter);
           let disbut = new MessageButton()
          .setLabel(this.messageReshuffleButton)
          .setID(this.idReshuffleButton)
          .setStyle(this.colorReshuffleButton)
          let cancel = new MessageButton()
          .setLabel(this.messageCancelButton)
          .setID(this.idCancelButton)
          .setStyle(this.colorCancelButton)
          let row = new MessageActionRow()
          .addComponent(disbut)
          .addComponent(cancel)
          let v = await this.message.channel.send(
          `I shuffled a word, it is \`${res.result}\`\nType something to unlock the buttons!`,
          {component: row}
          )
        gameCollector.on('collect', async msg => {
          if(msg.author.bot) return;

if(msg.author.id !== this.message.author.id) return
this.client.on('clickButton', async btn => {
  if(btn.clicker.member.id !== this.message.author.id) return
  if(btn.id === this.idReshuffleButton){
    btn.defer()
const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${encodeURIComponent(this.word)}&uid=${uuid}`))).json();
v.edit(`I **re**flushed , it is \`${ress.result}\``,{component: row})
  }
  if(btn.id === this.idCancelButton){
    btn.defer()
    gameCollector.stop()
      disbut = new MessageButton()
     .setLabel(this.messageReshuffleButton)
     .setID(this.idReshuffleButton)
     .setStyle(this.colorReshuffleButton)
     .setDisabled()
      cancel = new MessageButton()
     .setLabel(this.messageCancelButton)
     .setID(this.idCancelButton)
     .setStyle(this.colorCancelButton)
     .setDisabled()
     v.edit(
       `Successfully stopped the game. Word was \`${this.word}\``,
       {component: row}
       )

  }
})
  const selection = msg.content.toLowerCase();
  if (selection === this.word) {
  msg.reply(this.winMessage)
  gameCollector.stop()
     disbut = new MessageButton()
    .setLabel(this.messageReshuffleButton)
    .setID(this.idReshuffleButton)
    .setStyle(this.colorReshuffleButton)
    .setDisabled()
     cancel = new MessageButton()
    .setLabel(this.messageCancelButton)
    .setID(this.idCancelButton)
    .setStyle(this.colorCancelButton)
    .setDisabled()
    v.edit(
      `I shuffled a word, it is \`${res.result}\``,
      {component: row}
      )
  } else if (selection !== this.word) {
  msg.reply(`Wrong`).then((me) => me.delete({ timeout: 2000 }))
  }
        });
  }

}

module.exports = ShuffleGuess;
