module.exports = async (message) => {
  if (!message) throw new TypeError("Weky Error: Missing argument message");
  const { MessageButton: btn } = require("discord-buttons");
  function s(len) {
    for (var rChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", res = "", i = 0; i < len; i++) res += rChar.charAt(Math.floor(Math.random() * rChar.length));
    return res;
  }
  let str = " ",
    strf = "```\n" + str + "\n```",
    ac = s(20),
    e1 = s(20),
    e2 = s(20),
    up = s(20),
    b7 = s(20),
    b8 = s(20),
    b9 = s(20),
    add = s(20),
    sub = s(20),
    mul = s(20),
    div = s(20),
    b1 = s(20),
    b2 = s(20),
    b3 = s(20),
    b4 = s(20),
    b5 = s(20),
    b0 = s(20),
    b6 = s(20),
    dot = s(20),
    eql = s(20),
    BAC = new btn().setLabel("AC").setID(ac).setStyle("red"),
    BE1 = new btn().setLabel("(").setID(e1).setStyle("blurple"),
    BE2 = new btn().setLabel(")").setID(e2).setStyle("blurple"),
    BUP = new btn().setLabel("^").setID(up).setStyle("blurple"),
    BT7 = new btn().setLabel("7️").setID(b7).setStyle("gray"),
    BT8 = new btn().setLabel("8️").setID(b8).setStyle("gray"),
    BT9 = new btn().setLabel("9️").setID(b9).setStyle("gray"),
    DIV = new btn().setLabel("÷").setID(div).setStyle("blurple"),
    BT4 = new btn().setLabel("4️").setID(b4).setStyle("gray"),
    BT5 = new btn().setLabel("5️").setID(b5).setStyle("gray"),
    BT6 = new btn().setLabel("6️").setID(b6).setStyle("gray"),
    MUL = new btn().setLabel("×").setID(mul).setStyle("blurple"),
    BT1 = new btn().setLabel("1️").setID(b1).setStyle("gray"),
    BT2 = new btn().setLabel("2️").setID(b2).setStyle("gray"),
    BT3 = new btn().setLabel("3️").setID(b3).setStyle("gray"),
    SUB = new btn().setLabel("-").setID(sub).setStyle("blurple"),
    BT0 = new btn().setLabel("0️").setID(b0).setStyle("gray"),
    DOT = new btn().setLabel(".").setID(dot).setStyle("blurple"),
    EQL = new btn().setLabel("=").setID(eql).setStyle("green"),
    ADD = new btn().setLabel("+").setID(add).setStyle("blurple"),
    LAC = new btn().setLabel("AC").setID(ac).setStyle("red").setDisabled(),
    LE1 = new btn().setLabel("(").setID(e1).setStyle("blurple").setDisabled(),
    LE2 = new btn().setLabel(")").setID(e2).setStyle("blurple").setDisabled(),
    LUP = new btn().setLabel("^").setID(up).setStyle("blurple").setDisabled(),
    LB7 = new btn().setLabel("7️").setID(b7).setStyle("gray").setDisabled(),
    LB8 = new btn().setLabel("8️").setID(b8).setStyle("gray").setDisabled(),
    LB9 = new btn().setLabel("9️").setID(b9).setStyle("gray").setDisabled(),
    LDV = new btn().setLabel("÷").setID(div).setStyle("blurple").setDisabled(),
    LB4 = new btn().setLabel("4️").setID(b4).setStyle("gray").setDisabled(),
    LB5 = new btn().setLabel("5️").setID(b5).setStyle("gray").setDisabled(),
    LB6 = new btn().setLabel("6️").setID(b6).setStyle("gray").setDisabled(),
    LML = new btn().setLabel("×").setID(mul).setStyle("blurple").setDisabled(),
    LB1 = new btn().setLabel("1️").setID(b1).setStyle("gray").setDisabled(),
    LB2 = new btn().setLabel("2️").setID(b2).setStyle("gray").setDisabled(),
    LB3 = new btn().setLabel("3️").setID(b3).setStyle("gray").setDisabled(),
    LSB = new btn().setLabel("-").setID(sub).setStyle("blurple").setDisabled(),
    LB0 = new btn().setLabel("0️").setID(b0).setStyle("gray").setDisabled(),
    LDT = new btn().setLabel(".").setID(dot).setStyle("blurple").setDisabled(),
    LEQ = new btn().setLabel("=").setID(eql).setStyle("green").setDisabled(),
    LAD = new btn().setLabel("+").setID(add).setStyle("blurple").setDisabled();
  const filter = (t) => t.clicker.user.id == message.author.id;
  message.channel
    .send(strf, {
      components: [
        { type: 1, components: [BAC, BE1, BE2, BUP] },
        { type: 1, components: [BT7, BT8, BT9, DIV] },
        { type: 1, components: [BT4, BT5, BT6, MUL] },
        { type: 1, components: [BT1, BT2, BT3, SUB] },
        { type: 1, components: [DOT, BT0, EQL, ADD] },
      ],
    })
    .then(async (msg) => {
      async function edit() {
        msg.edit(strf, {
          components: [
            { type: 1, components: [BAC, BE1, BE2, BUP] },
            { type: 1, components: [BT7, BT8, BT9, DIV] },
            { type: 1, components: [BT4, BT5, BT6, MUL] },
            { type: 1, components: [BT1, BT2, BT3, SUB] },
            { type: 1, components: [DOT, BT0, EQL, ADD] },
          ],
        });
      }
      async function lock() {
        msg.edit(strf, {
          components: [
            { type: 1, components: [LAC, LE1, LE2, LUP] },
            { type: 1, components: [LB7, LB8, LB9, LDV] },
            { type: 1, components: [LB4, LB5, LB6, LML] },
            { type: 1, components: [LB1, LB2, LB3, LSB] },
            { type: 1, components: [LDT, LB0, LEQ, LAD] },
          ],
        });
      }
      msg.createButtonCollector(filter).on("collect", async (btn) => {
        btn.defer()
        if (btn.id === b1) (strf = "```\n" + (str += "1") + "\n```"), edit();
        else if (btn.id === b2) (strf = "```\n" + (str += "2") + "\n```"), edit();
        else if (btn.id === b3) (strf = "```\n" + (str += "3") + "\n```"), edit();
        else if (btn.id === b4) (strf = "```\n" + (str += "4") + "\n```"), edit();
        else if (btn.id === b5) (strf = "```\n" + (str += "5") + "\n```"), edit();
        else if (btn.id === b6) (strf = "```\n" + (str += "6") + "\n```"), edit();
        else if (btn.id === b7) (strf = "```\n" + (str += "7") + "\n```"), edit();
        else if (btn.id === b8) (strf = "```\n" + (str += "8") + "\n```"), edit();
        else if (btn.id === b9) (strf = "```\n" + (str += "9") + "\n```"), edit();
        else if (btn.id === b0) (strf = "```\n" + (str += "0") + "\n```"), edit();
        else if (btn.id === add) (strf = "```\n" + (str += "+") + "\n```"), edit();
        else if (btn.id === sub) (strf = "```\n" + (str += "-") + "\n```"), edit();
        else if (btn.id === div) (strf = "```\n" + (str += "÷") + "\n```"), edit();
        else if (btn.id === up) (strf = "```\n" + (str += "^") + "\n```"), edit();
        else if (btn.id === mul) (strf = "```\n" + (str += "×") + "\n```"), edit();
        else if (btn.id === dot) (strf = "```\n" + (str += ".") + "\n```"), edit();
        else if (btn.id === ac) (strf = "```\n" + (str = " ") + "\n```"), edit();
        else if (btn.id === e1) (strf = "```\n" + (str += "(") + "\n```"), edit();
        else if (btn.id === e2) (strf = "```\n" + (str += ")") + "\n```"), edit();
        else if (btn.id === eql)
          try {
            (str += " = " + require("mathjs").evaluate(str.replace(/×/g, '*').replace(/÷/g, '/'))), (strf = "```\n" + str + "\n```"), edit(), (strf = "```\n" + (str = "") + "\n```");
          } catch (t) {
            message.channel.send(" An invalid equation was entered!").then((e) => e.delete({ timeout: 2e3 })), (strf = "```\n" + str + "\n```");
          }
      });
    });
};
