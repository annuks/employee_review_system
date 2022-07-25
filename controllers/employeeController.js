const { db } = require('../models/employee');
const Employee = require('../models/employee');
const User = require('../models/user');
module.exports.employee = (req,res)=>{

    return res.render('employee',{
        title:'Employee'});
}

module.exports.employeeDetail = async (req,res)=>{
    const employee = await User.findById(req.params.id).populate('detail');
    return res.render('employeeDetail',{
        title:'Employee-Details',
        employee,
    });
}



module.exports.handleAdmin =async (req,res)=>{
    const user =  await User.findById(req.params.id)
        user.admin=req.params.admin;
        user.save();
        req.flash('success','User Access type changed')
        return res.redirect('back');
            
        

    };
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

module.exports.deleteEmployee = async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    user.remove();
    req.flash('success','Employee Details Deleted')
    return res.redirect('back');
}
 
    
