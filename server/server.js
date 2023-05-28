//sk_test_51MrzASSAYLrAqiBDunzidLbjPsRp06Uzb6v4kkwDeIG3UzOiKsEKe2Vtud1tPTXZsy4oYXAQzza3uAd7EXROzc5U00XpqowSZ2
//price_1Mx5hLSAYLrAqiBDB39r8F1G = College Fee ID
//price_1Mx5iXSAYLrAqiBD7brI9IRs = Bus Fee ID
//price_1Mx5jkSAYLrAqiBDiJul5WDO = Mess Fee ID

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

app.post("/checkout", async (req, res) => {

    console.log(req.body)
    const items = req.body.items
    let lineitems = []
    items.forEach(item => {
        lineitems.push({
            price: item.id,
            quantity: item.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineitems,
        mode: 'payment',
        success_url: 'http://localhost:3001/success',
        cancel_url: 'http://localhost:3001/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))

})
require('./userDetails')
const User = mongoose.model('users')

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Success')
    })
    .catch((e) => console.log(e))

app.post('/adminpage', async (req, res) => {
    const { fname, lname, email, password } = req.body
    const encrpytedPassword = await bcrypt.hash(password, 10)
    try {
        const oldUser = await User.findOne({ email })
        if (oldUser) {
            return res.send({ error: 'User Exists' })
        }
        await User.create({
            fname,
            lname,
            email,
            password: encrpytedPassword,
        })
        res.send({ status: 'ok' })
    }
    catch (error) {
        res.send({ status: 'error' })
    }
})


app.post('/login-user', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.json({ error: "User not found" })
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET)
        if (res.status(201)) {
            return res.json({ status: "ok", data: token })

        }
        else {
            return res.json({ status: "error" })
        }
    }

    res.json({ status: "error", error: "Invalid password" })

})

app.post('/userdata', async (req, res) => {
    const { token } = req.body
    try {
        
        const user = jwt.verify(token, JWT_SECRET)
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
const announcementSchema = new mongoose.Schema({
  subject: 'string',
  type: 'string',
  date: Date,
});

const Announcement = mongoose.model('announcements', announcementSchema);

app.post('/anndata', async (req, res) => {
  try {
    const announcementsData = await Announcement.find();
    res.json({ status: "success", data: announcementsData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Failed to retrieve data" });
  }
});
app.listen(4000, () => console.log("Listening on port 4000"))