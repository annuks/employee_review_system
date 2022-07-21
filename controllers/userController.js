const User = require("../models/user");
const fs = require("fs");
const path = require("path");

// refering to signin page
module.exports.sign_in = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/user/sign_in");
  }
  return res.render("sign_in", {
    title: "ERS|Sign_In"
  });
};

//rendering sign_up page
module.exports.sign_up = (req, res) => {

  if (req.isAuthenticated()) {
    res.redirect("/user/employee");
  }
  return res.render("sign_up", {
    title: "ERS || Sign_up"
  });
};

//getting signup data

module.exports.create = (req, res) => {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in sign up");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in finding user in sign up");
          return;
        }
        return res.redirect("/user/sign_in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.createSession = async (req, res) => {
  //return res.send("Login");
  return res.redirect("/");
};
