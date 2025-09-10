console.log(process)//This provides information about and control over the current nodejs process.
console.log(process.version)//it will give a version nodejs in current process - v20.11.1
console.log(process.release)//this will give below info -
// {
//   name: 'node',
//   lts: 'Iron',
//   sourceUrl: 'https://nodejs.org/download/release/v20.11.1/node-v20.11.1.tar.gz',
//   headersUrl: 'https://nodejs.org/download/release/v20.11.1/node-v20.11.1-headers.tar.gz',
//   libUrl: 'https://nodejs.org/download/release/v20.11.1/win-x86/node.lib'
// }
console.log(process.cwd())//this will give current working directory - D:\Backend

// process.argv - 
console.log(process.argv)//this returns an array containing the command-line arguments passed when the node.js process was launched
// [
//     'C:\\Program Files (x86)\\nodejs\\node.exe',
//     'd:\\Backend\\node\\script.js'
// ]

// giving command line arguments - node "d:\Backend\backend_1\process_1.js" hello rushi 22 12 03 
// o/p - 
/*
[
  'C:\\Program Files (x86)\\nodejs\\node.exe',--->executable path for code
  'd:\\Backend\\node\\script.js',---> path of current executing file
  'hello',
  'rushi',
  '22',
  '12',
  '03'
]
*/
// using this agruments in the code-

let args = process.argv

for (let i = 2; i < args.length; i++) {
    console.log("Hello,",args[i])
}
// O/P-
/*
[
Hello, rushikesh
Hello, ram
Hello, prasad
Hello, prathmesh
Hello, parth
] 
*/