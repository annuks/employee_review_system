const mongoose = require('mongoose');
// mongodb+srv://annukumarsingh:HdiaunmRTKVFCJd3@cluster0.skfggd8.mongodb.net/employee_review_system
mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connection Successfull with MongoDB ::');
});


module.exports = db;