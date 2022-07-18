

const express = require ('express');
const router = express.Router();

// setup home controller
const homeController = require ('../controllers/homeController');
router.get('/', homeController.home);
//  router.use("/admin",require('./admin'));
// router.use('/admin',require('./admin'));   

// router.get('/',(req,res)=>{
// res.send("Hello ... This is Home Page");
// }); 





module.exports = router;