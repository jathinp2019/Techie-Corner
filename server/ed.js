const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51MrzASSAYLrAqiBDunzidLbjPsRp06Uzb6v4kkwDeIG3UzOiKsEKe2Vtud1tPTXZsy4oYXAQzza3uAd7EXROzc5U00XpqowSZ2')
const mongoUrl = "mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority"
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = "dsdgassa121231wswewr!@$!@1dasda"
const bcrypt = require('bcryptjs')
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

// Now you can use the useremail variable in this file
const sea='jathin@gmail.com'
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

// Define the User model
const User = mongoose.model('user', userSchema);

// Connect to the MongoDB database
// mongoose.connect('mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/', {
//   dbName: 'exp',
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.post('/getedit', async (req, res) => {
  const { token } = req.body
  try {
      const user = await jwt.verify(token, JWT_SECRET)
      console.log(user)
      const useremail = user.email
      User.findOne({ email: useremail }).then((data) => {
          res.send({ status: "ok", data: data })
      }).catch((err) => {
          res.send({ status: "error", error: err })
      })

  } catch (error) {
      
  }
})

// Fetch the User document with the provided email
app.get('/user', async (req, resp) => {
  try {
    const user = await User.findOne({ email: sea });
    if (user) {
      resp.send(user);
    } else {
      resp.send('User not found');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});

// Update the user data in the database
app.post('/register', async (req, resp) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      user.fnum = req.body.fnum || user.fnum;
      user.address = req.body.address || user.address;
      user.git = req.body.git || user.git;
      user.link = req.body.link || user.link;
      user.mnum = req.body.mnum || user.mnum;
      user.image = req.body.image || user.image;
      user.Phone = req.body.Phone || user.Phone;

      let result = await user.save();
      result = result.toObject();
      delete result.password;
      resp.send(result);
    } else {
      resp.send('User not found');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});

// Start the server
app.listen(8000, () => {
  console.log('App listening at port 8000');
});
module.exports = app; 