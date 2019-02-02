const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log(options.url)

  request.get(options, (err, res) => {
    if (err) return console.log(err);
    console.log(JSON.parse(res.body));
  })
}
// getReposByUsername('Cowie22')
module.exports = getReposByUsername;