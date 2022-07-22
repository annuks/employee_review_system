const express = require ('express');
const passport = require('passport');
const router =express.Router();

const employeeController= require ('../controllers/employeeController');
router.get('/',passport.checkAuthentication,employeeController.employee);
router.get('/:id',employeeController.empployeeDetails); 


module.exports = router;