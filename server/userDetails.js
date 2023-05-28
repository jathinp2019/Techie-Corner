const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    fname: 'string',
    lname: 'string',
    email: { type: 'string' , unique: true }  ,
    password: 'string',
    address: 'string' ,
    att_c1 : Number,
    att_c2 : Number,
    att_c3 : Number,
    fnam: 'string',
    fnum: 'string',
    git:'string',
    link: 'string',
    mnam: 'string',
    mnum: 'string',
    sem1: Number,
    sem2: Number,
    sem3: Number,
    sem4: Number,
    sem5: Number,
    image:'string',
    Phone:'string', 
    
},
{
    collection: 'users',

}
)

mongoose.model("users", UserDetailSchema)