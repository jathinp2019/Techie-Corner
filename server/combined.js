const express = require('express');
const server = require('./server'); // Import your server.js
const ed = require('./ed'); // Import your ed.js
const mongoose = require('mongoose')

const app = express();
const mongoUrl = "mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority";

// Establish the MongoDB connection
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((e) => console.log(e));
// Use the serverApp routes under the '/server' path
app.use('/server', server);

// Use the edApp routes under the '/ed' path
// app.use('/ed', ed);

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Combined server is running on port ${PORT}`);
});
