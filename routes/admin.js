const express = require('express');
const router = express.Router();



const adminController = require('../controllers/adminController');
router.get('/admin',adminController.admin); 


module.exports = router;