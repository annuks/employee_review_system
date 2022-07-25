//calling require models
const Employee = require('../models/employee');
const User = require('../models/user');
const Review =require('../models/review');
const Feedback = require('../models/feedback');

//controller action  for adding performrnce review
module.exports.addReview = async (req,res)=>{
    const review = await Review.create(req.body);
    const employee = await Employee.findById(req.body.employee);
    employee.reviews.push(review._id);
    employee.save();
  req.flash('success','Performence Review Created')
    return res.redirect('back');
}
//controller action  for deleting performrnce review
 module.exports.deleteReview = async(req,res)=>{
    const review = await Review.findByIdAndDelete(req.params.id);
    const employee = await Employee.findByIdAndUpdate(review.employee,{$pull:{reviews:req.params.id}});
    req.flash('success','Review Deleted Successfully')
    return res.redirect('back');
 }
//controller action  for modifying performrnce review
 module.exports.updateReview = async(req,res)=>{
    const review = await Review.findByIdAndUpdate(req.params.id,req.body);
    req.flash('success','Performance Review Updated')
    return res.redirect('back');
 }

 ////controller action  for assigning review for feedback
 module.exports.assignData =  async(req,res)=>{
    const review = await Review.findById(req.params.id);
    const datas = await User.find({ '_id': { $nin: review.assignTo } }).populate('detail');
    return res.json(200,{
        success:true,
        message : "All Data Sended",
        data : {
            datas
        }
    })
 }
// controller action for assigning an employee to submit feedback
 module.exports.assignEmployee  =  async(req,res)=>{
    const review = await Review.findById(req.params.id);
    review.assignTo.push(req.params.emp);
    const user = await User.findById(req.params.emp);
    const employee =  await Employee.findById(user.detail);
    employee.assignedMe.push(req.params.id);
    employee.save();
    review.save();

    return res.json(200,{
        success:true,
        message : "Assigned",
    })
 }




// controller action for submit feedback by assigned employee
module.exports.submitFeedback = async (req,res)=>{
    const feedback = await Feedback.create(req.body);
    feedback.review = req.params.id;
    feedback.save();
    const review = await Review.findById(req.params.id);
    review.feedback.push(feedback._id);
    review.save();
    const employee = await Employee.findByIdAndUpdate(req.params.emp,{$pull:{'assignedMe':req.params.id}});
    req.flash('success','Feedback Submitted');
    return res.redirect('back');
    }
     