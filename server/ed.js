const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

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
const User = mongoose.model('User', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/', {
  dbName: 'exp',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
    const user = await User.findOne({ email: 'jathin@gmail.com' });
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
app.listen(5000, () => {
  console.log('App listening at port 5000');
});
