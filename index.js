const generator = require('./generator');

if (isAuto()) {
  setInterval(function() {
    printName();
  }, getInterval());
}
else {
  printName();
}

function isAuto() {
  return process.argv.length > 2 && process.argv[2] === '-a';
}

function getInterval() {
  return process.argv[3] || 5000;
}

function printName() {
  generator.generate(function(result) {
    console.log(result);
  });
}
