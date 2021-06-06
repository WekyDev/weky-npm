module.exports = async (message) => {
    if (!message) throw new TypeError("Weky Error: Missing argument message");
    const { MessageButton: mBtn } = require("discord-buttons");
    function s(len) {
        for (var rChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", res = "", i = 0; i < len; i++) res += rChar.charAt(Math.floor(Math.random() * rChar.length));
        return res;
    }
    let str = " ",
        strfy = "```\n" + str + "\n```",
        // Button ID generator
        clr = s(20),
        be1 = s(20),
        be2 = s(20),
        bup = s(20),
        bt7 = s(20),
        bt8 = s(20),
        bt9 = s(20),
        add = s(20),
        sub = s(20),
        mul = s(20),
        div = s(20),
        bt1 = s(20),
        bt2 = s(20),
        bt3 = s(20),
        bt4 = s(20),
        bt5 = s(20),
        bt0 = s(20),
        bt6 = s(20),
        dot = s(20),
        eql = s(20),
        del = s(20),
        bdc = s(20),
        emp = s(20),
        // Buttons
        CLR = new mBtn().setLabel("AC").setID(clr).setStyle("red"),
        BE1 = new mBtn().setLabel("(").setID(be1).setStyle("gray"),
        BE2 = new mBtn().setLabel(")").setID(be2).setStyle("gray"),
        BUP = new mBtn().setLabel("^").setID(bup).setStyle("gray"),
        BT7 = new mBtn().setLabel("7️").setID(bt7).setStyle("gray"),
        BT8 = new mBtn().setLabel("8️").setID(bt8).setStyle("gray"),
        BT9 = new mBtn().setLabel("9️").setID(bt9).setStyle("gray"),
        DIV = new mBtn().setLabel("÷").setID(div).setStyle("gray"),
        BT4 = new mBtn().setLabel("4️").setID(bt4).setStyle("gray"),
        BT5 = new mBtn().setLabel("5️").setID(bt5).setStyle("gray"),
        BT6 = new mBtn().setLabel("6️").setID(bt6).setStyle("gray"),
        MUL = new mBtn().setLabel("×").setID(mul).setStyle("gray"),
        BT1 = new mBtn().setLabel("1️").setID(bt1).setStyle("gray"),
        BT2 = new mBtn().setLabel("2️").setID(bt2).setStyle("gray"),
        BT3 = new mBtn().setLabel("3️").setID(bt3).setStyle("gray"),
        SUB = new mBtn().setLabel("-").setID(sub).setStyle("gray"),
        BT0 = new mBtn().setLabel("0️").setID(bt0).setStyle("gray"),
        DOT = new mBtn().setLabel(".").setID(dot).setStyle("gray"),
        EQL = new mBtn().setLabel("=").setID(eql).setStyle("green"),
        ADD = new mBtn().setLabel("+").setID(add).setStyle("gray"),
        DEL = new mBtn().setLabel("Del").setID(del).setStyle("blurple"),
        BDC = new mBtn().setLabel("DC").setID(bdc).setStyle("red"),
        EMP = new mBtn().setLabel("​").setID(emp).setStyle("gray").setDisabled(),
        // Lock
        LCLR = new mBtn().setLabel("AC").setID(clr).setStyle("red").setDisabled(),
        LBE1 = new mBtn().setLabel("(").setID(be1).setStyle("gray").setDisabled(),
        LBE2 = new mBtn().setLabel(")").setID(be2).setStyle("gray").setDisabled(),
        LBUP = new mBtn().setLabel("^").setID(bup).setStyle("gray").setDisabled(),
        LBT7 = new mBtn().setLabel("7️").setID(bt7).setStyle("gray").setDisabled(),
        LBT8 = new mBtn().setLabel("8️").setID(bt8).setStyle("gray").setDisabled(),
        LBT9 = new mBtn().setLabel("9️").setID(bt9).setStyle("gray").setDisabled(),
        LDIV = new mBtn().setLabel("÷").setID(div).setStyle("gray").setDisabled(),
        LBT4 = new mBtn().setLabel("4️").setID(bt4).setStyle("gray").setDisabled(),
        LBT5 = new mBtn().setLabel("5️").setID(bt5).setStyle("gray").setDisabled(),
        LBT6 = new mBtn().setLabel("6️").setID(bt6).setStyle("gray").setDisabled(),
        LMUL = new mBtn().setLabel("×").setID(mul).setStyle("gray").setDisabled(),
        LBT1 = new mBtn().setLabel("1️").setID(bt1).setStyle("gray").setDisabled(),
        LBT2 = new mBtn().setLabel("2️").setID(bt2).setStyle("gray").setDisabled(),
        LBT3 = new mBtn().setLabel("3️").setID(bt3).setStyle("gray").setDisabled(),
        LSUB = new mBtn().setLabel("-").setID(sub).setStyle("gray").setDisabled(),
        LBT0 = new mBtn().setLabel("0️").setID(bt0).setStyle("gray").setDisabled(),
        LDOT = new mBtn().setLabel(".").setID(dot).setStyle("gray").setDisabled(),
        LEQL = new mBtn().setLabel("=").setID(eql).setStyle("green").setDisabled(),
        LADD = new mBtn().setLabel("+").setID(add).setStyle("gray").setDisabled(),
        LDEL = new mBtn().setLabel("Del").setID(del).setStyle("blurple").setDisabled(),
        LBDC = new mBtn().setLabel("DC").setID(bdc).setStyle("red").setDisabled();
    //----------------------------------------------------------------------
    try {
        const filter = (btn) => btn.clicker.user.id === message.author.id;
        message.channel
            .send(strfy, {
                components: [
                    { type: 1, components: [BE1, BE2, BUP, DEL, CLR] },
                    { type: 1, components: [BT7, BT8, BT9, DIV, BDC] },
                    { type: 1, components: [BT4, BT5, BT6, MUL, EMP] },
                    { type: 1, components: [BT1, BT2, BT3, SUB, EMP] },
                    { type: 1, components: [DOT, BT0, EQL, ADD, EMP] },
                ],
            })
            .then(async (msg) => {
                async function edit() {
                    msg.edit(strfy, {
                        components: [
                            { type: 1, components: [BE1, BE2, BUP, DEL, CLR] },
                            { type: 1, components: [BT7, BT8, BT9, DIV, BDC] },
                            { type: 1, components: [BT4, BT5, BT6, MUL, EMP] },
                            { type: 1, components: [BT1, BT2, BT3, SUB, EMP] },
                            { type: 1, components: [DOT, BT0, EQL, ADD, EMP] },
                        ],
                    });
                }
                async function lock() {
                    msg.edit(strfy, {
                        components: [
                            { type: 1, components: [LBE1, LBE2, LBUP, LDEL, LCLR] },
                            { type: 1, components: [LBT7, LBT8, LBT9, LDIV, LBDC] },
                            { type: 1, components: [LBT4, LBT5, LBT6, LMUL, EMP] },
                            { type: 1, components: [LBT1, LBT2, LBT3, LSUB, EMP] },
                            { type: 1, components: [LDOT, LBT0, LEQL, LADD, EMP] },
                        ],
                    });
                }
                const pe = msg.createButtonCollector(filter);
                pe.on("collect", async (btn) => {
                    if ((btn.clicker.user.id !== message.author.id && btn.defer(), btn.defer(), btn.id === bt1)) (strfy = "```\n" + (n += "1") + "\n```"), edit();
                    else if (btn.id === bt2) (strfy = "```\n" + (str += "2") + "\n```"), edit();
                    else if (btn.id === bt3) (strfy = "```\n" + (str += "3") + "\n```"), edit();
                    else if (btn.id === bt4) (strfy = "```\n" + (str += "4") + "\n```"), edit();
                    else if (btn.id === bt5) (strfy = "```\n" + (str += "5") + "\n```"), edit();
                    else if (btn.id === bt6) (strfy = "```\n" + (str += "6") + "\n```"), edit();
                    else if (btn.id === bt7) (strfy = "```\n" + (str += "7") + "\n```"), edit();
                    else if (btn.id === bt8) (strfy = "```\n" + (str += "8") + "\n```"), edit();
                    else if (btn.id === bt9) (strfy = "```\n" + (str += "9") + "\n```"), edit();
                    else if (btn.id === bt0) (strfy = "```\n" + (str += "0") + "\n```"), edit();
                    else if (btn.id === add) (strfy = "```\n" + (str += "+") + "\n```"), edit();
                    else if (btn.id === sub) (strfy = "```\n" + (str += "-") + "\n```"), edit();
                    else if (btn.id === div) (strfy = "```\n" + (str += "÷") + "\n```"), edit();
                    else if (btn.id === bup) (strfy = "```\n" + (str += "^") + "\n```"), edit();
                    else if (btn.id === mul) (strfy = "```\n" + (str += "×") + "\n```"), edit();
                    else if (btn.id === dot) (strfy = "```\n" + (str += ".") + "\n```"), edit();
                    else if (btn.id === clr) (strfy = "```\n" + (str = " ") + "\n```"), edit();
                    else if (btn.id === be1) (strfy = "```\n" + (str += "(") + "\n```"), edit();
                    else if (btn.id === be2) (strfy = "```\n" + (str += ")") + "\n```"), edit();
                    else if (btn.id === del) (str = str.split("")).pop(), (str = str.join("")), (strfy = "```\n" + str + "\n```"), edit();
                    else if (btn.id === eql)
                        try {
                            (str += " = " + require("mathjs").evaluate(str.replace(/×/g, '*').replace(/÷/g, '/'))), (strfy = "```\n" + str + "\n```" || "```\n"), edit(), (strfy = "```\n" + (str = "") + "\n```");
                        } catch (e) {
                            (strfy = "```\n" + (str = "Invalid Question Entered") + "\n```"), edit(), (strfy = "```\n" + (str = "") + "\n```");
                        }
                    else if (btn.id === bdc) ((strfy = "```\n" + (str += "Calculator Destroyed") + "\n```"), edit(), pe.stop(), lock());
                });
            });
    } catch (e) {
        console.log(`[Process ${process.pid}] [Cluster 0] [Calculator] Something went wrong with the Calculator!\n${e}`);
    }
};