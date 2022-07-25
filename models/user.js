
//creating schema for employee user type data
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: true,
    min: [3, "Minimum Three digit is required"],
    max: 6,
  },
  admin : {
    type : Boolean,
    default : false
  },
  detail : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Employee'
  }
},{
    timestamps: true
});
const User = mongoose.model("User", userSchema);
module.exports = User;
