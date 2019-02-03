const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Lawrence')
// });

//describes how models in our collection should look like
//you can put a second argument as an options argument, to do things such as strict
//
const repoSchema = mongoose.Schema({  //this is how you make the model
  username: String,
  stars: Number,
  repoUrl: String,
  repoName: String,
});

//this line tells mongoose that on collection "Repo" validate using reposchema
const Repo = mongoose.model('Repo', repoSchema); //this is how you make the collection

// Repo.create({  //this is how you make the document
//   name: 'ryan',
//   repo: 'super-cool-repo',
//   fork: 1000000
// }, (err, result) => {
//   if (err) return console.log(err);
//   console.log(result);
// });

//you can skip the on part of the mongoose docs becasue the save function takes care of the on and off
let save = (username, data, callback) => {
  // var repo = new Repo({
  //   username: 'Cowie22',
  //   stars: 0,
  //   repoUrl: 'https://github.com/Cowie22/example',
  //   repoName: 'example',
  // });
  // //save repo
  // repo.save( (err) => {
  //   if (err) throw err;
  //   console.log('from inside repo.save')
  // });
  // //create using create method
  // Repo.create({
  //   username: 'Cowie22',
  //   stars: 0,
  //   repoUrl: 'https://github.com/Cowie22/example',
  //   repoName: 'example',
  // }, (err, savedObject) => {
  //   console.log(savedObject)
  // });
  const newRepoData = githubData.map((githubRepoObj) => {
    return {
      username: username,
      stars: githubRepoObj.stargazers_count,
      repoUrl: githubRepoObj.html_url,
      repoName: githubRepoObj.name,
    }
  });
  Repo.insertMany(newRepoData, (err) => {
    console.log('Insert Many');
    callback();
  })
}


// db.Repo.createIndex({url: 1}, {unique: true});


module.exports.save = save;


//mongo has database, collection, document compared to mysql it is database, table, rows
  //documnets is an object, it is just a mongo db thing
  //columns will be like the keys - or properties
  //it really is just a collection of objects
  //we can use the model to make documnets of the model
  //hey model, go make another model;