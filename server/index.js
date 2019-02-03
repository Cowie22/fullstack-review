const express = require('express');
let app = express();

const gitHubHandler = require('../helpers/github.js')
const repoHandler = require('../database')

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  gitHubHandler.getReposByUsername('Cowie22', () => {
    res.send(201);
  })
});

app.get('/repos', function (req, res) {
  // console.log(typeof getRepos)
  // getReposByUsername('Cowie22')
  // res.send('sup');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

