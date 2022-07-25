const User =require('../models/user');


module.exports.admin = async (req,res)=>{
let user= await User.find({}).populate('detail');
return res.render('admin',{
        title:'Admin',
        user,
    });
}
 