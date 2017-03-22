const request = require('request');

const ADJ_LIMIT = 8771;
const NOUN_LIMIT = 27900;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function Definition(word, definition) {
  this.word = word;
  this.definition = definition;
}

module.exports = {
  randomAdjective: function(callback) {
    const offset = randomInt(ADJ_LIMIT);
    const url = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?part_of_speech=adjective&limit=1&offset=' + offset.toString();
    request(url, function(error, response, body) {
      result = JSON.parse(body);
      const adjective = result.results[0].headword;
      const definition = result.results[0].senses[0].definition;
      callback(new Definition(adjective, definition));
    });
  },
  randomNoun: function(callback) {
    const offset = randomInt(NOUN_LIMIT);
    const url = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?part_of_speech=noun&limit=1&offset=' + offset.toString();
    request(url, function(error, response, body) {
      result = JSON.parse(body);
      const noun = result.results[0].headword;
      const definition = result.results[0].senses[0].definition;
      callback(new Definition(noun, definition));
    });
  }
};
