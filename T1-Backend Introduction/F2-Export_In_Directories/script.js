const info = require("./Fruits")

console.log(info)//Output will be -
/*
[
  { name: 'Apple', color: 'red' },
  { name: 'Banana', color: 'yellow' },
  { name: 'Orange', color: 'orange' }
]
*/

// we can print require info -

console.log(info[0])//{ name: 'Apple', color: 'red' }
console.log(info[0].name)//Apple