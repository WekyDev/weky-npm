class ShuffleGuess {

  constructor(options) {
      if(!options.word) throw new TypeError('Missing argument: word')
      if(typeof options.word !== 'string') throw new TypeError('Word must be in a string')
      
      if(!options.colorReshuffleButton) throw new TypeError('Missing argument: colorReshuffleButton')
      if(typeof options.colorReshuffleButton !== 'string') throw new TypeError('colorReshuffleButton must be in a string')
      
      if(!options.messageReshuffleButton) throw new TypeError('Missing argument: messageReshuffleButton')
      if(typeof options.messageReshuffleButton !== 'string') throw new TypeError('messageReshuffleButton must be in a string')
                  
      if(!options.colorCancelButton) throw new TypeError('Missing argument: colorCancelButton')
      if(typeof options.colorCancelButton !== 'string') throw new TypeError('colorCancelButton must be in a string')
      
      if(!options.messageCancelButton) throw new TypeError('Missing argument: messageCancelButton')
      if(typeof options.messageCancelButton !== 'string') throw new TypeError('messageCancelButton must be in a string')
      
      
      if(!options.client) throw new TypeError('Missing argument: client')
      
      if(!options.message) throw new TypeError('Missing argument: message')
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
const {MessageButton} = require('discord-buttons')
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
          let v = await this.message.channel.send(
          `I shuffled a word, it is \`${res.result}\`\nType something to unlock the buttons!`,
          {buttons: [disbut, cancel]}
          )
        gameCollector.on('collect', async msg => {
          if(msg.author.bot) return;

if(msg.author.id !== this.message.author.id) return
this.client.on('clickButton', async btn => {
  if(btn.clicker.member.id !== this.message.author.id) return
  if(btn.id === this.idReshuffleButton){
    btn.defer()
const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${encodeURIComponent(this.word)}&uid=${uuid}`))).json();
v.edit(`I **re**flushed , it is \`${ress.result}\``, {buttons: [disbut, cancel]})
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
       {buttons: [disbut, cancel]}
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
      {buttons: [disbut, cancel]}
      )
  } else if (selection !== this.word) {
  msg.reply(`Wrong`).then((me) => me.delete({ timeout: 2000 }))
  }
        });
  }

}

module.exports = ShuffleGuess;
