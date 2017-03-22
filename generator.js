const request = require('request');

const ADJ_LIMIT = 8771;
const NOUN_LIMIT = 27900;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  generate: function(callback) {
    const adjOffset = randomInt(ADJ_LIMIT);
    const nounOffset = randomInt(NOUN_LIMIT);
    const adjUrl = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?part_of_speech=adjective&limit=1&offset=' + adjOffset.toString();
    const nounUrl = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?part_of_speech=noun&limit=1&offset=' + nounOffset.toString();

    request(adjUrl, function(error, response, body) {
      let result = JSON.parse(body);
      const adjective = result.results[0].headword;
      request(nounUrl, function(error, response, body) {
        result = JSON.parse(body);
        const noun = result.results[0].headword;
        callback(adjective + ' ' + noun);
      });
    });
  }
};
