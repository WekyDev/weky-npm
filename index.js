const letters = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    ////////////////
    A: "∀",
    B: "q",
    C: "Ɔ",
    D: "p",
    E: "Ǝ",
    F: "Ⅎ",
    G: "פ",
    H: "H",
    I: "I",
    J: "ſ",
    K: "ʞ",
    L: "˥",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "Q",
    R: "ɹ",
    S: "S",
    T: "┴",
    U: "∩",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
}
module.exports={
    randomizeNumber: function(start,end){
        if(!start) throw new TypeError("A minimum number was not specified.")
        if(!end) throw new TypeError("A maximum number was not specified.")
        let res = Math.floor(Math.random() * (end - start + 1) + start)
        return res
    },
    randomizeString: function(array){
        if(!array) throw new TypeError("A array was not specified.")
        let res = Math.floor(Math.random() * array.length)
        return array[res]
    },
    flip: function (str) {
            if(!str) throw new TypeError("A string was not specified.")
                let newStr = '';
                for (let i = str.length - 1; i  >= 0; i--) {
                    if(str[i] === " ") newStr += " "
                    for (const letter of Object.keys(letters)){
                        var flipped = letters[letter]
                        if(str[i] === letter) newStr += flipped					
                    }
                }
                return (newStr)
    }
}
module.exports.fight = require("./src/class/Fight");

module.exports.sudo = require("./src/class/Sudo");

module.exports.ShuffleGuess = require("./src/class/ShuffleGuess");

module.exports.FastType = require("./src/class/FastType");

module.exports.ChaosWords = require("./src/class/ChaosWords");

module.exports.TicTacToe = require("./src/class/TicTacToe");

module.exports.Calculator = require('./src/functions/calculator');

module.exports.Snake = require('./src/class/Snake');

module.exports.RPS = require('./src/class/RockPaperScissors');

module.exports.WouldYouRather = require('./src/functions/WouldYouRather');

module.exports.Slots = require("./src/class/slots")