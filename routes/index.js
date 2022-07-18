

const express = require ('express');
const router = express.Router();

// setup home controller
const loginController = require ('../controllers/loginController');
router.get('/',loginController.login);

router.use("/",require('./admin'));
router.use('/',require('./employee'));  








module.exports = router;