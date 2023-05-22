const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/',
  {
    dbName: 'exp',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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
User.createIndexes();

const express = require('express');
const app = express();
const cors = require('cors');
console.log('App listen at port 5000');
app.use(express.json());
app.use(cors());
app.get('/', (req, resp) => {
  resp.send('App is Working');
});

app.post('/register', async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log('User already register');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});
app.listen(5000);
