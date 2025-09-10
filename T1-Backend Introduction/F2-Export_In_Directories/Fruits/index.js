// this is a special file which will require all the modules and export them.

const apple = require("./apple")
const banana = require("./banana")
const orange = require("./orange")

let fruits = [apple , banana ,orange ]

module.exports = fruits

