const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

//route for review and its related further route for add,delete,update and view.
router.post('/add',reviewController.addReview);
router.get('/delete/:id',reviewController.deleteReview);
router.post('/update/:id',reviewController.updateReview);
//route for assigning review data
router.get('/assign/data/:id/',reviewController.assignData);
//route for assigning employee
router.get('/assign/employee/:id/:emp/',reviewController.assignEmployee);

// route for submitting feedback
router.post('/feedback/add/:id/:emp',reviewController.submitFeedback);






module.exports = router;