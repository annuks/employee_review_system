const User = require("../models/user");
const Employee = require("../models/employee");
const fs = require("fs");
const path = require("path");

// controller action for refering to sign in page
module.exports.sign_in = (req, res) => {
  if (req.isAuthenticated()) {
    if(req.user.admin === true){
      return res.redirect("/admin");
    }else{
      return res.redirect("/employee");
    }
  }
  return res.render("sign_in", {
    title: "ERS|Sign_In"
  });
};

//controller action for rendering sign_up page
module.exports.sign_up = (req, res) => {

  if (req.isAuthenticated()) {
   return res.redirect("/user/employee");
  }
  return res.render("sign_up", {
    title: "ERS || Sign_up"
  });
};

//controller action for creating and getting signup data

module.exports.create = (req, res) => {
  if (req.body.password != req.body.confirm_password) {
    req.flash('error','Passwords do not match');
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in sign up");
      return;
    }
    if (!user) {
      User.create({
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
      }, function (err, user) {
        if (err) {
          console.log("Error in signing up");
          return;
        }
        Employee.create({
          employee : user._id,
          department : req.body.department,
          joiningDate : req.body.joining,
          gender : req.body.gender
        },(err,employe)=>{
          user.detail = employe._id;
          user.save();
        })
        req.flash("success", "Your account hasbeen created");
        return res.redirect("/user/sign_in");
      });
    } else {
      return res.redirect("back");
    }
  });
};
// controller action for creating session for authentication 
module.exports.createSession =  (req, res) => {
  req.flash("success", "Logged in Successfully");
  if(req.user.admin === true){
    return res.redirect("/admin");
  }else{
    return res.redirect("/employee");
  }
 
};
// controller action for signing out 
module.exports.destroySession =  (req, res) => {
  req.logout(()=>{
    req.flash("success", " You have been Logged out");  
    return res.redirect("/");
  });
}
