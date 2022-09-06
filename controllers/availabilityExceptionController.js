const AvailabilityException = require('../models/availabilityExceptionModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // 1) Get the currently booked tour
//   const studio = await Studio.findById(req.params.studioId);
//   // console.log(tour);

//   // 2) Create checkout session
//   const session = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     payment_method_types: ['card'],
//     // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
//     //   req.params.tourId
//     // }&user=${req.user.id}&price=${tour.price}`,
//     success_url: `${req.protocol}://${req.get(
//       'host'
//     )}/my-studios?alert=booking`,
//     cancel_url: `${req.protocol}://${req.get('host')}/studio/${studio.slug}`,
//     customer_email: req.user.email,
//     client_reference_id: req.params.studioId,
//     line_items: [
//       {
//         name: `${studio.courseName} Studio`,
//         description: studio.summary,
//         images: [
//           `${req.protocol}://${req.get('host')}/img/studio/${studio.imageCover}`
//         ],
//         amount: studio.price * 100,
//         currency: 'usd',
//         quantity: 1
//       }
//     ]
//   });

//   // 3) Create session as response
//   res.status(200).json({
//     status: 'success',
//     session
//   });
// });

// const createBookingCheckout = async session => {
//   const studio = session.client_reference_id;
//   const user = (await User.findOne({ email: session.customer_email })).id;
//   const price = session.display_items[0].amount / 100;
//   await Booking.create({ studio, user, price });
// };

// const createBookingCheckout = async session => {
//   const tour = session.client_reference_id;
//   const user = (await User.findOne({ email: session.customer_email })).id;
//   const price = session.amount_total / 100;
//   await Booking.create({ tour, user, price });
// };

// exports.webhookCheckout = (req, res, next) => {
//   const signature = req.headers['stripe-signature'];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     return res.status(400).send(`Webhook error: ${err.message}`);
//   }

//   if (event.type === 'checkout.session.completed')
//     createBookingCheckout(event.data.object);

//   res.status(200).json({ received: true });
// };

exports.createAvailabilityException = factory.createOne(AvailabilityException);
exports.getAvailabilityException = factory.getOne(AvailabilityException);
exports.getAllAvailabilityExceptions = factory.getAll(AvailabilityException);
exports.updateAvailabilityException = factory.updateOne(AvailabilityException);
exports.deleteAvailabilityException = factory.deleteOne(AvailabilityException);
