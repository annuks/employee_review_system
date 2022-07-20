

const express = require ('express');
const router = express.Router();

// setup home controller
const homeController = require ('../controllers/homeController');
router.get('/',homeController.home);

router.use("/",require('./admin'));
router.use('/',require('./employee'));  








module.exports = router;