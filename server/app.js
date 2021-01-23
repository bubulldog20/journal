require("dotenv").config();
const express = require('express');
const app = express();
const sequelize = require("./db");
const journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");
// app.use('/test', function(req, res){
//     res.send("This is a message from the test endpoint on the server!");
// })

// app.use('/jeremy', function(req, res){
//     res.send('My name is Jeremy and I am six feet tall');
// });

//Have endpoint of journal/practice
//send a response from that endpoint (This is a practice route)

sequelize.sync();

app.use(express.json());
//EXPOSED ROUTE
app.use('/user', user);
//OPTION 1 (When all of the routes need to be restricted, not correct for our blue badge class example)
//PROTECTED ROUTE
//app.use(require('./middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})


//npm run dev