//calling required models
const { db, populate } = require('../models/employee');
const Employee = require('../models/employee');
const Review = require('../models/review');
const User = require('../models/user');
// controller action for handling user type employee
module.exports.employee = async  (req,res)=>{
    const employee = await User.findById(req.user._id).populate({
        path:'detail',
        populate:{
            path:'reviews',
            path:'assignedMe',
        }
    });
    // console.log(employee);
return res.render('employee',{
        title:'Employee',
        employee,   
    });
}
// controller action for displaying list of vemployeee details
module.exports.employeeDetail = async (req,res)=>{
    const employee = await User.findById(req.params.id).populate({
        path:'detail',
        populate:{
            path:'reviews',
            populate : {
                path : 'feedback'
            }
        }
    });
    return res.render('employeeDetail',{
        title:'Employee-Details',
        employee,
    });
}


// controller action for making/removing admin
module.exports.handleAdmin =async (req,res)=>{
    const user =  await User.findById(req.params.id)
        user.admin=req.params.admin;
        user.save();
        req.flash('success','User Access type changed')
        return res.redirect('back');
    };
//// controller action for updating employee data
module.exports.updateEmployee = async (req,res)=>{
    const user = await User.findByIdAndUpdate (req.params.id,{
        name:req.body.name,
        email:req.body.email,
    });
    const employee = await Employee.findByIdAndUpdate(user.detail,{
        gender:req.body.gender,
        department:req.body.department,
        joiningDate:req.body.joiningDate,
    })
    req.flash('success',"Record Updated Succesfully");
    return res.redirect('back');
}

// controller action for deletion of an employee data
module.exports.deleteEmployee = async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    const employee = await Employee.findByIdAndDelete(user.detail);
    const review = await Review.deleteMany({employee:employee._id});
    req.flash('success','Employee and Associated Details Deleted')
    return res.redirect('back');
}
 
    
