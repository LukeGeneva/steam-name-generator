const dictionary = require('./dictionary');

module.exports = {
  generate: function(callback) {
    dictionary.randomAdjective(function(adjective) {
      dictionary.randomNoun(function(noun) {
        console.log(adjective.word + ' ' + noun.word);
      });
    });
  }
};
