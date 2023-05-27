const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const mname = 'jaa'; //matcher

mongoose.connect('mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/', {
  dbName: 'exp',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('users', UserSchema);

app.get('/user', async (req, resp) => {
  try {
    const user = await User.findOne({ name: mname });
    if (user) {
      resp.send(user);
    } else {
      resp.send('User not found');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});

app.post('/register', async (req, resp) => {
  try {
    const user = await User.findOne({ name: mname });
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.address = req.body.address || user.address;
      user.dob = req.body.dob || user.dob;

      let result = await user.save();
      result = result.toObject();
      if (result) {
        delete result.password;
        resp.send(result);
        console.log(result);
      } else {
        console.log('User already registered');
      }
    } else {
      console.log('User not found');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});

app.listen(5000, () => {
  console.log('App listen at port 5000');
});
