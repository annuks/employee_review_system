

const express = require ('express');
const router = express.Router();
const passport = require('passport')

// setup home controller
const homeController = require ('../controllers/homeController');
router.get('/',passport.checkAuthentication,homeController.home);

router.use('/admin',require('./admin'));
router.use('/employee',require('./employee'));
router.use('/user',require('./user'));


module.exports = router;