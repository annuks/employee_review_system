const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("../models/user");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      //finding user to establish identity
     User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("Error");
          return done(err);
        }
        //if user not found or password is incorrect
        if (!user || user.password != password) {
          req.flash('error','Invalid User Nmae / Password');
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

//serialising the user to decide which key  is to be  kept in cookies
passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

//deserialisng the user from the key in the ccokies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Invalid User Name / Password");
      return done(err);
    }
    return done(null, user);
  });
});

// check whether user is authenticated
passport.checkAuthentication = function(req, res, next){
  // if the user is signed in, then pass the request to the next function(controller's action)
  if (req.isAuthenticated()){
      return next();
  }

  // if user is not signed in
  return res.redirect('/user/sign_in');
}

passport.setAuthenticatedUser = function(req, res, next){
  if (req.isAuthenticated()){
      // req.user contains the current signed in user 
      //from the session cookie and we are just sending this to the locals for the views
      res.locals.user = req.user;
  }

  next();
}


module.exports = passport;
