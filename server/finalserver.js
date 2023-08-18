const mongoose = require('mongoose')
const mongoUrl = "mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority"


const userSchema = new mongoose.Schema({
    email: String,
    address: String,
    fname: String,
    lname: String,
    att_c1: String,
    att_c2: String,
    att_c3: String,
    fnam: String,
    fnum: String,
    git: String,
    link: String,
    mnam: String,
    mnum: String,
    sem1: String,
    sem2: String,
    sem3: String,
    sem4: String,
    sem5: String,
    image: String,
    Phone: String,
  });

const User = mongoose.model('user', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/', {
  dbName: 'exp',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require('express');
const app = express();
const edRouter = require('./ed').router;
const serverRouter = require('./server').router;
app.use('/ed', edRouter);
app.use('/server', serverRouter);
app.listen(3500, () => {
  console.log('Server listening on port 3500'); 
})