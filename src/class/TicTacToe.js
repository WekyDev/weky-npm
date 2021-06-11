class TicTacToe {

      /**
     * @name TicTacToe
     * @kind constructor
     * @param {Object} options options
     * @param {String} [options.xEmoji] x emoji
     * @param {any} [options.message] the discord message
     * @param {String} [options.xColor] x button color
     * @param {String} [options.oEmoji] o emoji
     * @param {String} [options.oColor] o button color
     * @param {any} [options.opponent] const opponent = <Message>.mentions.members.first() (NOT CHANGEABLE)
     */

    constructor(options) {
      if(!options.xEmoji) throw new TypeError('Missing argument: xEmoji')
      if(typeof options.xEmoji !== 'string') throw new TypeError('Weky Error: xEmoji must be a string')

      if(!options.oEmoji) throw new TypeError('Missing argument: oEmoji')
      if(typeof options.oEmoji !== 'string') throw new TypeError('Weky Error: oEmoji must be a string')

      if(!options.xColor) throw new TypeError('Missing argument: xColor')
      if(typeof options.xColor !== 'string') throw new TypeError('Weky Error: xColor must be a string')

      if(!options.oColor) throw new TypeError('Missing argument: oColor')
      if(typeof options.oColor !== 'string') throw new TypeError('Weky Error: oColor must be a string')

      if(!options.opponent) throw new TypeError('Weky Error: Missing argument opponent')

      if(!options.message) throw new TypeError('Weky Error: Missing argument message')

      this.message = options.message;
      this.xEmoji = options.xEmoji
      this.oEmoji = options.oEmoji
      this.opponent = options.opponent
      this.xColor = options.xColor
      this.oColor = options.oColor
    }
    async start() {
      let a1 = '⬜'
      let a2 = '⬜'
      let a3 = '⬜'
      let b1 = '⬜'
      let b2 = '⬜'
      let b3 = '⬜'
      let c1 = '⬜'
      let c2 = '⬜'
      let c3 = '⬜'
      
      function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
      }
      let a11 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let a22 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let a33 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let b11 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let b22 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let b33 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let c11 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let c22 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      let c33 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      
      let player = 0;
      const author = this.message.author.id 
      const member = this.opponent
      const authorName = this.message.author.username 
      
      const midDuel = new Set()
                
      if (midDuel.has(author)) { 
          return this.message.channel.send(`You're currently in a duel`)
      } else if (midDuel.has(member.id)) { 
          return this.message.channel.send(`<@${member.id}> is currently in a duel`)
      } if (member.id === this.message.client.user.id) { 
          return this.message.channel.send("You can't duel me lmfao")
      }
      const gameData = [
        { member: this.message.author, em: this.xEmoji, color: this.xColor },
        { member: member, em: this.oEmoji, color: this.oColor }
      ];
      const Discord = require('discord.js')
      let Embed = new Discord.MessageEmbed()
      .setDescription(`🎮 ${authorName} VS ${this.opponent.username} 🎮`)
      .setColor(3426654)
      const dis = require('discord-buttons')
      let A1 = new dis.MessageButton()
      .setID(a11)
      .setStyle('gray')
      .setLabel('~')
      let A2 = new dis.MessageButton()
      .setID(a22)
      .setStyle('gray')
      .setLabel('~')
      let A3 = new dis.MessageButton()
      .setID(a33)
      .setStyle('gray')
      .setLabel('~')
      let B1 = new dis.MessageButton()
      .setID(b11)
      .setStyle('gray')
      .setLabel('~')
      let B2 = new dis.MessageButton()
      .setID(b22)
      .setStyle('gray')
      .setLabel('~')
      let B3 = new dis.MessageButton()
      .setID(b33)
      .setStyle('gray')
      .setLabel('~')
      let C1 = new dis.MessageButton()
      .setID(c11)
      .setStyle('gray')
      .setLabel('~')
      let C2 = new dis.MessageButton()
      .setID(c22)
      .setStyle('gray')
      .setLabel('~')
      let C3 = new dis.MessageButton()
      .setID(c33)
      .setStyle('gray')
      .setLabel('~')
      this.message.channel.send({
        embed: Embed,
        components: [
            {type: 1, components: [
      A1, A2, A3
            ]},
            {type: 1, components: [
      B1, B2, B3
            ]},
            {type: 1, components: [
      C1, C2, C3
            ]},
        ]
      }).then( async (msg) => {
      midDuel.add(author)
      midDuel.add(member.id)
      const gameFilter = m => m.clicker.user.id === this.message.author.id || m.clicker.user.id === this.opponent.id

      const gameCollector = msg.createButtonCollector(gameFilter);


      
              gameCollector.on('collect', async btn => {
                if(btn.id == a11 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    a1 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    A1 = new dis.MessageButton()
                    .setID(a11)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == a22 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    a2 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                              }catch(e){
                    console.log(e)
                  }     
                  player = (player + 1) % 2;
                 A2 = new dis.MessageButton()
                    .setID(a22)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == a33 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    a3 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }  
                  player = (player + 1) % 2;             
                   A3 = new dis.MessageButton()
                    .setID(a33)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == b11 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
      
                  try{
                    b1 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    B1 = new dis.MessageButton()
                    .setID(b11)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == b22 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    b2 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    B2 = new dis.MessageButton()
                    .setID(b22)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == b33 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    b3 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    B3 = new dis.MessageButton()
                    .setID(b33)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == c11 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    c1 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    C1 = new dis.MessageButton()
                    .setID(c11)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
      
                }
                }else if(btn.id == c22 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    c2 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }                  }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    C2 = new dis.MessageButton()
                    .setID(c22)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
                  
                }
                }else if(btn.id == c33 && gameData[player].member.id === btn.clicker.user.id){
                  btn.defer()
                  if (btn.label == this.oEmoji || btn.label == this.xEmoji) { // User tries to place at an already claimed spot
                    btn.reply.send('That spot is already occupied.')
                  } else {
                  try{
                    c3 = gameData[player].em
                    if (a1 == this.xEmoji && b1 == this.xEmoji && c1 == this.xEmoji || a1 == this.oEmoji && b1 == this.oEmoji && c1 == this.oEmoji) {
                      this.message.channel.send(`${gameData[player].member} wins!`)
                      gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a2 == this.xEmoji && b2 == this.xEmoji && c2 == this.xEmoji || a2 == this.oEmoji && b2 == this.oEmoji && c2 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b3 == this.xEmoji && c3 == this.xEmoji || a3 == this.oEmoji && b3 == this.oEmoji && c3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && a2 == this.xEmoji && a3 == this.xEmoji || a1 == this.oEmoji && a2 == this.oEmoji && a3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (b1 == this.xEmoji && b2 == this.xEmoji && b3 == this.xEmoji || b1 == this.oEmoji && b2 == this.oEmoji && b3 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (c1 == this.xEmoji && c2 == this.xEmoji && c3 == this.xEmoji || c1 == this.oEmoji && c2 == this.oEmoji && c3 == this.oEmoji) {
                      player = (player + 1) % 2;
                      this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                      } else if (a1 == this.xEmoji && b2 == this.xEmoji && c3 == this.xEmoji || a1 == this.oEmoji && b2 == this.oEmoji && c3 == this.oEmoji) {
                      
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      } else if (a3 == this.xEmoji && b2 == this.xEmoji && c1 == this.xEmoji || a3 == this.oEmoji && b2 == this.oEmoji && c1 == this.oEmoji) {
                        this.message.channel.send(`${gameData[player].member} wins!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }else if(a1 !== '⬜' && a2 !== '⬜' && a3 !== '⬜' && b1 !== '⬜' && b2 !== '⬜' && b3 !== '⬜' && c1 !== '⬜' && c2 !== '⬜' && c3 !== '⬜'){
                        this.message.channel.send(`Tie!`)
                        gameCollector.stop()
                      midDuel.delete(author)
                      midDuel.delete(member.id)
                      }
                     }catch(e){
                    console.log(e)
                  }
                  player = (player + 1) % 2;
                    C3 = new dis.MessageButton()
                    .setID(c33)
                    .setStyle(gameData[player].color)
                    .setEmoji(gameData[player].em)
                    .setDisabled()
                    msg.edit({
                      embed: Embed,
                      components: [
                          {type: 1, components: [
                  A1, A2, A3
                          ]},
                          {type: 1, components: [
                  B1, B2, B3
                          ]},
                          {type: 1, components: [
                  C1, C2, C3
                          ]},
                      ]
                  })
                }
              }else {
                return btn.reply.send('Wait for opponent.', true)
              }
                
      
            })
          
        })
    }
  
  }
  
  module.exports = TicTacToe;