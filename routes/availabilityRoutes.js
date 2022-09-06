const express = require('express');
const availabilityController = require('../controllers/availabilityController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/get-all').get(availabilityController.getAllAvailabilities);
router.route('/get/:id').get(availabilityController.getAvailability);

router.use(
  authController.protect,
  authController.restrictTo('admin', 'owner', 'instructor', 'lead-admin')
);

router.route('/post').post(availabilityController.createAvailability);

router
  .route('/:id')
  .get(availabilityController.getAvailability)
  .patch(availabilityController.updateAvailability)
  .delete(availabilityController.deleteAvailability);

module.exports = router;
