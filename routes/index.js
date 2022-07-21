

const express = require ('express');
const router = express.Router();

// setup home controller
const homeController = require ('../controllers/homeController');
router.get('/',homeController.home);

router.use('/admin',require('./admin'));
router.use('/employee',require('./employee'));
router.use('/user',require('./user'));


module.exports = router;