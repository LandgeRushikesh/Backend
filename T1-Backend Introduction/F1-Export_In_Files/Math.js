// module.exports = 123

// 1st way 

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const PI = 3.14
const g = 9.18

let obj = {
    sum:sum,
    mul:mul,
    PI:PI,
    g:g
}

// module.exports = obj

// 2nd way
// module.exports = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// }

// 3rd way
module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.PI = 3.14
module.exports.g = 9.18
