

const express = require ('express');
const router = express.Router();
const passport = require('passport')

// setup home controller
const homeController = require ('../controllers/homeController');
router.get('/',passport.checkAuthentication,homeController.home);
//index routes
router.use('/admin',require('./admin'));
router.use('/employee',require('./employee'));
router.use('/user',require('./user'));
router.use('/review',require('./review'));



module.exports = router;