const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Lawrence likes men')
});

const repoSchema = new mongoose.Schema({  //this is how you make the model
  name: String,
  repo: String,
  fork: Number
});

const Repo = mongoose.model('Repo', repoSchema); //this is how you make the collection

Repo.create({  //this is how you make the document
  name: 'ryan',
  repo: 'super-cool-repo',
  fork: 1000000
}, (err, result) => {
  if (err) return console.log(err);
  console.log(result);
});

// Repo.save( (err, Repo) => {
//   if (err) return console.error(err);
//     Repo()
// })


module.exports.Repo = Repo;


//mongo has database, collection, document compared to mysql it is database, table, rows
  //documnets is an object, it is just a mongo db thing
  //columns will be like the keys - or properties
  //it really is just a collection of objects
  //we can use the model to make documnets of the model
  //hey model, go make another model;