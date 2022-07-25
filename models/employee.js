const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    department : {
        type : String,
        enum : ['HR','Sales','Production','Marketting','Operation']
    },
    joiningDate : {
        type : Date 
    },
    gender : {
        type : String,
        enum : ['male','female','other']
    },
    reviews:[{
      type : mongoose.Schema.Types.ObjectId,
    ref : 'Review',
    }]
  },
  {
    timestamps: true,
  }
);
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
