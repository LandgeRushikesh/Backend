import {sum,PI,sub} from "./math.js"

// To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

console.log(sum(1,2))//3
console.log(sub(1,2))//-1
console.log(PI)//3.142

// importing packages-
import{generate} from "random-words"

console.log(generate())//it will generate a random words i.e., is 