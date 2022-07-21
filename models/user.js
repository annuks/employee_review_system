const mogoose = require("mongoose");


const userSchema = new mogoose.Schema({
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
  usertype: {
    type: String,
    enum: ["EMPLOYEE", "ADMIN"],
    default: "ADMIN",
    //required: true,
  },
},{
    timeseries: true,
    timestamps: true
});
const User = mogoose.model("User", userSchema);
module.exports = User;
