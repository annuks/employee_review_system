const express = require ('express');
const passport = require('passport');
const router =express.Router();

const employeeController= require ('../controllers/employeeController');
router.get('/',passport.checkAuthentication,employeeController.employee);
router.get('/:id',employeeController.employeeDetail); 


router.get('/change/:id/:admin',employeeController.handleAdmin);
router.post('/update/:id',employeeController.updateEmployee);
router.get('/delete/:id',employeeController.deleteEmployee);

module.exports = router;