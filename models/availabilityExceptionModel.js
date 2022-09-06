const mongoose = require('mongoose');

const availabilityExceptionSchema = new mongoose.Schema({
  exception_name: {
    type: String
  },
  exception_Description: {
    type: String
  },
  exception_Message: {
    type: String
  },
  studio: {
    type: mongoose.Schema.ObjectId,
    ref: 'Studio'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  allUsers: {
    type: Boolean
  },
  all_day: {
    type: Boolean,
    default: false
  },

  exception_type: {
    type: String,
    enum: [
      'holiday',
      'religious-holiday',
      'national-holiday',
      'international-holiday',
      'ethnic-holiday',
      'custom-holiday',
      'user-unavailable',
      'instructor-unavailable',
    ]

    // exception_start_date: {
    //   type: [Date]
    // },
    // exception_end_date: {
    //   type: [Date]
    // },
    // exception_start_time: {
    //   type: [Date]
    // },
    // exception_end_time: {
    //   type: [Date]
    // }
  },
  holiday_name: String,
  holiday_description: String,
  paid: {
    type: Boolean,
    default: false
  },
  attended: {
    enum: [
      'No information',
      'No attendance',
      'instructor-cancel',
      'instructor-noshow',
      'user-noshow'
    ]
  },
  availability_exception: [
    {
      recurring_exception: Boolean,
      location_type: {
        type: String,
        enum: [
          'virtual',
          'location',
          'location_vender',
          'student_home',
          'teacher_home'
        ],
        default: 'virtual'
      },
      location: [String],
      commute_time_to: [Number],
      commute_time_from: [Number],
      repeat_frequency: {
        type: String,
        enum: [
          'daily',
          'every_other_day',
          'every_third_day',
          'every_fourth-day',
          'every_fifth_day',
          'every_sixth_day',
          'weekly',
          'two_weeks',
          'three_weeks',
          'four_weeks',
          'quarterly',
          'semi-annually',
          'annually'
        ]
      },
      day: {
        type: [String],
        enum: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ]
      },
      exception_start_hours: {
        type: [Number],
        min: 0,
        max: 23
      },
      exception_start_minutes: {
        type: [Number],
        enum: [0, 15, 30, 45]
      },
      exception_end_hours: {
        type: [Number],
        min: 0,
        max: 23
      },
      exception_end_minutes: {
        type: [Number],
        enum: [0, 15, 30, 45]
      },
      exception_start_date: [Date],
      exception_end_date: [Date],
      exception_all_start_dates: [Date],
      exception_all_end_dates: [Date],
      reschedule_start_hours: {
        type: [Number],
        min: 0,
        max: 23
      },
      reschedule_start_minutes: {
        type: [Number],
        enum: [0, 15, 30, 45]
      },
      reschedule_end_hours: {
        type: [Number],
        min: 0,
        max: 23
      },
      reschedule_end_minutes: {
        type: [Number],
        enum: [0, 15, 30, 45]
      },
      reschedule_start_date: [Date],
      reschedule_end_date: [Date],
      reschedule_all_start_dates: [Date],
      reschedule_all_end_dates: [Date]
    }
  ],
  availability: {
    type: mongoose.Schema.ObjectId,
    ref: 'Availability'
  },
  registration: {
    type: mongoose.Schema.ObjectId,
    ref: 'Registration'
  },
  instructorSetting: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'InstructorSettings'
    }
  ],
  exception_start_dates: [Date],
  exception_end_dates: [Date],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// availabilityExceptionSchema.pre(/^find/, function(next) {
//   this.populate('user').populate({
//     path: 'studio',
//     select: 'courseName'
//   });
//   next();
// });

// availabilityExceptionSchema.pre(/^find/, function(next) {
//   this.populate('allUsers').populate({
//     path: 'user',
//     select: 'name'
//   });
//   next();
// });

const AvailabilityException = mongoose.model(
  'AvailabilityException',
  availabilityExceptionSchema
);

module.exports = AvailabilityException;
