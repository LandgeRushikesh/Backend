// npm(Node package manager) - npm is a standard package manager
//  1. library of packages
//  2. command line tool

// FIGlet - FIGlet is a computer program that generates text banners, in a variety of typefaces, composed of letters made up of conglomerations of smaller ASCII characters.

const figlet = require("figlet")

figlet("Rushikesh Landge", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });