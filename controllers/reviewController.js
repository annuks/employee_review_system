const Employee = require('../models/employee');
const Review =require('../models/review');
const Feedback = require('../models/feedback');


module.exports.addReview = async (req,res)=>{
    
    const review = await Review.create(req.body);
    const employee = await Employee.findById(req.body.employee);
    employee.reviews.push(review._id);
    employee.save();
  req.flash('success','Performence Review Created')
    return res.redirect('back');
}

 module.exports.deleteReview = async(req,res)=>{
    const review = await Review.findByIdAndDelete(req.params.id);
    const employee = await Employee.findByIdAndUpdate(review.employee,{$pull:{reviews:req.params.id}});
    req.flash('success','Review Deleted Successfully')
    return res.redirect('back');
 }

 module.exports.updateReview = async(req,res)=>{
    console.log(req.body)
    const review = await Review.findByIdAndUpdate(req.params.id,req.body);
    req.flash('success','Performance Review Update')
    return res.redirect('back');
 }






module.exports.feedback = async (req,res)=>{

    return res.render('feedback',{
            title:'Feedback Page',
        });
    }
     