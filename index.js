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
  return process.argv.indexOf('-a') !== -1;
}

function getInterval() {
  const intervalIndex = process.argv.indexOf('-a') + 1;
  return process.argv[intervalIndex] || 5000;
}

function printName() {
  generator.generate(function(result) {
    console.log(result);
  });
}
