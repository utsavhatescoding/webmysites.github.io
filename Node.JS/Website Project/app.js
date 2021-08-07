const express=require("express");
const path=require("path");
const app=express();
const port=80;
const fs=require("fs");
const bodyparser=require("body-parser");

var mongoose = require('mongoose');
const { send } = require("process");
mongoose.connect('mongodb://localhost/ContactForm', {useNewUrlParser: true, useUnifiedTopology: true});

//DEFINE MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    number: String,
    email: String,
    address: String,
    more: String,
  });

  var Contact = mongoose.model('Contact', contactSchema);


app.use('/static',express.static('static'));          //For serving static files
app.use(express.urlencoded());

app.set('view engine','pug');      //Set the template engine as Pug
app.set('views',path.join(__dirname,'Views'));  //Set the views directory

//ENdPoints
app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('index', params)
});

app.get('/contact',(req,res)=>{
    const params={ }
    res.status(200).render('contact', params)
});

//POST REQUEST For CONTACT FORM

app.post('/contact',(req,res)=>{

var myData= new Contact(req.body);
myData.save().then(()=>{
    res.send(" Congratulations ! This item has been saved to the database")


  }).catch(()=>{
    res.status(400).send("Item was not saved to the database")
});
    // res.status(200).render('contact.pug')
})


//START THE SERVER
app.listen(port, ()=>{
    console.log(`the application has started sucessfully on port ${port}`);
})