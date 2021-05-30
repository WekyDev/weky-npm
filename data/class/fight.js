class fight {

  constructor(options) {
    if(!options.acceptMessage) throw new Error('Weky Error: Missing argument acceptMessage');
    if(typeof options.acceptMessage !== 'string') throw new Error('Weky Error: Accept message must be a string');
    
    if(!options.hitButtonText) throw new TypeError('Weky Error: Missing argument hitButtonText');
    if(typeof options.hitButtonText !== 'string') throw new Error('Weky Error: hitButtonText must be in a string');
    
    if(!options.hitButtonColor) throw new TypeError('Weky Error: Missing argument hitButtonColor');
    if(typeof options.hitButtonColor !== 'string') throw new Error('Weky Error: hitButtonColor must be in a string');
    
    if(!options.healButtonText) throw new TypeError('Weky Error: Missing argument healButtonText');
    if(typeof options.healButtonText !== 'string') throw new Error('Weky Error: healButtonText must be in a string');
    
    if(!options.healButtonColor) throw new TypeError('Weky Error: Missing argument healButtonColor');
    if(typeof options.healButtonColor !== 'string') throw new Error('Weky Error: healButtonColor must be in a string');
    
    if(!options.cancelButtonText) throw new TypeError('Weky Error: Missing argument cancelButtonText');
    if(typeof options.cancelButtonText !== 'string') throw new Error('Weky Error: cancelButtonText must be in a string');
    
    if(!options.cancelButtonColor) throw new TypeError('Weky Error: Missing argument cancelButtonColor');
    if(typeof options.cancelButtonColor !== 'string') throw new Error('Weky Error: cancelButtonColor must be in a string');
    
    if(!options.message) throw new Error('Weky Error: Missing argument message');
    
    if(!options.client) throw new Error('Weky Error: Missing argument client');
    
    if(!options.challenger) throw new Error('Missing argument: challenger');
    
    if(!options.opponent) throw new Error('Weky Error: Missing argument opponent');
    function getRandomString(length) {
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var result = '';
      for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      return result;
    }
    let id1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4));
    let id2 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4));
    let id3 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4));
    
    this.message = options.message;
    this.acceptMessage = options.acceptMessage;
    this.client = options.client;
    this.challenger = options.challenger;
    this.opponent = options.opponent;
    this.heal = id1;
    this.cancel = id2;
    this.hit = id3;
    this.hitButtonText = options.hitButtonText;
    this.hitButtonColor = options.hitButtonColor;
    this.healButtonText = options.healButtonText;
    this.healButtonColor = options.healButtonColor;
    this.cancelButtonText = options.cancelButtonText;
    this.cancelButtonColor = options.cancelButtonColor;
  }
  
  async start() {
    const challenger = this.challenger;
    const oppenent = this.opponent;
    const question = await this.message.channel.send(this.acceptMessage);
    
    ['✅', '❌'].forEach(async el => await question.react(el));
    
    const filter = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === this.opponent.id;
  
    const response = await question.awaitReactions(filter, { max: 1, time: 60000 });
    const reaction = response.first();
    if(oppenent.bot) return this.message.channel.send("You can't fight bots.");
    if(oppenent.id === challenger.id) return this.message.channel.send("You can't fight yourself.");
    if (reaction.emoji.name === '❌') { return question.edit("Cancelled this fight."); } else {
      const challengerHealth = 100;
      const oppenentHealth = 100;
    
      const challengerLastAttack = 'heal';
      const oppenentLastAttack = 'heal';
    
      const gameData = [
        { member: challenger, health: challengerHealth, lastAttack: challengerLastAttack },
        { member: oppenent, health: oppenentHealth, lastAttack: oppenentLastAttack }
      ];
    
      let player = 0;
    
      const checkHealth = (member) => {
        if (gameData[member].health <= 0) return true;
        else return false;
      };
      const { MessageButton } = require('discord-buttons');
      let btn1 = new MessageButton()
        .setLabel(this.hitButtonText)
        .setID(this.hit)
        .setStyle(this.hitButtonColor);
      let btn2 = new MessageButton()
        .setLabel(this.healButtonText)
        .setID(this.heal)
        .setStyle(this.healButtonColor);
      let btn3 = new MessageButton()
        .setLabel(this.cancelButtonText)
        .setID(this.cancel)
        .setStyle(this.cancelButtonColor);

      let DaBaby = await this.message.channel.send(`${challenger}, you go first`, {buttons: [btn1, btn2, btn3]});
      const gameFilter = m => m.clicker.user.id === challenger.id || m.clicker.user.id === oppenent.id;
      const gameCollector = DaBaby.createButtonCollector(gameFilter);
    
      gameCollector.on('collect', msg => {
          if (msg.clicker.member.id === gameData[player].member.id) {
            if (!checkHealth(player)) {
              const btn = msg.clicker.member;
    
              if (msg.id === this.hit) {
                msg.defer();
                if(btn.id !== gameData[player].member.id) return msg.reply.send(gameData[player].member + 'please wait for enemy\'s move...', true);
                let randNumb = Math.floor(Math.random() * (60 - 12) + 12);
                const tempPlayer = (player + 1) % 2;
                if (gameData[tempPlayer].lastAttack === 'heal') randNumb = Math.floor(randNumb / 2);
                gameData[tempPlayer].health -= randNumb;
                gameData[player].lastAttack = 'attack';
                if (gameData[player].member.id == this.message.author.id) {
                  DaBaby.edit(`(hitted) ${gameData[player].member.username} — ${gameData[player].health} HP                     VS                     **${gameData[tempPlayer].member.username}** — ${gameData[tempPlayer].health}`, {buttons: [btn1, btn2, btn3]});
                } else if (gameData[player].member.id == this.opponent.id) {
                  DaBaby.edit(`**${gameData[tempPlayer].member.username}** — ${gameData[tempPlayer].health} HP                              VS                              **${gameData[player].member.username}** — ${gameData[player].health} (hitted)`, {buttons: [btn1, btn2, btn3]});
                }
                player = (player + 1) % 2;
              } else if (msg.id === this.heal) {
                
                msg.defer();
                if (btn.id !== gameData[player].member.id) return msg.reply.send(gameData[player].member + 'please wait for enemy\'s move...', true);

                let randrNumb = Math.floor(Math.random() * (20 - 12) + 12);
                const tempPlayer = (player + 1) % 2;
                if (gameData[tempPlayer].lastAttack === 'heal') randrNumb = Math.floor(randrNumb / 2);
                gameData[player].health += randrNumb;
                gameData[player].lastAttack = 'attack';
                if (gameData[player].member.id == this.message.author.id) {
                  DaBaby.edit(`(healed) ${gameData[player].member.username} — ${gameData[player].health} HP                     VS                     **${gameData[tempPlayer].member.username}** — ${gameData[tempPlayer].health}`, {buttons: [btn1, btn2, btn3]});
                } else if (gameData[player].member.id == this.opponent.id) {
                  DaBaby.edit(`**${gameData[tempPlayer].member.username}** — ${gameData[tempPlayer].health} HP                              VS                              **${gameData[player].member.username}** — ${gameData[player].health} (healed)`, {buttons: [btn1, btn2, btn3]});
                }
                player = (player + 1) % 2;
              } else if (msg.id === this.cancel) {

                msg.defer();
                if(btn.id !== gameData[player].member.id) return msg.reply.send(gameData[player].member + 'please wait for enemy\'s move...', true);
                btn1 = new MessageButton()
                  .setLabel(this.hitButtonText)
                  .setID(this.hit)
                  .setStyle(this.hitButtonColor)
                  .setDisabled();
                btn2 = new MessageButton()
                  .setLabel(this.healButtonText)
                  .setID(this.heal)
                  .setStyle(this.healButtonColor)
                  .setDisabled();
                btn3 = new MessageButton()
                  .setLabel(this.cancelButtonText)
                  .setID(this.cancel)
                  .setStyle(this.cancelButtonColor)
                  .setDisabled();
                gameCollector.stop();
                DaBaby.edit(`Game stopped.`, {buttons: [btn1, btn2, btn3]});
              }
    
              if (checkHealth(player)) {
                msg.defer();
                btn1 = new MessageButton()
                  .setLabel(this.hitButtonText)
                  .setID(this.hit)
                  .setStyle(this.hitButtonColor)
                  .setDisabled();
                 btn2 = new MessageButton()
                  .setLabel(this.healButtonText)
                  .setID(this.heal)
                  .setStyle(this.healButtonColor)
                  .setDisabled();
                 btn3 = new MessageButton()
                  .setLabel(this.cancelButtonText)
                  .setID(this.cancel)
                  .setStyle(this.cancelButtonColor)
                  .setDisabled();
                gameCollector.stop();
                const tempPlayer = (player + 1) % 2;
                DaBaby.edit(`🏆 ${gameData[tempPlayer].member} has won the game!`, {buttons: [btn1, btn2, btn3]});
              }
            } else {
                msg.defer();
                btn1 = new MessageButton()
                  .setLabel(this.hitButtonText)
                  .setID(this.hit)
                  .setStyle(this.hitButtonColor)
                  .setDisabled();
                btn2 = new MessageButton()
                  .setLabel(this.healButtonText)
                  .setID(this.heal)
                  .setStyle(this.healButtonColor)
                  .setDisabled();
                btn3 = new MessageButton()
                  .setLabel(this.cancelButtonText)
                  .setID(this.cancel)
                  .setStyle(this.cancelButtonColor)
                  .setDisabled();
                gameCollector.stop();
                const tempPlayer = (player + 1) % 2;
                DaBaby.edit(`🏆 ${gameData[tempPlayer].member} has won the game!`, {buttons: [btn1, btn2, btn3]});
            }
          }
        });
      }   
  }
}

module.exports = fight;
