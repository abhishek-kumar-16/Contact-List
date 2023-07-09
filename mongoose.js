// require the library
const mongoose= require('mongoose');
// connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/contact-list-db');

// acquire database to check whether it is successful or not // like making a reference for it
const db = mongoose.connection;

// checking for error
db.on('error',console.error.bind(console,'error connecting to db'));


// if up and running then print the message
db.once('open',function(){
         console.log('successfully connected to the database');
});