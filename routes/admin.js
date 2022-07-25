const express = require('express');
const router = express.Router();
//route for admin and its related further route
const adminController = require('../controllers/adminController');
router.get('/',adminController.admin); 


module.exports = router;