const express = require ('express');
const passport = require('passport');
const router =express.Router();

//route for employee and its related further route for add,view,update and delete
const employeeController= require ('../controllers/employeeController');
router.get('/',passport.checkAuthentication,employeeController.employee);
router.get('/:id',employeeController.employeeDetail); 
//to make admin
router.get('/change/:id/:admin',employeeController.handleAdmin);
router.post('/update/:id',employeeController.updateEmployee);
router.get('/delete/:id',employeeController.deleteEmployee);

module.exports = router;