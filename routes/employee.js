const express = require ('express');
const router =express.Router();

const employeeController= require ('../controllers/employeeController');
router.get('/employee',employeeController.employee);



module.exports = router;