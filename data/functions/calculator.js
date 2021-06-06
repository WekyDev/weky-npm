module.exports = async (message) => {
    if (!message) throw new TypeError("[Weky] Missing argument: message");
      const { MessageButton } = require("discord-buttons");
      //Get I
      function i(length) {
        var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var result = "";
        for (var i = 0; i < length; i++) {
          result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length)
          );
        }
        return result;
      }
      //Define Numbers
      let str = " ";
      let stringify = "```\n" + str + "\n```";
      const calculator_ac = i(20);
      const calculator_e1 = i(20);
      const calculator_e2 = i(20);
      const calculator_uppercase = i(20);
      const calculator_7 = i(20);
      const calculator_8 = i(20);
      const calculator_9 = i(20);
      const calculator_plus = i(20);
      const calculator_minus = i(20);
      const calculator_star = i(20);
      const calculator_devide = i(20);
      const calculator_1 = i(20);
      const calculator_2 = i(20);
      const calculator_3 = i(20);
      const calculator_4 = i(20);
      const calculator_5 = i(20);
      const calculator_0 = i(20);
      const calculator_6 = i(20);
      const calculator_dot = i(20);
      const calculator_equal = i(20);
      const calculator_backspace = i(20);
      const calc_irrc = i(20);
      const empty_irrc = i(20);

      //Setup Buttonstyle
      const c = new MessageButton()
        .setLabel("C")
        .setID(calculator_ac)
        .setStyle("red");
      const e1 = new MessageButton()
        .setLabel("(")
        .setID(calculator_e1)
        .setStyle("blurple");
      const e2 = new MessageButton()
        .setLabel(")")
        .setID(calculator_e2)
        .setStyle("blurple");
      const uppercase = new MessageButton()
        .setLabel("^")
        .setID(calculator_uppercase)
        .setStyle("blurple");
      const seven = new MessageButton()
        .setLabel("7️")
        .setID(calculator_7)
        .setStyle("gray");
      const eight = new MessageButton()
        .setLabel("8️")
        .setID(calculator_8)
        .setStyle("gray");
      const nine = new MessageButton()
        .setLabel("9️")
        .setID(calculator_9)
        .setStyle("gray");
      const slash = new MessageButton()
        .setLabel("÷")
        .setID(calculator_devide)
        .setStyle("blurple");
      const four = new MessageButton()
        .setLabel("4️")
        .setID(calculator_4)
        .setStyle("gray");
      const five = new MessageButton()
        .setLabel("5️")
        .setID(calculator_5)
        .setStyle("gray");
      const six = new MessageButton()
        .setLabel("6️")
        .setID(calculator_6)
        .setStyle("gray");
      const star = new MessageButton()
        .setLabel("*")
        .setID(calculator_star)
        .setStyle("blurple");
      const one = new MessageButton()
        .setLabel("1️")
        .setID(calculator_1)
        .setStyle("gray");
      const two = new MessageButton()
        .setLabel("2️")
        .setID(calculator_2)
        .setStyle("gray");
      const three = new MessageButton()
        .setLabel("3️")
        .setID(calculator_3)
        .setStyle("gray");
      const minus = new MessageButton()
        .setLabel("-")
        .setID(calculator_minus)
        .setStyle("blurple");
      const zero = new MessageButton()
        .setLabel("0️")
        .setID(calculator_0)
        .setStyle("gray");
      const dot = new MessageButton()
        .setLabel(".")
        .setID(calculator_dot)
        .setStyle("blurple");
      const equal = new MessageButton()
        .setLabel("=")
        .setID(calculator_equal)
        .setStyle("green");
      const plus = new MessageButton()
        .setLabel("+")
        .setID(calculator_plus)
        .setStyle("blurple");
      const backspace = new MessageButton()
        .setLabel("Del")
        .setID(calculator_backspace)
        .setStyle("red");
      const destroy = new MessageButton()
        .setLabel("DC")
        .setID(calc_irrc)
        .setStyle("red");
      const empty = new MessageButton()
        .setLabel("\u200b")
        .setID(empty_irrc)
        .setStyle("gray")
        .setDisabled();

      //Setup Disasabled Buttons
      const qc = new MessageButton()
        .setLabel("C")
        .setID(calculator_ac)
        .setStyle("red")
        .setDisabled();
      const qe1 = new MessageButton()
        .setLabel("(")
        .setID(calculator_e1)
        .setStyle("blurple")
        .setDisabled();
      const qe2 = new MessageButton()
        .setLabel(")")
        .setID(calculator_e2)
        .setStyle("blurple")
        .setDisabled();
      const quppercase = new MessageButton()
        .setLabel("^")
        .setID(calculator_uppercase)
        .setStyle("blurple")
        .setDisabled();
      const qseven = new MessageButton()
        .setLabel("7️")
        .setID(calculator_7)
        .setStyle("gray")
        .setDisabled();
      const qeight = new MessageButton()
        .setLabel("8️")
        .setID(calculator_8)
        .setStyle("gray")
        .setDisabled();
      const qnine = new MessageButton()
        .setLabel("9️")
        .setID(calculator_9)
        .setStyle("gray")
        .setDisabled();
      const qslash = new MessageButton()
        .setLabel("÷")
        .setID(calculator_devide)
        .setStyle("blurple")
        .setDisabled();
      const qfour = new MessageButton()
        .setLabel("4️")
        .setID(calculator_4)
        .setStyle("gray")
        .setDisabled();
      const qfive = new MessageButton()
        .setLabel("5️")
        .setID(calculator_5)
        .setStyle("gray")
        .setDisabled();
      const qsix = new MessageButton()
        .setLabel("6️")
        .setID(calculator_6)
        .setStyle("gray")
        .setDisabled();
      const qstar = new MessageButton()
        .setLabel("*")
        .setID(calculator_star)
        .setStyle("blurple")
        .setDisabled();
      const qone = new MessageButton()
        .setLabel("1️")
        .setID(calculator_1)
        .setStyle("gray")
        .setDisabled();
      const qtwo = new MessageButton()
        .setLabel("2️")
        .setID(calculator_2)
        .setStyle("gray")
        .setDisabled();
      const qthree = new MessageButton()
        .setLabel("3️")
        .setID(calculator_3)
        .setStyle("gray")
        .setDisabled();
      const qminus = new MessageButton()
        .setLabel("-")
        .setID(calculator_minus)
        .setStyle("blurple")
        .setDisabled();
      const qzero = new MessageButton()
        .setLabel("0️")
        .setID(calculator_0)
        .setStyle("gray")
        .setDisabled();
      const qdot = new MessageButton()
        .setLabel(".")
        .setID(calculator_dot)
        .setStyle("blurple")
        .setDisabled();
      const qequal = new MessageButton()
        .setLabel("=")
        .setID(calculator_equal)
        .setStyle("green")
        .setDisabled();
      const qplus = new MessageButton()
        .setLabel("+")
        .setID(calculator_plus)
        .setStyle("blurple")
        .setDisabled();
      const qbackspace = new MessageButton()
        .setLabel("Del")
        .setID(calculator_backspace)
        .setStyle("red")
        .setDisabled();
      const qdestroy = new MessageButton()
        .setLabel("DC")
        .setID(calc_irrc)
        .setStyle("red")
        .setDisabled();
      const qempty = new MessageButton()
        .setLabel("\u200b")
        .setID(empty_irrc)
        .setStyle("gray")
        .setDisabled();

      //Startmessage
      const filter = (m) => m.clicker.user.id == message.author.id;
      message.channel
        .send(stringify, {
          components: [
            { type: 1, components: [e1, e2, uppercase, backspace, c] },
            { type: 1, components: [seven, eight, nine, slash, destroy] },
            { type: 1, components: [four, five, six, star, empty] },
            { type: 1, components: [one, two, three, minus, empty] },
            { type: 1, components: [dot, zero, equal, plus, empty] },
          ],
        })
        .then(async (msg) => {
          async function edit() {
            msg.edit(stringify, {
              components: [
                { type: 1, components: [e1, e2, uppercase, backspace, c] },
                { type: 1, components: [seven, eight, nine, slash, destroy] },
                { type: 1, components: [four, five, six, star, empty] },
                { type: 1, components: [one, two, three, minus, empty] },
                { type: 1, components: [dot, zero, equal, plus, empty] },
              ],
            });
          }
          async function lock() {
            msg.edit(stringify, {
              components: [
                { type: 1, components: [qe1, qe2, quppercase, qbackspace, qc] },
                {
                  type: 1,
                  components: [qseven, qeight, qnine, qslash, qdestroy],
                },
                { type: 1, components: [qfour, qfive, qsix, qstar, qempty] },
                { type: 1, components: [qone, qtwo, qthree, qminus, qempty] },
                { type: 1, components: [qdot, qzero, qequal, qplus, qempty] },
              ],
            });
          }

          //Start listener
          const calc = msg.createButtonCollector(filter);

          //If Button presser --> run validation
          calc.on("collect", async (btn) => {
            btn.defer();
            switch (btn.id) {
              case calculator_0:
                str += "0";
                break;
              case calculator_1:
                str += "1";
                break;
              case calculator_2:
                str += "2";
                break;
              case calculator_3:
                str += "3";
                break;
              case calculator_4:
                str += "4";
                break;
              case calculator_5:
                str += "5";
                break;
              case calculator_6:
                str += "6";
                break;
              case calculator_7:
                str += "7";
                break;
              case calculator_8:
                str += "8";
                break;
              case calculator_9:
                str += "9";
                break;
              case calculator_plus:
                str += "+";
                break;
              case calculator_minus:
                str += "-";
                break;
              case calculator_devide:
                str += "/";
                break;
              case calculator_star:
                str += "*";
                break;
              case calculator_uppercase:
                str += "^";
                break; //
              case calculator_dot:
                str += ".";
                break;
              case calculator_ac:
                str = " ";
                break;
              case calculator_e1:
                str += "(";
                break;
              case calculator_e2:
                str += ")";
                break;
              case calculator_backspace:
                str = str.split("");
                str.pop();
                str = str.join("");
                break;
            }

            stringify = "```\n" + str + "\n```";
            edit();

            if (btn.id === calculator_equal) {
              try {
                str += " = " + require("mathjs").evaluate(str) + "";
                stringify = "```\n" + str + "\n```";
                edit();
                str = "";
                stringify = "```\n" + str + "\n```";
                return;
              } catch (e) {
                message.channel
                  .send("Please mention an valid calculation!")
                  .then((m) => m.delete({ timeout: 2000 }));

                stringify = "```\n" + str + "\n```";
              }
            }
            if (btn.id === calc_irrc) {
              str = "Calculator Destroyed";
              stringify = "```\n" + str + "\n```";
              edit();
              calc.stop();
              lock();
              return;
            }
          });
        });
}
