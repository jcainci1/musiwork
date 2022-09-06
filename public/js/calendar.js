///Calendar

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events'))
  : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const customRecurrence = document.getElementById('custom_recurrence');
const availabilityModal = document.getElementById('availability__modal');
const recurringDone = document.getElementById('recurring--done');
const recurringCancel = document.getElementById('recurring--cancel');
const recurringInfo = document.getElementById('recurring-info');
const availabilityCancel = document.getElementById('availability__cancel');
const availabilityRecurring = document.querySelector(
  '.availability__recurring'
);
const availabilityNotRecurring = document.querySelector(
  '.availability__not-recurring'
);
const endDateRecurring = document.getElementById('end_date_recurring');
const frequencyNumber = document.querySelector('#repeat_number');
const frequencyTerm = document.querySelector('#recurring_frequency');

/// Monthly View Schedule

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

//Monthly Dislay

function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById(
    'monthDisplay'
  ).innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document
    .getElementById('deleteButton')
    .addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}
// startDate: Date()
// endDate: Date()
// interval: Number() number of days between recurring dates
function recurringDates(startDate, endDate, interval) {
  // initialize date variable with start date
  var date = startDate;
  // create array to hold result dates
  var dates = [];

  // check for dates in range
  while ((date = addDays(date, interval)) < endDate) {
    // add new date to array
    dates.push(date);
  }

  // return result dates
  console.log(dates);
  return dates;
}

