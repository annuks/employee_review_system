const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');
router.post('/add',reviewController.addReview);
router.get('/delete/:id',reviewController.deleteReview);
router.post('/update/:id',reviewController.updateReview);






module.exports = router;