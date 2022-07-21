const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");

//using passport as  middleware to authnticate
router.post("/createSession",
  passport.authenticate("local", { failureRedirect: "/user/sign_in" }),
  userController.createSession
);

router.get("/sign_in", userController.sign_in);
router.get("/sign_up", userController.sign_up);

router.post('/create',userController.create);

module.exports = router;
