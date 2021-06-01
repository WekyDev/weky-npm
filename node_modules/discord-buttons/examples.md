<div align="center"><h1>Pre-made Buttons and Examples</h1></div>

## Examples

### Normal Button
```js
let button = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('My First Button!') 
  .setID('click_to_function') 
  .setDisabled();

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
```

<img align="center" src="https://cdn.discordapp.com/attachments/846455339419172874/848302344323072041/Outputs.png"></img>

### URL Buttons
```js
let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://npmjs.com/discord-buttons') 
  .setLabel('My First URL Button!') 
  .setDisabled(); 

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
```
<b>P.S:</b> You need to Change your `style` to `url`, you don't have `id` for this kind of buttons too, and also make sure you have your URL in button with `setURL` and URL is valid.

<img align="center" src="https://cdn.discordapp.com/attachments/846455339419172874/848314748239085608/Main1.png"></img>

## Button Styles

| Styles         | Preview                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| Red            | ![Red_Style](https://cdn.discordapp.com/attachments/846455339419172874/848285563936047124/Button_Green2.png)      |
| Green          | ![Green_Style](https://cdn.discordapp.com/attachments/846455339419172874/848283811942498344/Button_Green1.png)    |
| Blurple        | ![Blurple_Style](https://cdn.discordapp.com/attachments/846455339419172874/848282426395852830/Button_Blurple.png) |
| grey (or gray) | ![Grey_Style](https://cdn.discordapp.com/attachments/846455339419172874/848291827736117308/Button_Green5.png)     |
| URL            | ![URL_Style](https://cdn.discordapp.com/attachments/846455339419172874/848290582706782308/Button_Green4.png)      |