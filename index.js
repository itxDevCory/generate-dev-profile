const questions = [
 
  message: "What is your name?";
  message:  "What is your favorite color?"
];

function writeToFile(fileName, data) {
 
}
var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});

