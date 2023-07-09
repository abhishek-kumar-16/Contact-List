const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// in the just below line , first letter of contact is capital , keep it contact 
const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;