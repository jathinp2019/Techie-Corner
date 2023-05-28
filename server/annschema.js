const mongoose = require('mongoose');

const AnnouncementsSchema = new mongoose.Schema({
    subject : 'string',
    type : 'string',
    date: Date,
    
},
{
    collection: 'Announcements',

}
)

mongoose.model("Announcements", AnnouncementsSchema)