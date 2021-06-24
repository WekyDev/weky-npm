async function convert(degree, args, message) {
  let x;
  if (degree == 'C') {
    x = args[1] * 9 / 5 + 32;
    if(!args[1]) return message.channel.send("Specify a number!")
    if (isNaN(args[1])) {
      message.channel.send(args[1] + ' is not a number!');
    } else {
      message.channel.send('The temperature in Farenhiet is ' + Math.round(x) + '°F');
    }
  } else if (degree == 'F') {
    x = (args[1] -32) * 5 / 9;
    if(!args[1]) return message.channel.send("Specify a number!")
    if (isNaN(args[1])) {
      message.channel.send(args[1] + ' is not a number!');
    } else {
      message.channel.send('The temperature in Celcius is ' + Math.round(x) + '°C');
    }
  } else {
    message.channel.send('You have to choose C or F!');
  }
}

module.exports = convert;