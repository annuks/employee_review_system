const express = require ('express');
const app = express();
const PORT = 8000;







app.listen(PORT,function(err){
    if(err){
        console.log("Error in Connection with Server");
        return;
    }
    else{
        console.log("Server is up and Running on Port:",PORT);
    }
})