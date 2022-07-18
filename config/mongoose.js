//connection between mongodb and mongoose
const mongoose = require ('mongoose');
const db = mongoose.Connection();

mongoose.connect('mongodb://localhost/employee_review_system');
db.once('error',console.error.bind(console,'Error in connection with Database'));
db.once('open', function(){
    console.log('Connection Succesfull with Mongo Database:-:')
});
module.exports = db;