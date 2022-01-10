const courseSchema = new mongoose.Schema
courseName
courseType
slug
instrument
ageGroup
duration
frequency
maxGroupSize
difficulty
ratingsAverage
ratingsQuantity
price
priceDiscount
summary
description
curriculumDescription
studioPolicy
imageCover
images: [String],
createdAt
courseTimePeriod
courseSeason
startDates: [Date],
endDates
courseTime: Date,
courseTimes: [Date],
instructor
virtual
courseLocation
recital
recitalDate
recitalLocation

[
{
"courseName": The Recitalist,
"courseType": Private Lessons,
"instrument": ["Viola", "Violin"],
"ageGroup": All,
"ratingsAverage": 4.8,
"ratingsQuantity": 6,
"images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
"startDates": [
"2021-06-19T09:00:00.000Z",
"2021-07-20T09:00:00.000Z",
"2021-08-18T09:00:00.000Z"
],
"\_id": "5c88fa8cf4afda39709c2955",
"courseDuration": 30,
"courseFrequency": weekly,
"maxGroupSize": 1,
"difficulty": "beginner",
"instructor": ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
"price": 50,
"summary": "Learn the fundamentals of classical violin and/or viola performance. My content is designed for all age groups!",
"description": "Start the fun and become the musician you always envisioned for yourself! With my guidance, I believe anyone can start their journey to mastering the instument and exposing themselves to the most exciting repertoire. \nOne to one training with a seasoned classical performance professional. Access to a virtual platform to get the most out of your time. My curriculum is meant to be self paced. Whether you are seeking to learn the classical genre,play your favorite pieces on occasion, or take your talent to the competitive level, this is where you can accomplish your goals. I have carefully devised a lesson plan which can be customized to each students learning pattern. My intention is to provide exceptional mentorship, with positivity and encouragment being front of mind",
"curriculumDescription": "For the Recitalist, my goal is to impart a lasting impretion of technique, music theory and the scale system. For technique, I use the Suzuki method repertoire as our basis. Upon request, we can divert to other popular repertoire for to put this system into perspective",
"studioPolicy": "tour-2-cover.jpg",
"courseTimePeriod": semester,
"virtual": true,
"imageCover": "tour-2-cover.jpg"
"recital": true,
"recitalDates": "2022-05-25T09:00:00.000Z"
},
{
"courseName": The Recitalist,
"courseType": Private Lessons,
"instrument": ["Viola", "Violin"],
"ageGroup": All,
"ratingsAverage": 4.8,
"ratingsQuantity": 6,
"images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
"startDates": [
"2021-06-19T09:00:00.000Z",
"2021-07-20T09:00:00.000Z",
"2021-08-18T09:00:00.000Z"
],
"\_id": "5c88fa8cf4afda39709c2955",
"courseDuration": 30,
"courseFrequency": weekly,
"maxGroupSize": 1,
"difficulty": "beginner",
"instructor": ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
"price": 50,
"summary": "Learn the fundamentals of classical violin and/or viola performance. My content is designed for all age groups!",
"description": "Start the fun and become the musician you always envisioned for yourself! With my guidance, I believe anyone can start their journey to mastering the instument and exposing themselves to the most exciting repertoire. \nOne to one training with a seasoned classical performance professional. Access to a virtual platform to get the most out of your time. My curriculum is meant to be self paced. Whether you are seeking to learn the classical genre,play your favorite pieces on occasion, or take your talent to the competitive level, this is where you can accomplish your goals. I have carefully devised a lesson plan which can be customized to each students learning pattern. My intention is to provide exceptional mentorship, with positivity and encouragment being front of mind",
"curriculumDescription": "For the Recitalist, my goal is to impart a lasting impretion of technique, music theory and the scale system. For technique, I use the Suzuki method repertoire as our basis. Upon request, we can divert to other popular repertoire for to put this system into perspective",
"studioPolicy": "tour-2-cover.jpg",
"courseTimePeriod": semester,
"virtual": true,
"imageCover": "tour-2-cover.jpg"
"recital": true,
"recitalDates": "2022-05-25T09:00:00.000Z"
},
