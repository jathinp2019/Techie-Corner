//sk_test_51MrzASSAYLrAqiBDunzidLbjPsRp06Uzb6v4kkwDeIG3UzOiKsEKe2Vtud1tPTXZsy4oYXAQzza3uAd7EXROzc5U00XpqowSZ2
//price_1Mx5hLSAYLrAqiBDB39r8F1G = College Fee ID
//price_1Mx5iXSAYLrAqiBD7brI9IRs = Bus Fee ID
//price_1Mx5jkSAYLrAqiBDiJul5WDO = Mess Fee ID

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51MrzASSAYLrAqiBDunzidLbjPsRp06Uzb6v4kkwDeIG3UzOiKsEKe2Vtud1tPTXZsy4oYXAQzza3uAd7EXROzc5U00XpqowSZ2')

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async(req,res) => {

    console.log(req.body)
    const items = req.body.items
    let lineitems = []
    items.forEach(item => {
        lineitems.push({
            price: item.id,
            quantity : item.quantity
        })        
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineitems,
        mode : 'payment',
        success_url : 'http://localhost:3001/success',
        cancel_url : 'http://localhost:3001/cancel'
    })
    
    res.send(JSON.stringify({
        url: session.url
    }))

})

app.listen(4000,() => console.log("Listening on port 4000"))