const request = require('request');

const ADJ_LIMIT = 51688;
const NOUN_LIMIT = 172504;

const adjOffset = randomInt(ADJ_LIMIT);
const nounOffset = randomInt(NOUN_LIMIT);
const adjUrl = 'http://api.pearson.com/v2/dictionaries/entries?part_of_speech=adjective&limit=1&offset=' + adjOffset.toString();
const nounUrl = 'http://api.pearson.com/v2/dictionaries/entries?part_of_speech=noun&limit=1&offset=' + nounOffset.toString();

request(adjUrl, function(error, response, body) {
  let result = JSON.parse(body);
  const adjective = result.results[0].headword;
  request(nounUrl, function(error, response, body) {
    result = JSON.parse(body);
    const noun = result.results[0].headword;
    console.log(adjective + ' ' + noun);
  });
});

function randomInt(max) {
  return Math.floor(Math.random() * max);
}
