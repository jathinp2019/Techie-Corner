const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const mongoUrl = "mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority"
const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
