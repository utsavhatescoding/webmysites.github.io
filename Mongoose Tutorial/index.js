// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NepFashion', {useNewUrlParser: true, useUnifiedTopology: true});



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are Connected ...")
});

var kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.greet = function () {
  var greeting = this.name
   
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);



var silence = new Kitten({ name: 'Silence' });
var silence2 = new Kitten({ name: 'Silence 2.0' });
// console.log(silence.name); // 'Silence
// silence.speak();


//Saving
silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.greet();
});

silence2.save(function (err, silence2) {
  if (err) return console.error(err);
  silence2.greet();
});


// Searching
Kitten.find({name:"Silence 2.0"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});