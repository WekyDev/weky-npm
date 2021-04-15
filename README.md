Install with: `npm i weky`

This is my first npm package, small things, big fun xd im working on it.

**Got errors or questions? Join [our support server](https://discord.gg/Sr2U5WuaSN)**
===

***Examples***
====

**Fight 👊**
===

```js
const { fight } = require('weky')
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', async message => {
if(message.content.startsWith('mom!fight')){
    if(!message.mentions.users.first())return message.reply('Ping someone dad')
const x = new fight({
    client: bot,
    message: message,
    acceptMessage: 'Click to fight with ' + message.author,
    challenger: message.author,
    opponent: message.mentions.users.first()
})
x.start()
}
})
```
![Output](https://cdn.discordapp.com/attachments/830003681402683419/831536735334170675/unknown.png)


**Fast Type ⌨️**
===

```js
const { FastType } = require('weky')
const game = new FastType({
    message: message,
    winMessage: "GG you won!", //message sent when user types perfectly
    sentence: 'some string', //sentence-to-be-typed
    loseMessage: 'Lost ;(', //message sent when user misspell it
    time: 50000, //time that user has in ms
    startMessage: 'Good Luck!' //message sent when user starts playing
})
game.start()
```
![Output](https://cdn.discordapp.com/attachments/830003682300133376/832216687981887508/unknown.png)


**Sudo 😳**
===

```js
const { sudo } = require('weky')
const user = message.mentions.members.first()
const msg = args.slice(1).join(" ")
const xd = new sudo({
    message: message,
    text: msg,
    member: user,
})
xd.start()
```
![Output](https://cdn.discordapp.com/attachments/830003681994473511/831795280075685928/unknown.png)

**Shuffle Guess ❓**
===

```js
const { ShuffleGuess } = require('weky')
const game = new ShuffleGuess({
    message: message,
    word: 'some string',
    winMessage: "GG you won!",
})
game.start()
```
![Output](https://cdn.discordapp.com/attachments/830003682300133376/831938733099057172/unknown.png)


**Randomize String**
===
```js
const weky = require('weky')
let food = ["🍏","🍐","🍋","🍌","🍉","🍇","🫐"]
let foodButRandom = weky.randomizeString(food)
console.log(foodButRandom)
/*output:
Some random string from the food array
*/
```
**Randomize Number**
===
```js
const weky = require('weky')
let randomNumber = weky.randomizeNumber(100,1000)
console.log(randomNumber)
/*output:
Some random number between 100 and 1000
*/
```
**Flip**
===
```js
const weky = require('weky')
console.log(weky.flip('Hello World'))
/*output:
plɹoM ollǝH
*/
```