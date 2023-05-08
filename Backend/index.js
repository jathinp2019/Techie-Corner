import express from "express"
import cors from "cors"
// const {MongoClient} = require('mongodb');
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
const url= 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/?retryWrites=true&w=majority'
const database= 'stud_info'
const client=new MongoClient(url);
const app=express();
app.use(cors());


async function getData(){
   
    let result=await client.connect(); 
    let db=result.db(database);
    let collection=db.collection('profile')
    let coll=db.collection('remainder');
    let response = await collection.find({name:'jathin'}).toArray()
    let r1=await coll.find().toArray()

    // // let name = response[0].name
    // // let img=response[0].image
    console.log(response)
    console.log(r1)


    var a=Object.values(response[0])
    var b=Object.values(r1[0])
    app.get("/getData", (req, res) => {
        // res.send([name]);
        res.send(a);
        // res.send(b)
    });
    app.listen(3000,()=>console.log('app is listening on port'))
}

getData()







