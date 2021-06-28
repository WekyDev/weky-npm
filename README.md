<div align="center">
  <p>
    <a href="https://nodei.co/npm/weky
/"><img src="https://nodei.co/npm/weky.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

<div align="center">
 <p>This is my first npm package, small things, big fun xd. I'm working on it.
 For errors and questions you can join <a href="https://discord.gg/YUTUSKQbm5">our support server</a></p>
</div>

## Table Of Content

- [Installation](#installation)
- [Examples](#examples)
- [Calculator](#calculator)
- [WouldYouRather](#wouldyourather)
- [TicTacToe](#tictactoe)
- [Fight](#fight)
- [FastType](#fasttype)
- [ChaosWords](#chaoswords)
- [Snake](#snake)
- [RockPaperScissors](#rockpaperscissors)
- [ShuffleGuess](#shuffleguess)
- [Sudo](#sudo)
- [Randomize String](#randomizestring)
- [Randomize Number](#randomizenumber)
- [Flip](#flip)
- [Support Server](https://discord.gg/YUTUSKQbm5)

# Installation
```
$ npm i weky
```
If you want to use functions with buttons, you have to install [discord-buttons](https://www.npmjs.com/package/discord-buttons) too

# License

Weky NPM is licensed under the terms of [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://github.com/WekyDev/weky-npm/edit/main/LICENSE.md) ("CC-BY-NC-SA-4.0"). Commercial use is not allowed under this license. This includes any kind of revenue made with or based upon the software, even donations.

The CC-BY-NC-SA-4.0 allows you to:

 Share
 ==
-- copy and redistribute the material in any medium or format.

 Adapt 
 ==
-- remix, transform, and build upon the material.

--------------------------------------------------------------

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial** — You may not use the material for commercial purposes.
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
--------------------------------------------------------------
More information can be found [here](https://creativecommons.org/licenses/by-nc-sa/4.0/).

# Examples

# Calculator
```js
const { Calculator } = require('weky')
await Calculator(message)
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

![Calculator Showcase](https://i.imgur.com/qV4uIol.gif)

# TicTacToe
```js
const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
const { TicTacToe } = require('weky')
const game = new TicTacToe({
    message: message,
    opponent: opponent, // opponent
    xColor: 'red', // x's color
    oColor: 'blurple', //zero's color
    xEmoji: '❌',  //t he x emoji
    oEmoji: '0️⃣' ,// the zero emoji
})
game.start()// start da game
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

# Fight
```js
const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky');
const battle = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with <@' + message.author + '>', //message sent to see if opponent accepts
    challenger: message.author, // NOT CHANGEABLE
    opponent: opponent,  // NOT CHANGEABLE
    hitButtonText: 'HIT', // Hit button text (Custom)
    hitButtonColor: 'red', // Hit button color (Custom)
    healButtonText: 'HEAL', // Heal button text (Custom)
    healButtonColor:  'green', // Heal button color (Custom)
    cancelButtonText: 'CANCEL', // Cancel button text (Custom)
    cancelButtonColor: 'blurple', // Cancel button color (Custom)
});
battle.start(); // start da battle
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

![Fight Showcase Win](https://i.imgur.com/GKN38AR.gif)

![Fight Showcase Cancel](https://i.imgur.com/nfElWHj.gif)

# Would You Rather
```js
	const { WouldYouRather } = require('weky')
	await WouldYouRather(message)
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**
![Would You Rather Showcase](https://cdn.discordapp.com/attachments/812590454821355543/853171935684722708/wyr.gif)

# Snake
```js
const { Snake } = require('weky');
new Snake({
    message: message,
    embed: {
    title: 'Snake', //embed title
    color: "#gt4668", //embed color
    gameOverTitle: "Game Over", //game over embed title
    },
    emojis: {
      empty: '⬛', //zone emoji
      snakeBody: '♿', //snake
      food: '💩', //food emoji
      //control
      up: '⬆️', 
      right: '⬅️',
      down: '⬇️',
      left: '➡️',
      },
    }).start()
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

![Snake Showcase](https://cdn.discordapp.com/attachments/830003681402683415/851392057641009172/snake.gif)

# RockPaperScissors
```js
const opponent = message.mentions.users.first();
if(!opponent) return message.channel.send(`Please mention who you want to fight`);
const { RPS } = require('weky')
const game = new RPS({
    message: message,
    opponent: opponent, // NOT CHANGEABLE
    challenger: message.author, // NOT CHANGEABLE
    acceptMessage: "Click to fight with <@" + message.author + '> at RPS!', // message sent to see if opponent accepts
})
game.start() // start the game
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

# FastType
```js
const { FastType } = require('weky');
const game = new FastType({
    message: message,
    winMessage: "GG you won!", // message sent when user types perfectly
    sentence: 'some string', // sentence-to-be-typed
    loseMessage: 'Lost ;(', // message sent when user misspell it
    time: 50000, // time that user has in ms
    startMessage: 'Good Luck!' // message sent when user starts playing
});
game.start(); // start da game
```

![FastType Showcase](https://camo.githubusercontent.com/1c6a74c235043c9234fc3d31c78c1746910f0d76785642c1690c6f0b81a0eb21/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3833303030333638323330303133333337362f3833323231363638373938313838373530382f756e6b6e6f776e2e706e67)

# ChaosWords
```js
  const { ChaosWords } = require("weky")
  var randomWords = require('random-words');
  const words = randomWords(2) // generating 2 words
  await new ChaosWords({
      message: message,
      maxTries: 8, //max number  of user's tries (ends when reach limit)
      charGenerated: 20, //length of sentence (small length might throw error)
      words: words, //words (array) => ['word']
      embedTitle: 'Chaos words!', //understable
      embedFooter: 'Find the words in the sentence!',
      embedColor: 'RANDOM'
      }).start()
```

![ChaosWords Showcase](https://i.imgur.com/eePjGQc.gif)

# ShuffleGuess
```js
var randomWords = require('random-words');
const word = randomWords();

const { ShuffleGuess } = require('weky');
const game = new ShuffleGuess({
              message: message,
              word: word, // or a simple word
              winMessage: "GG you won!", // message sent when user's message matches with the word
              colorReshuffleButton: 'green', // color of the reshuffle button (regen)
              messageReshuffleButton: 'reshuffle', // text of the reshuffle button (regen)
              colorCancelButton: 'red', // color of the cancel button (exit, quit, stop)
              messageCancelButton: 'cancel', // text of the cancel button
              client: client
});
game.start(); // start da game
```
**This function requires [discord-buttons](https://www.npmjs.com/package/discord-buttons)**

![ShuffleGuess Cancel Showcase](https://i.imgur.com/yiv18zW.gif)

![ShuffleGuess Win Showcase](https://i.imgur.com/XcxJj73.gif)

# Sudo
```js
const { sudo } = require('weky');
const user = message.mentions.members.first();
const msg = args.slice(1).join(" ");
const xd = new sudo({
    message: message,
    text: msg,
    member: user,
});
xd.start();
```

![Sudo Showcase](https://camo.githubusercontent.com/22bcd17a77986689d8758fa3983e99dc36ea76e43e0828d4de9b22678e4ccc04/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3833303030333638313939343437333531312f3833313739353238303037353638353932382f756e6b6e6f776e2e706e67)

# RandomizeString
```js
const weky = require('weky');
let food = ["🍏","🍐","🍋","🍌","🍉","🍇","🫐"];
let foodButRandom = weky.randomizeString(food);
console.log(foodButRandom);

/*output:
Some random string from the food array
*/
```

# RandomizeNumber
```js
const weky = require('weky');
let randomNumber = weky.randomizeNumber(100,1000);
console.log(randomNumber);

/*output:
Some random number between 100 and 1000
*/
```
# Flip
```js
const weky = require('weky');
console.log(weky.flip('Hello World'));

/*output:
plɹoM ollǝH
*/
```

# For errors and questions you can join [our support server](https://discord.gg/YUTUSKQbm5)
