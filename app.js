// const express = require('express');

// const app = express();
// const port = 80;

// app.get('/' , (req , res) => {
//     res.send("This is my first file with the express.")
// });

// app.listen(port , () => {
//     console.log(`The application started successfully on port no ${port}`);
// })

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80; 
 
// For serving static file
app.use('/static', express.static('static'))
app.use(express.urlencoded())
// set the templete engine as a pug
app.set('view engine', 'pug')

//set the views directory.
app.set('views' , path.join(__dirname , 'views'))

//Our pug demo end point.
// app.get('/demo', (req , res) =>{
//     res.status(200).render('demo' , {title:'Hi manthan',message : 'Hello manthan thanks for telling me that how to use pug static templates.'});
// })
  
// app.get('/' , (req, res) =>{
//     res.status(200).render('index.pug');
// });

app.get('/',(req , res) =>{
    const con = 'This is the best tutorial for learning about the pug temlate engine.';
    const params = {'title':'Title is here', 'content': con};
    res.status(200).render('index.pug' , params);
})

app.get('/contact', (req, res) => {

    // res.render('index2.pug');
    // **modify your existing code here**
    fs.readFile('output.txt', (e, data) => {
        res.send(data);
    });
});

 //this is the end point.    
app.post('/' , (req , res) =>{

    // this is the object of java script we can use directly by using req.body
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of client is ${name},${age} years old ${gender} , residing at ${address}, and more about him/her: ${more}`; 
    fs.writeFileSync('output.txt' , outputToWrite);
    const params = {'message' : 'Your form is submited successfully ...'};
    res.status(200).render('index.pug' , params); 
}) 

// app.get('/' , (req , res) =>{
//     res.send("THis is the first app with get method.");
// })

// app.get('/about',(req , res) =>{
//     res.send("This is the about page on backend side.");
// })
// app.get('/contact',(req , res) =>{
//     res.send("THis is the contact page on backend side.");
// })
// app.get('/Services',(req , res) =>{
//     res.status(404).send("This page is not found!!");
// })


// here server listening   
app.listen(port , () =>{
    console.log(`This application is successfully running on port no ${port}`);
}) 