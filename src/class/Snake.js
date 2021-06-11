const Discord = require("discord.js");
const WIDTH = 15;
const HEIGHT = 10;
const gameBoard = [];
const apple = { x: 1, y: 1 };
const { MessageButton } = require('discord-buttons')
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
  }
  let w1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
  let a1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
  let s1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
  let d1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
  let stop1 = (getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4)+'-'+getRandomString(4))
  

class Snake {
    constructor(options = {}) {
        this.snake = [{ x: 5, y: 5 }];
        this.snakeLength = 1;
        this.score = 0;
        this.gameEmbed = null;
        this.inGame = false;
        this.emojis = options.emojis;
        this.options = options;
        this.message = options.message;
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                gameBoard[y * WIDTH + x] = this.emojis.empty
            }
        }
    }
    gameBoardToString() {
        let str = "";
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                if (x == apple.x && y == apple.y) {
                    str += this.emojis.food
                    continue;
                }

                let flag = true;
                for (let s = 0; s < this.snake.length; s++) {
                    if (x == this.snake[s].x && y == this.snake[s].y) {
                        str += this.emojis.snakeBody

                        flag = false;
                    }
                }
                if (flag) {
                    str += gameBoard[y * WIDTH + x];
                }
            }
            str += "\n";
        }
        return str;
    }

    isLocInSnake(pos) {
        return this.snake.find((sPos) => sPos.x == pos.x && sPos.y == pos.y);
    }

    newAppleLoc() {
        let newApplePos = { x: 0, y: 0 };
        do {
            newApplePos = {
                x: parseInt(Math.random() * WIDTH),
                y: parseInt(Math.random() * HEIGHT),
            };
        } while (this.isLocInSnake(newApplePos));

        apple.x = newApplePos.x;
        apple.y = newApplePos.y;
    }

    start() {
        if (this.inGame) return;

        this.inGame = true;
        this.score = 0;
        this.snakeLength = 1;
        this.snake = [{ x: 5, y: 5 }];
        this.newAppleLoc();
        const embed = new Discord.MessageEmbed()
            .setColor(this.options.embed.color || "RANDOM")
            .setTitle(this.options.embed.title || "Snake Game")
            .setDescription(this.gameBoardToString());

        if (this.options.timestamp) embed.setTimestamp();
        let lock1 = new MessageButton()
        .setLabel('\u200b')
        .setStyle('gray')
        .setID('saybye')
        .setDisabled()
        
        let w = new MessageButton()
        .setEmoji(this.options.emojis.up)
        .setStyle('blurple')
        .setID(w1)
        
        let lock2 = new MessageButton()
        .setLabel('\u200b')
        .setStyle('gray')
        .setID('h')
        .setDisabled()
        
        let a = new MessageButton()
        .setEmoji(this.options.emojis.right)
        .setStyle('blurple')
        .setID(a1)
        
        let s = new MessageButton()
        .setEmoji(this.options.emojis.down)
        .setStyle('blurple')
        .setID(s1)
        
        let d = new MessageButton()
        .setEmoji(this.options.emojis.left)
        .setStyle('blurple')
        .setID(d1)
        let stopy = new MessageButton()
        .setLabel('Stop')
        .setStyle('red')
        .setID(stop1)
        this.message.channel.send({ embed: embed, components: 
    [
        {
         type: 1,
         components: [lock1, w, lock2, stopy]
        },
        {
         type: 1,
         components: [a, s, d]
        },
    ] }).then(async (m) => {
    const filter = m => m.clicker.user.id == this.options.message.author.id
const collector = m.createButtonCollector(filter)
collector.on('collect', async btn => {
    btn.defer()
                const snakeHead = this.snake[0];
                const nextPos = { x: snakeHead.x, y: snakeHead.y };
                if (btn.id === a1) {
                    let nextX = snakeHead.x - 1;
                    if (nextX < 0) {
                        nextX = WIDTH - 1;
                    }
                    nextPos.x = nextX;
                } else if (btn.id === w1) {
                    let nextY = snakeHead.y - 1;
                    if (nextY < 0) {
                        nextY = HEIGHT - 1;
                    }
                    nextPos.y = nextY;
                } else if (btn.id === s1) {
                    let nextY = snakeHead.y + 1;
                    if (nextY >= HEIGHT) {
                        nextY = 0;
                    }
                    nextPos.y = nextY;
                } else if (btn.id === d1) {
                    let nextX = snakeHead.x + 1;
                    if (nextX >= WIDTH) {
                        nextX = 0;
                    }
                    nextPos.x = nextX;
                } else if (btn.id === stop1) {
                this.gameOver(m)
                collector.stop()
                }


                        if (this.isLocInSnake(nextPos)) {
                            this.gameOver(m);
                        } else {
                            this.snake.unshift(nextPos);
                            if (this.snake.length > this.snakeLength) {
                                this.snake.pop();
                            }
                            this.step(m);
                        }
                    })
                })
    }

    step(msg) {
        if (apple.x == this.snake[0].x && apple.y == this.snake[0].y) {
            this.score += 1;
            this.snakeLength++;
            this.newAppleLoc();
        }

        const editEmbed = new Discord.MessageEmbed()
            .setColor(this.options.embed.color || "RANDOM")
            .setTitle(this.options.embed.title || "Snake Game")
            .setDescription(this.gameBoardToString())
            .setTimestamp();
            let lock1 = new MessageButton()
            .setLabel('\u200b')
            .setStyle('gray')
            .setID('saybye')
            .setDisabled()
            
            let w = new MessageButton()
            .setEmoji(this.options.emojis.up)
            .setStyle('blurple')
            .setID(w1)
            
            let lock2 = new MessageButton()
            .setLabel('\u200b')
            .setStyle('gray')
            .setID('h')
            .setDisabled()
            
            let a = new MessageButton()
            .setEmoji(this.options.emojis.right)
            .setStyle('blurple')
            .setID(a1)
            
            let s = new MessageButton()
            .setEmoji(this.options.emojis.down)
            .setStyle('blurple')
            .setID(s1)
            
            let d = new MessageButton()
            .setEmoji(this.options.emojis.left)
            .setStyle('blurple')
            .setID(d1)
            let stopy = new MessageButton()
            .setLabel('Stop')
            .setStyle('red')
            .setID(stop1)
        msg.edit({ embed: editEmbed, components: 
            [
                {
                 type: 1,
                 components: [lock1, w, lock2, stopy]
                },
                {
                 type: 1,
                 components: [a, s, d]
                },
            ] })

    }

    gameOver(m) {
        let lock1 = new MessageButton()
        .setLabel('\u200b')
        .setStyle('gray')
        .setID('saybye')
        .setDisabled()

        
        let lock2 = new MessageButton()
        .setLabel('\u200b')
        .setStyle('gray')
        .setID('h')
        .setDisabled()
let w = new MessageButton()
.setEmoji(this.options.emojis.up)
.setStyle('blurple')
.setID(w1)
.setDisabled()

let a = new MessageButton()
.setEmoji(this.options.emojis.right)
.setStyle('blurple')
.setID(a1)
.setDisabled()

let s = new MessageButton()
.setEmoji(this.options.emojis.down)
.setStyle('blurple')
.setID(s1)
.setDisabled()

let d = new MessageButton()
.setEmoji(this.options.emojis.left)
.setStyle('blurple')
.setID(d1)
.setDisabled()

let stopy = new MessageButton()
.setLabel('Stop')
.setStyle('red')
.setID(stop1)
.setDisabled()

        this.inGame = false;
        const editEmbed = new Discord.MessageEmbed()
            .setColor(this.options.embed.gameOverTitle || "RANDOM")
            .setTitle(this.options.embed.gameOverTitle || "Game Over")
            .setDescription("Points: " + this.score)
            .setTimestamp()
            
        m.edit({ embed: editEmbed, components: 
            [
                {
                 type: 1,
                 components: [lock1, w, lock2, stopy]
                },
                {
                 type: 1,
                 components: [a, s, d]
                },
            ] })

    }

}

module.exports = Snake;