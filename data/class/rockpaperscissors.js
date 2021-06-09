class RPS {

    /**
     * @name RPS
     * @kind constructor
     * @param {Object} options options
     * @param {any} [options.message] the discord message
     * @param {any} [options.challenger] message.author (NOT CHANGEABLE)
     * @param {any} [options.opponent] const opponent = <Message>.mentions.users.first() (NOT CHANGEABLE)
     * @param {String} [options.acceptMessage] message sent to see if the opponent accepts
     */
    constructor(options) {
      
      if(!options.message) throw new Error('Weky Error: Missing argument message')

      if(!options.challenger) throw new Error('Weky Error: Missing argument challenger')

      if(!options.opponent) throw new Error('Weky Error: Missing arguemnt opponent')

      if(!options.acceptMessage) throw new Error('Weky Error: Missing argument acceptMessage')
      if(typeof options.acceptMessage !== 'string') throw new Error('Weky Error: acceptMessage must be a string')
      
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
      let id3 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
      
        this.message = options.message;
        this.challenger = options.challenger;
        this.opponent = options.opponent;
        this.acceptMessage = options.acceptMessage
        this.scissors = id1;
        this.rock = id2;
        this.paper = id3;
    
    }
    async start() {
        const { MessageButton, MessageActionRow } = require("discord-buttons");
        const { MessageEmbed } = require('discord.js');

        if(this.opponent.bot) return this.message.channel.send("You can't play against bots.")
        if(this.opponent.id === this.challenger.id) return this.message.channel.send("You can't play against yourself.")

        const question = await this.message.channel.send(this.acceptMessage);

        ['✅', '❌'].forEach(async aR => await question.react(aR));

        const filter = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === this.opponent.id;

        const response = await question.awaitReactions(filter, { max: 1, time: 60000 });

        const reaction = response.first();
        try {
            if(reaction.emoji.name === '❌') {
                return question.edit("Cancelled this game.");
            } else {
                let scissorsbtn = new MessageButton()
                .setID(this.scissors)
                .setLabel("Scissors")
                .setStyle("blurple")
                .setEmoji("✌️")
                let rockbtn = new MessageButton()
                .setID(this.rock)
                .setLabel("Rock")
                .setStyle("blurple")
                .setEmoji("🤜")
                let paperbtn = new MessageButton()
                .setID(this.paper)
                .setLabel("Paper")
                .setStyle("blurple")
                .setEmoji("✋")
                let row = new MessageActionRow()
                .addComponent(scissorsbtn)
                .addComponent(rockbtn)
                .addComponent(paperbtn)

                const msg = await this.message.channel.send("Please click **__one__** button!", { component: row })

                let cllChoice;
                let oppChoice;
                let cllChose;
                let oppChose;

                const filter = (button) => button.clicker.user.id === this.challenger.id || button.clicker.user.id === this.opponent.id;
                const collector = msg.createButtonCollector(filter, { time: 30000 })

                collector.on("collect", async(button) => {
                    if(button.clicker.user.id === this.challenger.id) {
                            cllChose = true
                            if(button.id === this.rock) {
                                cllChoice = "🤜"
                                button.reply.send("You chose 🤜", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })

                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
                                    
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            } else if(button.id === this.paper) {
                                cllChoice = "✋"
                                button.reply.send("You chose ✋", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })
            
                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
            
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            } else if(button.id === this.scissors) {
                                cllChoice = "✌️"
                                button.reply.send("You chose ✌️", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })

                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
            
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            }
                    }
                    if(button.clicker.user.id === this.opponent.id) {
                            oppChose = true
                            if(button.id === this.rock) {
                                oppChoice = "🤜"
                                button.reply.send("You chose 🤜", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })
            
                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
            
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            } else if(button.id === this.paper) {
                                oppChoice = "✋"
                                button.reply.send("You chose ✋", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })
            
                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
            
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            } else if(button.id === this.scissors) {
                                oppChoice = "✌️"
                                button.reply.send("You chose ✌️", { ephemeral: true })

                                if(cllChose && oppChose === true) {
                                    
                                    msg.edit("Game Ended", { component: null })
            
                                    let result;
                                    if(cllChoice === oppChoice) result = "It's a draw!"
                                    else if (oppChoice === "✌️" && cllChoice === "✋") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "🤜" && cllChoice === "✌️") result = `**${this.opponent.username}** wins!`;
                                    else if(oppChoice === "✋" && cllChoice === "🤜") result = `**${this.opponent.username}** wins!`;
                                    else result = `**${this.challenger.username}** wins!`
                                    
                                    const embed = new MessageEmbed()
                                    .setTitle("Rock Paper Scissors")
                                    .setColor("BLURPLE")
                                    .addFields({
                                        name: `${this.challenger.username} chose`,
                                        value: cllChoice
                                    },
                                    {
                                        name: `${this.opponent.username} chose`,
                                        value: oppChoice
                                    },
                                    {
                                        name: "Result",
                                        value: result
                                    })
                                    return this.message.channel.send({
                                        embed: embed
                                    })
    
                                } else {
                                    return;
                                }

                            }
                    } else {
                        return;
                    }
                })

                collector.on("end", async(collected) => {
                    if(collected.size < 2) {
                        await msg.delete()
                        await this.message.channel.send("The game has ended because one of you did not pick something in time")
                    }
                })

            }
        } catch(e) {
            this.message.channel.send('Since the opponent didnt answer, imma end this.')
        }

    }
}
    
module.exports = RPS;
