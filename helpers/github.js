const request = require('request');
const config = require('../config.js');

const Repo = require('../database');

let getReposByUsername = (username, callback) => {
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

  request(options, (err, res, body) => {
    console.log('error:', err);
    // console.log('statusCode:', res && res.statusCode);
    // console.log('body:', JSON.parse(body));
    const gitHubData = JSON.parse(body);
    Repo.save(username, gitHubData, callback)
  })
}
// getReposByUsername('Cowie22')
module.exports = getReposByUsername;


//dist is the folder that gets pushed to the distribution, that is why the client code is organized the way it is.
//dirname is important because you can't guarentee the path
  //gives you the absolute path to whatever file is show, from where dirname is defined
  //mongo stores every collection as an array and every
  //document within as an object


  // basically like
  // dataBaseMongoDb: {
  //   repos: [
  //     {
  //       id: 1,
  //       userName: 'cowie'
  //     }
  //   ]
  // }

