const Availability = require('../models/availabilityModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createAvailability = factory.createOne(Availability);
exports.getAvailability = factory.getOne(Availability, {
  path: 'availability_exceptions'
});
exports.getAllAvailabilities = factory.getAll(Availability);
exports.updateAvailability = factory.updateOne(Availability);
exports.deleteAvailability = factory.deleteOne(Availability);
