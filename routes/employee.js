const express = require ('express');
const passport = require('passport');
const router =express.Router();

const employeeController= require ('../controllers/employeeController');
router.get('/',passport.checkAuthentication,employeeController.employee);
router.get('/:id',employeeController.employeeDetail); 


router.get('/:id/:admin',employeeController.handleAdmin);
router.post('/update/:id',employeeController.updateEmployee);
router.post('/delete/:id',employeeController.deleteEmployee);

module.exports = router;