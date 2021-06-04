Install with: `npm i weky`

This is my first npm package, small things, big fun xd im working on it.

**Got errors or questions? Join [our support server](https://discord.gg/Sr2U5WuaSN)**
===

***Examples***
====

**Fight 👊**
===

```js
const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky');
const x = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with <@' + message.author + '>', //message sent to see if opponent accepts
    challenger: message.author, //NOT CHANGEABLE
    opponent: opponent,  //NOT CHANGEABLE
    hitButtonText: 'HIT', //Hit button text (Custom)
    hitButtonColor: 'red', //Hit button color (Custom)
    healButtonText: 'HEAL', //Heal button text (Custom)
    healButtonColor:  'green', //Heal button color (Custom)
    cancelButtonText: 'CANCEL', //Cancel button text (Custom)
    cancelButtonColor: 'blurple', //Cancel button color (Custom)
});
x.start();
```
Win:
![](https://cdn.discordapp.com/attachments/812590454821355543/848508219872903178/win.gif)
Lose:
![](https://cdn.discordapp.com/attachments/812590454821355543/848510360179965972/lose.gif)

**Chaos Words 💫**
=== 

```js
  const { ChaosWords } = require("weky")
  var randomWords = require('random-words');
  const words = randomWords(2) //generating 2 words
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
![](https://cdn.discordapp.com/attachments/812590454821355543/849197554092605460/chaoswords.gif)

**Tic Tac Toe ❌**
=== 

```js
const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
const { TicTacToe } = require('weky')
const game = new TicTacToe({
    message: message,
    opponent: opponent, //opponent
    xColor: 'red', //x's color
    oColor: 'blurple', //zero's color
    xEmoji: '❌',  //the x emoji
    oEmoji: '0️⃣' ,//the zero emoji
})
game.start()//start da game
```

**Calculator 🤔**
=== 

```js
  const { Calculator } = require('weky')
  await Calculator(message)
```

![](https://cdn.discordapp.com/attachments/812590454821355543/850290125593772042/calc.gif)

**Fast Type ⌨️**
===

```js
const { FastType } = require('weky');
const game = new FastType({
    message: message,
    winMessage: "GG you won!", //message sent when user types perfectly
    sentence: 'some string', //sentence-to-be-typed
    loseMessage: 'Lost ;(', //message sent when user misspell it
    time: 50000, //time that user has in ms
    startMessage: 'Good Luck!' //message sent when user starts playing
});
game.start();
```
![Output](https://cdn.discordapp.com/attachments/830003682300133376/832216687981887508/unknown.png)


**Sudo 😳**
===

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
![Output](https://cdn.discordapp.com/attachments/830003681994473511/831795280075685928/unknown.png)

**Shuffle Guess ❓**
===

```js
var randomWords = require('random-words');
const word = randomWords();

const { ShuffleGuess } = require('weky');
const game = new ShuffleGuess({
              message: message,
              word: word, //or a simple word
              winMessage: "GG you won!", //message sent when user's message matches with the word
              colorReshuffleButton: 'green', //color of the reshuffle button (regen)
              messageReshuffleButton: 'reshuffle', //text of the reshuffle button (regen)
              colorCancelButton: 'red', //color of the cancel button (exit, quit, stop)
              messageCancelButton: 'cancel', //text of the cancel button
              client: client
});
game.start();
//REQUIRES THE  MODULE "discord-buttons" INSTALLED!
//ERRORS? Join our server above
=======
```
With win
![](https://cdn.discordapp.com/attachments/847504414108811275/848171831793156136/idk.gif)
With cancel
![](https://cdn.discordapp.com/attachments/847504414108811275/848170668704792596/Animation.gif)


**Randomize String**
===
```js
const weky = require('weky');
let food = ["🍏","🍐","🍋","🍌","🍉","🍇","🫐"];
let foodButRandom = weky.randomizeString(food);
console.log(foodButRandom);
/*output:
Some random string from the food array
*/
```
**Randomize Number**
===
```js
const weky = require('weky');
let randomNumber = weky.randomizeNumber(100,1000);
console.log(randomNumber);
/*output:
Some random number between 100 and 1000
*/
```
**Flip**
===
```js
const weky = require('weky');
console.log(weky.flip('Hello World'));
/*output:
plɹoM ollǝH
*/
```
