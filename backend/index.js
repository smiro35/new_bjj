const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./routers/contact')
// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(contactRouter)
app.use(express.json());
// initialize routes
// app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.get('/hello', (req, res) => {
    res.send('Hello World')
  })

// listen for requests
app.listen(3000, function(){
   console.log("3000");
});