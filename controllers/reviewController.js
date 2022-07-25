const Review =require('../models/review');
const Feedback = require('../models/feedback');


module.exports.addReview = async (req,res)=>{
    const review = await Review.create(req.body);
    return res.redirect('back');
}
 






module.exports.feedback = async (req,res)=>{

    return res.render('feedback',{
            title:'Feedback Page',
        });
    }
     