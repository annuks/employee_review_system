
//creating schema for employee feedback
const mongoose = require('mongoose');
 const feedbackSchema = new mongoose.Schema({
    feedback:{
    type:String,
    required:true,
    },
   review:{
      type : mongoose.Schema.Types.ObjectId,
    ref : 'review'
   }
 });
 const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;