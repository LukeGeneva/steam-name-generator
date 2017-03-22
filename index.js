const generator = require('./generator');

if (isAuto()) {
  setInterval(function() {
    printName();
  }, 5000);
}
else {
  printName();
}

function isAuto() {
  return process.argv.length > 2 && process.argv[2] === '-a';
}

function printName() {
  generator.generate(function(result) {
    console.log(result);
  });
}
