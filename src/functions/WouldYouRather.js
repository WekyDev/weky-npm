module.exports = async (message, apikey) => {
  if (!message) throw new Error("Weky Error: Missing argument message");
  const disbut = require("discord-buttons");

  function getRandomString(length) {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  let id1 =
    getRandomString(4) +
    "-" +
    getRandomString(4) +
    "-" +
    getRandomString(4) +
    "-" +
    getRandomString(4);
  let id2 =
    getRandomString(4) +
    "-" +
    getRandomString(4) +
    "-" +
    getRandomString(4) +
    "-" +
    getRandomString(4);

  let bruh = await message.channel.send("Let me think...");
  const fetch = require("node-fetch");
  let res;
  if (apikey) {
    res = await fetch(`https://api.tovade.xyz/v1/fun/wyr`, {
      headers: {
        Authorisation: `Bearer ${apikey}`,
      },
    }).then((re) => re.json());
  } else {
    res = await fetch(`https://api.tovade.xyz/v1/fun/wyr`).then((re) =>
      re.json()
    );
  }

  let btn = new disbut.MessageButton()
    .setStyle("blurple")
    .setLabel(`${res.questions[0]}`)
    .setID(id1);
  let btn2 = new disbut.MessageButton()
    .setStyle("red")
    .setLabel(`${res.questions[1]}`)
    .setID(id2);

  await message.channel
    .send("**Would you rather**", {
      components: [{ type: 1, components: [btn, btn2] }],
    })
    .then(async (m) => {
      bruh.delete();
      const gameFilter = (me) => me.clicker.user.id === message.author.id;
      const gameCollector = m.createButtonCollector(gameFilter);
      gameCollector.on("collect", (ae) => {
        ae.defer();
        if (ae.id === id1) {
          btn = new disbut.MessageButton()
            .setStyle("blurple")
            .setLabel(`${res.questions[0]}` + ` (${res.percentage["1"]}%)`)
            .setID(id1)
            .setDisabled();
          btn2 = new disbut.MessageButton()
            .setStyle("gray")
            .setLabel(`${res.questions[1]}` + ` (${res.percentage["2"]}%)`)
            .setID(id2)
            .setDisabled();
          gameCollector.stop();
          m.edit("**Would you rather**", {
            components: [{ type: 1, components: [btn, btn2] }],
          });
        } else if (ae.id === id2) {
          btn = new disbut.MessageButton()
            .setStyle("gray")
            .setLabel(`${res.questions[0]}` + ` (${res.percentage["1"]}%)`)
            .setID(id1)
            .setDisabled();
          btn2 = new disbut.MessageButton()
            .setStyle("blurple")
            .setLabel(`${res.questions[1]}` + ` (${res.percentage["2"]}%)`)
            .setID(id2)
            .setDisabled();
          gameCollector.stop();
          m.edit("**Would you rather**", {
            components: [{ type: 1, components: [btn, btn2] }],
          });
        }
      });
    });
};
