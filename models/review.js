const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
  teamwork: {
    type: Number,
    min:3,
    max:5,
    required: true,
  },
  punctuality:{
    type:Number,
    min:3,
    max:5,
    required:true,
  },
  commskill:{
    type:Number,
    min:3,
    max:5,
    required:true,
  },
  behaviour:{
    type:Number,
    min:3,
    max:5,
    required:true,
  },
  employee:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Employee'
  },
  createdBy:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;