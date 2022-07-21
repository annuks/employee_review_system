const express = require ('express');
const passport = require('passport');
const router =express.Router();

const employeeController= require ('../controllers/employeeController');
router.get('/',passport.checkAuthentication,employeeController.employee);



module.exports = router;