function addDays(date, days) {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

// var startDate = new Date(2015, 0, 1);
// var endDate = new Date(2016, 0, 1);
// var interval = 20;
let startDates = '2021-01-28T00:00:00.000Z';
let endDates = '2021-03-01T00:00:00.000Z';
// let dateseses = dateses.split('-');
// new Date(dateseses[0], dateseses[1], dateseses[2]);

function recurringDates(startDate, endDate, interval) {
  // initialize date variable with start date
  var date = new Date(startDate);
  var enddate = new Date(endDate);
  // create array to hold result dates
  var dates = [];

  // check for dates in range
  while ((date = addDays(date, interval)) < enddate) {
    // add new date to array
    dates.push(date);
  }

  // return result dates
  dates.forEach(function(element) {
    dates.push(element.toISOString().split('T')[0]);
  });
  console.log(dates);
  return dates;
}

function addDays(date, days) {
  var newDate = new Date(date);
  console.log(newDate);
  console.log(date);
  newDate.setDate(date.getDate() + days);
  console.log(newDate);
  return newDate;
}

// return (starts = '2021-12-28'), (ends = '2021-03-01');
// return (this.start_dates = '2021-12-28'), (this.end_dates = '2021-03-01');
// return dates;
// console.log(starts);
function makeDate(dote) {
  // let datese = this.start_times;
  dote.toString();
  let dateseses = dote.toString().split('-');
  var result = dateseses.map(function(x) {
    return parseInt(x, 10);
  });
  const results = new Date(result[0], result[1] - 1, result[2]);
  return results;
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

let startDate = makeDate(startDates);
let endDate = makeDate(endDates);
console.log(startDate.toISOString().split('T')[0]);
// let startD = formatDate(startDates);
// let endD = formatDate(endDate);
console.log(formatDate(endDate));
console.log(recurringDates(startDates, endDates, 7));
// let rata = [];
// await startDates.forEach(function(element) {
//   rata.push(element.formatDate(element));
// });
// startDates.forEach(function(element) {
//   rata.push(element.toISOString().split('T')[0]);
// });
// console.log(formatDate(news));
// console.log(new Date(result[0], result[1] - 1, result[2]));

// var startDate = new Date(2015, 0, 1, 20);
// console.log(new Date(2020, 5, 19, 25));
// var endDate = new Date(2016, 0, 7, 20, 0, 1);
// var interval = 7;
// let rates = recurringDates(startDate, endDate, interval);
// console.log(rates);
// da = new Date();
// console.log(da.toISOString().split('T')[0]);

// let rata = [];
// rates.forEach(function(element) {
//   // element.toISOString().split('T')[0];
// });

// console.log(rata);

// console.log(ratat);

initButtons();
load();

///Update availability functionality

recurringCancel.addEventListener('click', () => {
  customRecurrence.classList.remove('custom_recurrence--active');
  recurringInfo.selectedIndex = 1;
});

availabilityCancel.addEventListener('click', () => {
  availabilityModal.classList.remove('availability__modal--active');
});

availability__update.addEventListener('click', () => {
  availabilityModal.classList.add('availability__modal--active');
});

recurringInfo.addEventListener('input', function(e) {
  if (e.target.value === 'custom') {
    customRecurrence.classList.add('custom_recurrence--active');
  }
});

recurringInfo.addEventListener('input', function(e) {
  if (
    e.target.value === 'does_not_repeat' &&
    !availabilityNotRecurring.classList.contains('availability__active')
  ) {
    availabilityRecurring.classList.remove('availability__active');
    availabilityNotRecurring.classList.add('availability__active');
  } else if (
    e.target.value !== 'does_not_repeat' &&
    !availabilityRecurring.classList.contains('availability__active')
  ) {
    availabilityNotRecurring.classList.remove('availability__active');
    availabilityRecurring.classList.add('availability__active');
  }
});

/// Recurring end on

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var yyyyAdd = today.getFullYear() + 3;

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
maxDate = yyyyAdd + '-' + mm + '-' + dd;
document.getElementById('recurrence-end__on-date').setAttribute('min', today);
document.getElementById('recurrence-end__on-date').setAttribute('max', maxDate);

/// Submit recurring availability

const customRecurringSubmit = document.querySelector('#recurring--done');

function addRecurringItems() {
  const frequencyNumber = document.querySelector('#repeat_number').value;
  const frequencyTerm = document.querySelector('#recurring_frequency');
  const daysChecked = Array.from(
    document.querySelectorAll('.checkbox--input__recurring-day')
  );
  const recurringEndOn = document.querySelector('#recurring__end--on');
  const occurenceAfter = document.querySelector('#recurring__end--after');
  var elements = [];
  if (frequencyNumber > 0) {
    const numberIf = frequencyNumber > 1 ? frequencyNumber + ' ' : '';
    elements.push(
      `Repeats Every ${numberIf}${
        frequencyTerm.options[frequencyTerm.selectedIndex].text
      }`
    );
  }
  if (recurringEndOn.checked) {
    endDateRecurring.value = document.querySelector(
      '#recurrence-end__on-date'
    ).value;
  }

  if (occurenceAfter.checked) {
    const occurenceAmount = document.querySelector(
      '#recurring__end--after-occurances'
    ).value;
    if (occurenceAmount > 1) {
      elements.push(`${occurenceAmount} occurences`);
    }
    if (occurenceAmount == 1) {
      elements.push(`${occurenceAmount} occurence`);
    }
  }
  daysChecked.forEach(function(el) {
    if (el.checked) {
      elements.push(el.name);
      console.log(elements);
      // elements = el.push;
      if (elements.length > 1) {
        localStorage.setItem('recurring', JSON.stringify(elements));
      } else if (elements.length === 1) {
        localStorage.setItem('recurring', elements);
      }
    }
  });
}

for (var i = 0, len = localStorage.length; i < len; ++i) {
  console.log(localStorage.getItem(localStorage.key(i)));
}

customRecurringSubmit.addEventListener('click', addRecurringItems);

frequencyNumber.addEventListener('input', function(e) {
  const freqTermChange = document.querySelectorAll('.freq__term');
  var lastLetters = Array.from(freqTermChange).map(i => i.innerHTML.slice(-1));
  // var nodes = document.querySelectorAll('.freq__term');
  // var list = [].slice.call(nodes);
  if (
    (e.target.value > 1 || e.target.value == '0' || e.target.value == '') &&
    lastLetters[0] != 's'
  ) {
    Array.from(freqTermChange).map(e => (e.innerHTML += 's'));
  }
  if (e.target.value <= 1 && lastLetters[0] == 's') {
    Array.from(freqTermChange).map(
      e => (e.innerHTML = e.innerHTML.slice(0, -1))
    );
  }
});

const occurenceName = document.getElementById('occurence__name');
const occurenceNumber = document.getElementById(
  'recurring__end--after-occurances'
);

occurenceNumber.addEventListener('input', function(e) {
  if (e.target.value == 1) {
    occurenceName.textContent = 'occurence';
  } else if (
    e.target.value > 1 ||
    e.target.value == '0' ||
    e.target.value == ''
  ) {
    occurenceName.textContent = 'occurences';
  }
});

const doesNotRepeat = document.getElementById('does-not-repeat__option');

console.log(JSON.parse(localStorage.getItem('recurring')));

function getRecurringOptions() {
  var getCustomRecurring = JSON.parse(localStorage.getItem('recurring'));
  var daysAbbreviated = [];
  getCustomRecurring.forEach((element, index) => {
    if (element.includes('occurence')) {
      return (occurenceIndex = index);
    } else {
      occurenceIndex = 0;
    }
    if (element.includes('Repeats')) {
      console.log(index);
      return (repeatIndex = index);
    }
  });
  console.log(repeatIndex);
  console.log(getCustomRecurring);
  var recurringArrayLength = getCustomRecurring.length;
  var daysOfWeekRecurring = getCustomRecurring.slice(
    occurenceIndex + 1,
    recurringArrayLength
  );
  daysOfWeekRecurring.forEach((element, index) => {
    if (element.includes('Tuesday') || element.includes('Thursday')) {
      daysAbbreviated.push(element.slice(0, 2));
      console.log(daysAbbreviated);
    } else {
      daysAbbreviated.push(element.slice(0, 1));
    }
    return daysAbbreviated;
  });
  console.log(daysAbbreviated);

  if (daysOfWeekRecurring.length === 7) {
    daysAbbreviated = 'Daily';
  }
  const templateStringName =
    getCustomRecurring[repeatIndex] +
    (occurenceIndex > 0 ? +', ' + getCustomRecurring[occurenceIndex] : ' ') +
    ': ' +
    daysAbbreviated.join(', ');
  console.log(templateStringName);
  if (getCustomRecurring) {
    var option = `
      <option id="custom__recurring" value="${templateStringName}">
        ${templateStringName}
      </option>`;

    doesNotRepeat.insertAdjacentHTML('afterend', option);
  }
}

getRecurringOptions();

// #repeat_number
// #recurring_frequency
// .checkbox--input__recurring-day
// recurring__end--on
// recurrence-end__on-date
// recurring__end--after
// recurring__end--after-occurances
