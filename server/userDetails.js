const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    fname: 'string',
    lname: 'string',
    email: { type: 'string' , unique: true }  ,
    password: 'string',
},
{
    database:"stud_info",
    collection: 'UserInfo',
}
)

mongoose.model("UserInfo", UserDetailSchema)