const express = require("express");
const path = require("path");
const app = express();
const port = 200;
const fs =require("fs");

// For Serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Set the template engine as Pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// //Our Pug Demo Endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Utsav', message: 'Hello There and Chelsea won the Champions League 2021' });



app.get('/',(req, res)=>{
    const con="This is one of the best contents";
    const params={'title':'PUBG is the best game','content':con}
    res.status(200).render('index.pug', params)
});

app.post('/',(req,res)=>{
    // console.log(req.body);
    name=req.body.name;
    age=req.body.age;
    number=req.body.number;
    address=req.body.address;
   more=req.body.More;
let outputtoWrite=`the name of the client is ${name},${age} years old,  with this ${number} phone number , residing at ${address} . More About him/her : ${more}`;
   fs.writeFileSync('output.txt', outputtoWrite);
    const params={'message': 'Your form has been submitted succesfully'}
    res.status(202).render('index.pug',params)
});

//ENDPOINTS
// app.get("/", (req, res) => {
//     res.send("This is my first express app Home Page")
// });
// app.get("/about", (req, res) => {
//     res.send("This is my first express app About Page")
// });
// app.get("/services", (req, res) => {
//     res.send("This is my first express app Services Page")
// });
// app.get("/contact", (req, res) => {
//     res.send("This is my first express app Contact Page")
// });


// app.get("/this", (req, res) => {
//     res.status(404).send("This Page is Not Found")
// });

// app.post("/contact", (req, res) => {
//     res.send("This is  a Post Request  first express app Contact Page")
// });


//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});