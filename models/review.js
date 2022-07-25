// creating schema for review and its related operations
const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  teamwork: {
    type: Number,
    min:1,
    max:5,
    required: true,
  },
  punctuality:{
    type:Number,
    min:1,
    max:5,
    required:true,
  },
  commskill:{
    type:Number,
    min:1,
    max:5,
    required:true,
  },
  behaviour:{
    type:Number,
    min:1,
    max:5,
    required:true,
  },
  comment:{
    type:String,
    required:true,
  },
  employee:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Employee'
  },
  createdBy:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  assignTo:[{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Employee',
  }],
  feedback : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Feedback',
  }]
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;