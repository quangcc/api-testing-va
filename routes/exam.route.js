const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const exam_controller = require('../controllers/exam.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', exam_controller.test);
router.post('/create', exam_controller.exam_create);
// router.get('/', exam_controller.product_all);
// router.get('/:id', exam_controller.product_details);
// router.put('/:id/update', exam_controller.product_update);
// router.delete('/:id/delete', exam_controller.product_delete);
module.exports = router;