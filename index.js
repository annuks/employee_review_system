const express = require ('express');
const app = express();
const PORT = 8000;
//const db = require('./config/mongoose');

//adding ejs as view engine
const ejs = require ('ejs');
const path = require ('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));


//settig route
app.use('/',require('./routes'));
app.use('*',(req,res)=>{
res.send("Page Not Found");
})

// app.get('/',(req,res)=>{
//     res.send('<h1>Home Page</h1>');
// })

app.listen(PORT,function(err){
    if(err){
        console.log("Error in Connection with Server");
        return;
    }
    else{
        console.log("Server is up and Running on Port:",PORT);
    }
})