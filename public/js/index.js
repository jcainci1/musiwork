/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { signup } from './signup';
import { updateSettings } from './updateSettings';
import { bookStudio } from './stripe';
import { showAlert } from './alerts';
import { navExtend } from './accountNav';
import { Console } from 'console';
// import {
//   load,
//   openModal,
//   closeModal,
//   saveEvent,
//   deleteEvent,
//   initButtons
// } from './calendar';
// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.getElementById('logout');
const phoneLogOutBtn = document.getElementById('phone-logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-studio');
const registerField = document.querySelector('.registration__field-8');
const newLessonFieldset = document.querySelector('.registration__field-7');
const firstStep = document.querySelector('.registration-student__1--p1');

/// ADD LESSON
const row = document.querySelector('#student__table');
const sideBarHover = document.querySelector('.user-view__menu');

/// PROGRESS BAR
const progress = document.querySelector('.progress-bar-step');
const progress_step = document.querySelectorAll('.progress-bar_li-span-number');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (phoneLogOutBtn) phoneLogOutBtn.addEventListener('click', logout);

const info_section = document.querySelectorAll('div .info__section');

// Load Calendar
// initButtons();
// load();
// ///PRIVATE LESSONS FORM

//Registration Class: Represents a registration

// class Registration {
//   constructor(fname, lname)
// }

//  Create unique ID

// function uuid() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = (Math.random() * 16) | 0,
//       v = c == 'x' ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }

// var userID = uuid();

// // Students Class

// class Registration {
//   constructor(
//     student_fname,
//     student_lname,
//     relation,
//     birthdate,
//     relation_text,
//     instrument,
//     exp_type,
//     exp_description,
//     lesson_freq,
//     lesson_dur,
//     lesson_startdate,
//     instructor,
//     lesson_time
//   ) {
//     userID = user_Id;
//     this.student_fname = student_fname;
//     this.student_lname = student_lname;
//     this.relation = relation;
//     this.birthdate = birthdate;
//     this.relation_text = relation_text;
//     this.instrument = instrument;
//     this.exp_type = exp_type;
//     this.exp_description = exp_description;
//     this.lesson_freq = lesson_freq;
//     this.lesson_dur = lesson_dur;
//     this.lesson_startdate = lesson_startdate;
//     this.instructor = instructor;
//     this.lesson_time = lesson_time;
//   }
// }

// // UI Class: Handle UI Students

// class UI {
//   static displayStudents() {
//     const students = Register.getStudents();

//     students.forEach(student => UI.addStudentToList(student));
//   }

//   static addStudentToList(student) {
//     const list = document.querySelector('#student-list');

//     const row = document.createElement('tr');
//     const name = `${student.student_fname}${student.student_lname}`.splice([0]);

//     row.innerHTML = `
//     <td>student &nbsp;${student.indexof + 1}</td>
//       <td>${name}</td>
//       <td>${student.instrument}</td>
//       <td>${student.instructor}</td>
//       <button class="info__student--button button__edit">Edit<svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-edit" viewBox="0 0 1000 1000"></use></svg></button>
//       <button class="info__student--button button__delete">Delete<svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-delete"></use></svg></button><svg class="info__student--label-svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-more-vertical"></use></svg>
//     `;

//     list.appendChild(row);
//   }

//   static deleteStudent(el) {
//     if (el.classList.contains('button__delete')) {
//       el.parentElement.parentElement.remove();
//     }
//   }

// static showAlert(message, className) {
//   const div = document.createElement('div');
//   div.className = `alert alert-${className}`;
//   div.appendChild(document.createTextNode(message));
//   const container = document.querySelector('.container');
//   const form = document.querySelector('#student-list');
//   container.insertBefore(div, form);

//   // Vanish in 3 seconds
//   setTimeout(() => document.querySelector('.alert').remove(), 3000);
// }

//   static clearFields() {
//     document.querySelector('input[name="Student"]:checked').value = '';
//     document.querySelector('#student-firstname').value = '';
//     document.querySelector('#student-lastname').value = '';
//     document.querySelector('#student-relationship').value = '';
//     document.querySelector('#student-birthdate').value = '';
//     document.querySelector('#student-instrument').value = '';
//     document.querySelector('#student-experience').value = '';
//     document.querySelector('#student-experience-description').value = '';
//     document.querySelector('#lesson-frequency').value = '';
//     document.querySelector('#lesson-duration').value = '';
//     document.querySelector('#student-date').value = '';
//     document.querySelector('#student-instructor').value = '';
//     document.querySelector('#student-time').value = '';
//   }
// }

// document.cookie = 'student_fname=Christie';
// var arr = ['Jarred', 'Christie', 'Brit'];
// var json_str = JSON.stringify(arr);
// Cookies.remove = 'student_fname';
// document.cookie('student_fname=', json_str);

function setCook(name, value, exdays) {
  var cookie = [name, '=', JSON.stringify(value)].join('');
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cookie + ';' + expires;
}

function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return JSON.parse(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

// setCook('student_fname', `Christie, Red, Jarred`);
// setCook('student_instructor', `Jane, John, George`);
// setCook('student_instrument', `viola, violin, voice`);
// let searchItem = cookieData.find(isItem);

// let fname = readCookie('student_fname');
// let instruct = readCookie('student_instructor');
// let instrum = readCookie('student_instrument');
// let names = obj.find(newItem);
// function newItem(product) {
// return product.qux === newItem.name;
// // }
// console.log(obj);
// // console.log(obj.find('qux'));
// console.log(ubj);
// console.log(obj.split(','));

// const fnames = fname.split(',');
// const instructs = instruct.split(',');
// const instrums = instrum.split(',');
// console.log(obj);
// document.cookie = ('student_fname', ['Jarred', 'Christie', 'Brit'], 50);
// const name = `${document.cookie.student_fname}${student.student_lname}`.splice([
//   0
// ]);

// function getCookie(fname) {
//   var cookieArr = document.cookie.split(';');
//   for (var i = 0; i < cookieArr.length; i++) {
//     var cookiePair = cookieArr[i].split('=');
//     if (fname == cookiePair[0].trim()) {
//       return decodeURIComponent(cookiePair[1]);
//     }
//   }
//   return null;
// }

// allCookies = document.cookie;

// //Form values
// // const form_admin = document.querySelector('input[class="Studet"]:checked')
// //   .value;
// const student_firstname = document.querySelector('#student-firstname').value;
// const student_lastname = document.querySelector('#student-lastname').value;
// const student_relationship = document.querySelector('.student-relationship')
//   .value;
// const student_birthdate = document.querySelector('#student-birthdate').value;
// const student_instrument = document.querySelector('#student-instrument').value;
// const student_experience = document.querySelector('#student-experience').value;
// const student_experience_description = document.querySelector(
//   '#student-experience-description'
// ).value;
// const student_lesson_frequency = document.querySelector('#lesson-frequency')
//   .value;
// const student_lesson_duration = document.querySelector('#lesson-duration')
//   .value;
// const student_date = document.querySelector('#student-date').value;
// const student_instructor = document.querySelector('.student-instructor').value;
// const student_time = document.querySelector('.student-time').value;

//Add cookies from form fields
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

// function setCookie(name, value) {
//   document.cookie =
//     name + '=' + escape(value) + '; path=/; expires=' + expiry.toGMTString();
// }

// function storeValues(form) {
//   setCookies('form_admin', form.form_admin.value);
//   setCookies('student_fname', form.student_firstname.value);
//   setCookies('student_lname', form.student_lastname.value);
//   setCookies('birthdate', form.student_birthdate.value);
//   setCookies('relation_text', form.student_relationship.value);
//   setCookies('instrument', form.student_instrument.value);
//   setCookies('exp_type', form.student_experience.value);
//   setCookies('exp_description', form.student_experience_description.value);
//   setCookies('lesson_freq', form.student_lesson_frequency.value);
//   setCookies('lesson_dur', form.student_lesson_duration.value);
//   setCookies('lesson_startdate', form.student_date.value);
//   setCookies('instructor', form.student_instructor.value);
//   setCookies('lesson_time', form.student_time.value);
// }
// student_fname === '' ||
//   student_lname === '' ||
//   relation === '' ||
//   birthdate === '' ||
//   relation_text === '' ||
//   instrument === '' ||
//   exp_type === '' ||
//   exp_description === '' ||
//   lesson_freq === '' ||
//   lesson_dur === '' ||
//   lesson_startdate === '' ||
//   instructor === '' ||
//   lesson_time;

//Parse cookies to HTML

// class Register {
//   static getStudents() {
//     let students;
//     if (localStorage.getItem('students') === null) {
//       students = [];
//     } else {
//       students = JSON.parse(localStorage.getItem('students'));
//     }

//     return students;
//   }

//   static addStudent(student) {
//     const students = Register.getStudents();
//     students.push(student);
//     localStorage.setItem('students', JSON.stringify(students));
//   }

//   static removeStudent(user_Id) {
//     const students = Register.getStudents();

//     students.forEach((student, index) => {
//       if (student.user_Id === user_Id) {
//         students.splice(index, 1);
//       }
//     });

//     localStorage.setItem('students', JSON.stringify(students));
//   }
// }

// // Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.displayStudents);

// // Event: Add a Book
// document.querySelector('#pl-form').addEventListener('submit', e => {
//   // Prevent actual submit
//   e.preventDefault();

// Get form values
// const form_admin = document.querySelector('input[name="Student"]:checked').value = '';
// document.querySelector('#student-firstname').value = '';
// document.querySelector('#student-lastname').value = '';
// document.querySelector('#student-relationship').value = '';
// document.querySelector('#student-birthdate').value = '';
// document.querySelector('#student-instrument').value = '';
// document.querySelector('#student-experience').value = '';
// document.querySelector('#student-experience-description').value = '';
// document.querySelector('#lesson-frequency').value = '';
// document.querySelector('#lesson-duration').value = '';
// document.querySelector('#student-date').value = '';
// document.querySelector('#student-instructor').value = '';
// document.querySelector('#student-time').value = '';

//   // Validate
//   if (
//     student_fname === '' ||
//     student_lname === '' ||
//     relation === '' ||
//     birthdate === '' ||
//     relation_text === '' ||
//     instrument === '' ||
//     exp_type === '' ||
//     exp_description === '' ||
//     lesson_freq === '' ||
//     lesson_dur === '' ||
//     lesson_startdate === '' ||
//     instructor === '' ||
//     lesson_time
//   ) {
//     UI.showAlert('fail', 'Please fill in all fields', 3);
//   } else {
//     // Instatiate book
//     const student = new Student(
//       student_fname,
//       student_lname,
//       relation,
//       birthdate,
//       relation_text,
//       instrument,
//       exp_type,
//       exp_description,
//       lesson_freq,
//       lesson_dur,
//       lesson_startdate,
//       instructor,
//       lesson_time
//     );

//     // Add Book to UI
//     UI.addStudentToList(student);

//     // Add book to store
//     Register.addStudent(student);

//     // Show success message
//     UI.showAlert('success', 'Student Added', 3);

//     // Clear fields
//     UI.clearFields();
//   }
// });

// // Event: Remove a Book
// document.querySelector('#student-list').addEventListener('click', e => {
//   // Remove book from UI
//   UI.deleteStudent(e.target);

//   // Remove book from store
//   Store.removeStudent(
//     e.target.parentElement.previousElementSibling.textContent
//   );

//   // Show success message
//   UI.showAlert('success', 'Student Removed', 3);
// });

// // const submitBtn = document.querySelectorAll('.submit');
// // const progress_li = document.querySelector('.progress-bar_li');
// // const fieldset = document.getElementsByTagName('fieldset');
// // let prevBtn = document.querySelectorAll('.previous');
// // let nextBtn = document.querySelectorAll('.next');

document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.matches('.next')) {
    changeStep('next');
    navSteps();
  }
  if (event.target.matches('.previous')) {
    changeStep('previous');
    navSteps();
  }
  if (event.target.matches('.checkout-option')) {
    changeStep('checkout');
    navSteps();
  }
  // if (
  //   event.target.matches(
  //     '.form__label--add, .form__input--add, .form__span--add'
  //   )
  // ) {
  //   // console.log('hi');

  //   let index = 0;
  //   // let addIndex = 0;
  //   // const addSteps = Array.from(document.querySelectorAll('.form__label--add'));
  //   // addIndex = addSteps.indexOf()
  //   const addBtn = document.querySelector('.form__label--add');
  //   // addBtn.remove();
  //   const active_fieldset = document.querySelector('.activeFieldset');
  //   const steps = Array.from(
  //     document.querySelectorAll('form .registration__field')
  //   );
  //   index = steps.indexOf(active_fieldset);
  //   steps[index].classList.remove('activeFieldset');
  // addStudent(index);
  // }
  if (event.target.matches('.addLesson')) {
    addLesson();
    navSteps();
  }
  // if (event.target.matches('info__section')) {
  //   return;
  // }
  if (!event.target.innerHTML.includes('studentInfo-1')) {
  } else {
    const info = document.querySelectorAll('.studentInfo-1');
    const infoRemove = document.querySelectorAll('.info__section');
    infoRemove.forEach(e => {
      e.classList.remove('info__active');
    });
  }
  if (event.target.matches('.button__edit')) {
    const editSection = document.querySelectorAll('.info__edit');
    const editBtn = document.querySelectorAll('.button__edit');
    editSection.forEach(e => {
      e.classList.remove('edit__active');
    });
    editBtn.forEach(item => {
      const index = Array.from(editBtn).indexOf(item);
      const editClass = Array.from(document.querySelectorAll('.info__edit'));
      editClass[index].classList.add('edit__active');
    });
  }
  // var deleteLesson = document.querySelectorAll('.button__delete');

  // Array.from(deleteLesson).forEach(lesson => {
  //   lesson.addEventListener;
  //   'click',
  //     function(event) {
  //       console.log(event);
  //       document.cookie = 'usernam=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  //       loadCookie();
  //     };
  // });
  // var deleteLesson = document.querySelectorAll('.button__delete');
  // const buttonDelete = document.querySelectorAll('.button__delete');

  // checks.forEach(function(check) {
  //   check.addEventListener('click', checkIndex);
  // });

  // function checkIndex(event) {
  //   console.log(Array.from(checks).indexOf(event.target));
  // }
  // if (event.target.closest('.button__delete')) {
  //   console.log(event);
  //   const buttonDelete = document.querySelectorAll('.button__delete');
  //   // const editBtn = document.querySelectorAll('.button__edit');
  //   buttonDelete.forEach(e => {
  //     console.log(e);
  //     // const index = Array.from(buttonDelete).indexOf(e);
  //     //       // checks.forEach(function(check) {
  //     //   check.addEventListener('click', checkIndex);
  //     // });
  //     // console.log(index);
  //     // console.log(this.buttonDelete);
  //     console.log(Array.from(buttonDelete).indexOf(event));
  //   });
  // editBtn.forEach(item => {
  //   const index = Array.from(editBtn).indexOf(item);
  //   const editClass = Array.from(document.querySelectorAll('.info__edit'));
  //   editClass[index].classList.add('edit__active');
  // });
  // Array.from(deleteLesson).forEach(lesson => {
  //   console.log(this.lesson);
  // });
  // }
  //   const studentInfo = document.querySelectorAll('.studentInfo');
  //   const deleteBtn = document.querySelectorAll('.button__delete');
  // }
  if (
    event.target.matches(
      '.info__student--label-svg, .info__student--label, .info__student--icon'
    )
  ) {
    const info = document.querySelectorAll('.info__student--label-svg');
    const infoRemove = document.querySelectorAll('.info__section');
    infoRemove.forEach(e => {
      e.classList.remove('info__active');
    });
    info.forEach(item => {
      const index = Array.from(info).indexOf(item);
      const infoClass = Array.from(document.querySelectorAll('.info__section'));
      infoClass[index].classList.add('info__active');
    });
  }
  if (
    event.target.matches(
      '.form__label--delete, .form__input--delete, .form__span--delete'
    )
  ) {
    const el = document.querySelectorAll('.info__section');
    console.log(event.target.outerHTML);
    var index = [...el].indexOf(
      event.target.outerHTML.classList.contains('info__section')
    );
    const deleteArray = Array.from(
      document.querySelectorAll('.delete-student')
    );

    console.log(deleteArray.indexOf(event.target));
  }
  // if (event.target.matches('.')
});

let currentActive = 1;

function navSteps() {
  const steps = Array.from(
    document.querySelectorAll('form .registration__field')
  );
  const active_fieldset = document.querySelector('.activeFieldset');
  const submit = document.querySelector('#submit');
  const next = document.querySelector('#next');
  const previous = document.querySelector('#previous');
  const formNav = document.querySelector('.formNav');

  // const newLesson = document.querySelector('#newLesson');
  // const newLesson = document.querySelector('form .registration__field-7');
  const stepsIndex = steps.indexOf(active_fieldset);
  console.log(steps.length);
  if (stepsIndex >= 1 && previous === null) {
    next.insertAdjacentHTML(
      'beforebegin',
      '<div class="btn-small btn-small__reg previous" id="previous">Previous</div>'
    );
  }
  if (stepsIndex < 1) {
    // formNav.parentNode.removeChild(previous);
    previous.remove();
    next.classList.add('.next-alone');
  }
  if (stepsIndex + 1 >= steps.length) {
    next.remove();
    previous.insertAdjacentHTML(
      'afterend',
      '<div class="btn-small btn-small__reg submit" id="submit">Submit</div>'
    );
  }

  // if (stepsIndex < 6) {
  //   newLesson.remove();
  //   previous.insertAdjacentHTML(
  //     'afterend',
  //     '<div class="btn-small btn-small__reg next id="next">Next</div>'
  //   );
  // }
  // if (stepsIndex > 6) {
  //   newLesson.remove();
  //   previous.insertAdjacentHTML(
  //     'afterend',
  //     '<div class="btn-small btn-small__reg next id="next">Next</div>'
  //   );
  // }
  // if (stepsIndex == 6 && newLesson === null) {
  //   next.remove();
  //   previous.insertAdjacentHTML(
  //     'afterend',
  //     '<div class="btn-small btn-small__reg addLesson next" id="newLesson">Add Lesson</div>'
  //   );
  // }
  if (stepsIndex + 1 < steps.length && next === null) {
    submit.remove();
    previous.insertAdjacentHTML(
      'afterend',
      '<div class="btn-small btn-small__reg next" id="next">Next</div>'
    );
  }
  console.log(stepsIndex);
  // const stepComplete = document.querySelectorAll(`.progress-span`);
  // console.log(document.querySelectorAll(`.progress-span`));
  // stepComplete.forEach(element => {
  //   console.log(stepsIndex);
  //
  // console.log(
  //   document.querySelectorAll(`.progress-bar-step li:nth-child(${stepsIndex})`)
  // );
  // document.querySelectorAll(
  //   `.progress-bar-step li:nth-child(${stepsIndex})`
  // ).style.cssText =
  //   'width: 9.7142857%; border-top: 1px solid #0c6a96; z-index: -2';
  //
  currentActive = stepsIndex;
  update();
}

function update() {
  progress_step.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
    // console.log(step.length);
    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / 7) * 100 + '%';
  });
}

//   }
// });

function changeStep(btn) {
  let index = 0;
  const active_fieldset = document.querySelector('.activeFieldset');
  const steps = Array.from(
    document.querySelectorAll('form .registration__field')
  );
  const registration_fieldset = document.getElementsByClassName(
    'registration__field'
  );
  index = steps.indexOf(active_fieldset);
  console.log(index);
  steps[index].classList.remove('activeFieldset');
  if (btn === 'next') {
    index++;
    registration_fieldset[index].classList.add('activeFieldset');
  } else if (btn === 'previous') {
    index = index - 1;
    registration_fieldset[index].classList.add('activeFieldset');
  } else if (btn === 'checkout') {
    index = 7;
    registerField.classList.add('activeFieldset');
    document
      .querySelector('.registration__field-7')
      .classList.remove('activeFieldset');
  }

  console.log(index);
  console.log(registration_fieldset[index]);
  // index = '';
}

// function removeElementsByClass(className) {
//   const elements = document.getElementsByClassName(className);
//   while (elements.length > 0) {
//     elements[0].parentNode.removeChild(elements[0]);
//   }
// }
const element = document.querySelector('.lesson');
//Get active table
const lessonHeader = document.querySelector('.lesson_header');
function loadCookie() {
  // Get table header
  const lessonCookie = document.querySelector('.lessonCookie');
  //delete current UI elements
  let elements = Array.from(document.querySelectorAll('.lesson'));
  console.log(element);
  console.log(elements);
  console.log(Array.from(document.querySelectorAll('.lesson')));
  console.log(document.querySelectorAll('.lesson'));
  console.log(elements.length);
  //table
  const tableHeader = `<tr class="lessonCookie"><th>Student</th><th>Instrument</th><th>Instructor</th><th></th></tr>`;

  if (element !== null) {
    element.remove();
    // tableHeader.remove();
  }
  if (elements.length > 0) {
    elements.forEach(elements => {
      elements.remove();
    });
  }

  //remove table
  // lessonHeader.classList.remove('student__table--active');
  console.log('yoyo');
  //Get values from form

  let sFnames = readCookie('student_fname');
  let sLnames = readCookie('student_lname');
  let sRelation = readCookie('student_relation');
  let sDOB = readCookie('student_birthdate');
  let sIntrum = readCookie('student_instrument');

  // setCookie();
  // setCookie();
  // setCookie();
  // setCookie();
  // setCookie();
  // setCookie();
  // setCookie();
  console.log(lessonCookie);
  if (readCookie('student_fname') !== null) {
    if (readCookie('student_fname').length > 0 && lessonCookie === null) {
      row.insertAdjacentHTML('afterbegin', tableHeader);
    }
  }
  if (Array.isArray(sFnames)) {
    // lessonHeader.classList.add('student__table--active');
    var lessons = [];
    const lessonAmount = sFnames.length;
    for (let i = 1; i <= lessonAmount; i++) {
      const input = `
        <tr class="lesson">
      <td>${sFnames[i - 1]}</td>
      <td>${sLnames[i - 1]}</td>
      <td>${sLnames[i - 1]}</td>
      <td class="student__buttons"><button class="student__button button__more"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-more-vertical"></use></svg></button><button class="student__button button__edit"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-edit" viewBox="0 0 1000 1000"></use></svg></button><button class="student__button button__delete"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-delete"></use></svg></button></td></tr>`;
      lessons.push(input);
    }
    row.insertAdjacentHTML('beforeend', lessons.join(''));
  } else if (sFnames !== null) {
    lessonHeader.classList.add('student__table--active');
    if (element !== null) {
      element.remove();
    }
    if (elements.length > 1) {
      elements.forEach(elements => {
        elements.remove();
      });
    }
    row.insertAdjacentHTML(
      'beforeend',
      `
  <tr class="lesson">
<td>${sFnames}</td>
<td>${sLnames}</td>
<td>${sLnames}</td>
<td class="student__buttons"><button class="student__button button__more"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-more-vertical"></use></svg></button><button class="student__button button__edit"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-edit" viewBox="0 0 1000 1000"></use></svg></button><button class="student__button button__delete"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-delete"></use></svg></button></td></tr>`
    );
  }
  // else if (typeof sFnames == 'undefined') {
  //   lessonHeader.classList.remove('student__table--active');
  // }
  if (newLessonFieldset) {
    newLessonFieldset.classList.remove('activeFieldset');
    firstStep.classList.add('activeFieldset');
    var btnDeleteRefresh = document.querySelectorAll('.button__delete');
    btnDeleteRefresh.forEach(function(check) {
      check.addEventListener('click', deleteLesson);
    });
  }
  if (readCookie('student_fname') !== null) {
    if (readCookie('student_fname').length === 0 && lessonCookie !== null) {
      console.log('123');
      lessonCookie.remove();
    }
  }
}
loadCookie();
function loadListener() {
  var btnrefreshDelete = document.querySelector('.button__delete');
  console.log(btnrefreshDelete);
  btnrefreshDelete.addEventListener('click', deleteLesson);
}

function addLesson() {
  //Form values
  // const form_admin = document.querySelector('input[class="Studet"]:checked')
  //   .value;
  const student_firstname = document.querySelector('#student-firstname').value;
  const student_lastname = document.querySelector('#student-lastname').value;
  const student_relationship = document.querySelector('.student-relationship')
    .value;
  const student_birthdate = document.querySelector('#student-birthdate').value;
  const student_instrument = document.querySelector('#student-instrument')
    .value;
  const student_experience = document.querySelector('#student-experience')
    .value;
  const student_experience_description = document.querySelector(
    '#student-experience-description'
  ).value;
  const student_lesson_frequency = document.querySelector('#lesson-frequency')
    .value;
  const student_lesson_duration = document.querySelector('#lesson-duration')
    .value;
  const student_date = document.querySelector('#student-date').value;
  const student_instructor = document.querySelector('.student-instructor')
    .value;
  const student_time = document.querySelector('.student-time').value;

  var fname = readCookie('student_fname');
  // console.log(fname.length);
  // console.log(Array.isArray(fname));
  // console.log(fname.length > 5);
  // const lessonAmount = fname.length;
  if (fname === null || fname === '') {
    console.log(fname);
    // let sFnamesArray = [];
    // let sLnamesArray = [];
    // let sRelationArray = [];
    // let sDOBArray = [];
    // let sIntrumArray = [];
    // let sFnames = readCookie('student_fname');
    // let sLnames = readCookie('student_lname');
    // let sRelation = readCookie('student_relation');
    // let sDOB = readCookie('student_birthdate');
    // let sIntrum = readCookie('student_instrument');
    // console.log(sFnames);
    // console.log(student_firstname.split(','));
    // const fNames = sFnamesArray.push(sFnames, student_firstname);
    // const lNames = sLnamesArray.push(sLnames, student_lastname);
    // const relations = sRelationArray.push(sRelation, student_relationship);
    // const bDates = sDOBArray.push(sDOB, student_birthdate);
    // const instrums = sIntrumArray.push(sIntrum, student_instrument);
    // console.log(fNames);
    // console.log(sFnamesArray);
    // setCook('student_fname', fNames);
    // setCook('student_lname', lNames);
    // setCook('student_relation', relations);
    // setCook('student_birthdate', bDates);
    // setCook('student-instrument', instrums);
    setCook('student_fname', student_firstname, 3);
    setCook('student_lname', student_lastname, 3);
    setCook('student_relation', student_relationship, 3);
    setCook('student_birthdate', student_birthdate, 3);
    setCook('student_instrument', student_instrument, 3);
    loadCookie();
  } else {
    if (Array.isArray(fname) && fname.length >= 5) {
      changeStep('checkout');
      showAlert('access-denied', 'Cannot add more than 5 students at a time');
    } else if (Array.isArray(fname) && fname.length > 1) {
      console.log(fname.length);
      let sFnamesArray = [];
      let sLnamesArray = [];
      let sRelationArray = [];
      let sDOBArray = [];
      let sIntrumArray = [];
      let sFnames = readCookie('student_fname');
      let sLnames = readCookie('student_lname');
      let sRelation = readCookie('student_relation');
      let sDOB = readCookie('student_birthdate');
      let sIntrum = readCookie('student_instrument');
      console.log(sFnames);
      // console.log(sFnamesArray.split(','));
      const fNames = sFnamesArray.push(sFnames, student_firstname);
      const lNames = sLnamesArray.push(sLnames, student_lastname);
      const relations = sRelationArray.push(sRelation, student_relationship);
      const bDates = sDOBArray.push(sDOB, student_birthdate);
      const instrums = sIntrumArray.push(sIntrum, student_instrument);
      console.log(fNames);
      console.log(sFnamesArray);
      setCook('student_fname', sFnamesArray.flat(), 3);
      setCook('student_lname', sLnamesArray.flat());
      setCook('student_relation', sRelationArray.flat(), 3);
      setCook('student_birthdate', sDOBArray.flat(), 3);
      setCook('student_instrument', sIntrumArray.flat(), 3);
      // const fnames = fname.split(',');

      loadCookie();
      // else if (
      //   student_firstname === '' ||
      //   student_lastname === '' ||
      //   student_relationship === '' ||
      //   student_birthdate === '' ||
      //   student_instrument === '' ||
      //   student_experience === '' ||
      //   // student_experience_description === '' ||
      //   student_lesson_frequency === '' ||
      //   student_lesson_duration === '' ||
      //   student_date === '' ||
      //   student_instructor === '' ||
      //   student_time === ''
      // ) {
      //   cl
      //   return 'all fields must be completed';
      // }
      // } else {
      //   // if (student_experience_description === '') {
      //   //   student_experience_description.value = 'No Content';
      //   // }
      //   console.log('sfe');
      //   setCook('student_fname', student_firstname);
      //   setCook('student_lname', student_lastname);
      //   setCook('student_relation', student_relationship);
      //   setCookie('student_birthdate', student_birthdate);
      //   setCookie('student-instrument', student_instrument);
      //   loadCookie();
      // }
    } else {
      let sFnamesArray = [];
      let sLnamesArray = [];
      let sRelationArray = [];
      let sDOBArray = [];
      let sIntrumArray = [];
      let sFnames = readCookie('student_fname');
      let sLnames = readCookie('student_lname');
      let sRelation = readCookie('student_relation');
      let sDOB = readCookie('student_birthdate');
      let sIntrum = readCookie('student_instrument');
      console.log(sFnames);
      console.log(student_firstname.split(','));
      const fNames = sFnamesArray.push(sFnames, student_firstname);
      const lNames = sLnamesArray.push(sLnames, student_lastname);
      const relations = sRelationArray.push(sRelation, student_relationship);
      const bDates = sDOBArray.push(sDOB, student_birthdate);
      const instrums = sIntrumArray.push(sIntrum, student_instrument);
      console.log(sFnamesArray.flat());
      console.log(fNames);
      setCook('student_fname', sFnamesArray.flat(), 3);
      setCook('student_lname', sLnamesArray.flat(), 3);
      setCook('student_relation', sRelationArray.flat(), 3);
      setCook('student_birthdate', sDOBArray.flat());
      setCook('student_instrument', sIntrumArray.flat(), 3);

      // console.log(lessonsLength);
      // const fnames = fname.split(',');

      loadCookie();
      loadListener();
    }
  }
  // var btnDelete = document.querySelectorAll('.button__delete');

  // btnDelete.forEach(function(check) {
  //   check.addEventListener('click', deleteLesson);
  // });
}
// checkCookie();

// function deleteLesson() {}
function updateLesson() {}
//   } else if (fname != null) {
//     row.insertAdjacentHTML(
//       'beforeend',
//       `
//       <tr>
//     <td>${sFnames}</td>
//     <td>${sLnames}</td>
//     <td>${sLnames}</td>
//     <td class="student__buttons"><button class="student__button button__more"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-more-vertical"></use></svg></button><button class="student__button button__edit"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-edit" viewBox="0 0 1000 1000"></use></svg></button><button class="student__button button__delete"><svg class="info__student--svg"><use class="info__student--icon" xlink:href="/img/icons/icon.svg#icon-delete"></use></svg></button></td></tr>`
//     );
//   } else if ((fname = null)) {
//     return;
//     // } else {
//     //   user = prompt('Please enter your name:', '');
//     //   if (user != '' && user != null) {
//     //     setCookie('username', user, 365);
//     //   }
//   }
// checkCookie();

// function addStudent(index) {
//   let students = Array.from(document.querySelectorAll('form student'));
//   let currentStudent = students.length;
//   let student = document.querySelector(`.student-${currentStudent}`);
//   let studentInfo = document.querySelector(`.studentInfo-${currentStudent}`);
//   let studentIndex = students.length + 1;

// student.insertAdjacentHTML(
//   'afterend',

// );
// studentInfo.insertAdjacentHTML(
//   'afterend',
// `<div class="info__section studentInfo-${studentIndex} "><div class="info__price info">$0<span>&nbsp;/&nbsp;lesson</span><svg class="info__popup--icon-svg info__popup-dur"><use class="info__popup--icon" xlink:href="/img/icons/icon.svg#icon-info"></use></svg><div class="info__label info__popup info__popup-dur--text">For recurring lessons, this is a semester long commitment.  You can pay for the entire semester or on a monthly basis(pro-rated if needed for first and last month).  You</div></div><div class="includes info">Free 30-minute trial<svg class="info__popup--icon-svg info__popup-trial"><use class="info__popup--icon" xlink:href="/img/icons/icon.svg#icon-info"></use></svg><div class="info__label info__popup info__popup-trial--text">Your first lesson will be a 30-minute free trial lesson. <p>You will have 2 days after this scheduled lesson to cancel or change instructors.  We will send you a follow-up email directly after your lesson if you wish to take action on a cancelation or swap!</p></div></div><div class="semester-end-date info">Last lesson of semester: <span>&nbsp;June 5th</span><svg class="info__popup--icon-svg info__popup-ll"><use class="info__popup--icon" xlink:href="/img/icons/icon.svg#icon-info"></use></svg><div class="info__label info__popup info__popup-ll--text">This would be your last lesson of the semester, given the frequency you chose.</div></div><div class="recital-dates info">Recital dates:&nbsp; <span> June 5th, 2022</span><span>&nbsp;and June 6th, 2022</span><svg class="info__popup--icon-svg info__popup-rec"><use class="info__popup--icon" xlink:href="/img/icons/icon.svg#icon-info"></use></svg><div class="info__label info__popup info__popup-rec--text"><span>Students&nbsp;</span> are eligible to perform in our seasonal recital. Our recital dates are&nbsp;<span>June 5th, 2022</span><span>&nbsp;and June 6th, 2022</span><p>You will have the option to claim your recital date once enrolled.</p></div></div><div class="delete-student"><label class="form__label--option form__label--delete" for="delete-student">Student ${studentIndex} <span>:&nbsp;Jarred</span><input class="form__input--option form__input--delete" type="checkbox" name="add-student"><span class="form__span--delete delete-${studentIndex}">−</span></label></div></div>`;
// );
// [...prevBtn], [...nextBtn];
// studentArray.push('student');
// }

// const checkboxes = document.getElementsByTagName('input');

// checkboxes.preventDefault();
// prevBtn = document.querySelectorAll('.previous');
// nextBtn = document.querySelectorAll('.next');

// // SIGNUP FORM
// if (registerForm)
//   registerForm.addEventListener('submit', async e => {
//     e.preventDefault();
//     let firstName = document.getElementById('first_name').value;
//     let lastName = document.getElementById('last_name').value;
//     const name = firstName + ' ' + lastName;
//     const phone = document.getElementById('phone_number').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const passwordConfirm = document.getElementById('confirm_password').value;
//     await signup({ name, email, phone, password, passwordConfirm });
//   });

// if (userDataForm)
//   userDataForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const form = new FormData();
//     form.append('name', document.getElementById('name').value);
//     form.append('email', document.getElementById('email').value);
//     form.append('photo', document.getElementById('photo').files[0]);

//     updateSettings(form, 'data');
//   });

// if (userPasswordForm)
//   userPasswordForm.addEventListener('submit', async e => {
//     e.preventDefault();
//     document.querySelector('.btn--save-password').textContent = 'Updating...';

//     const passwordCurrent = document.getElementById('password-current').value;
//     const password = document.getElementById('password').value;
//     const passwordConfirm = document.getElementById('password-confirm').value;
//     await updateSettings(
//       { passwordCurrent, password, passwordConfirm },
//       'password'
//     );

//     document.querySelector('.btn--save-password').textContent = 'Save password';
//     document.getElementById('password-current').value = '';
//     document.getElementById('password').value = '';
//     document.getElementById('password-confirm').value = '';
//   });

// if (bookBtn)
//   bookBtn.addEventListener('click', e => {
//     e.target.textContent = 'Processing...';
//     const { studioId } = e.target.dataset;
//     bookStudio(studioId);
//   });

// const alertMessage = document.querySelector('body').dataset.alert;
// if (alertMessage) showAlert('success', alertMessage, 20);

var btnDelete = document.querySelectorAll('.button__delete');

btnDelete.forEach(function(check) {
  check.addEventListener('click', deleteLesson);
});

function deleteLesson(event) {
  var btnDelete = document.querySelectorAll('.button__delete');
  // console.log(event);
  const index = Array.from(btnDelete).indexOf(
    event.target.closest('.button__delete')
  );
  const btn = Array.from(btnDelete);
  console.log(btn);
  const length = btnDelete.length;
  if (btn.length > 1) {
    console.log(btnDelete);

    const index = Array.from(btnDelete).indexOf(
      event.target.closest('.button__delete')
    );
    console.log(index);
    var sFnamesHold = [];
    var sLnamesHold = [];
    var sRelationHold = [];
    var sDOBHold = [];
    var sIntrumHold = [];
    const sFnames = readCookie('student_fname');
    const sLnames = readCookie('student_lname');
    const sRelation = readCookie('student_relation');
    const sDOB = readCookie('student_birthdate');
    const sIntrum = readCookie('student_instrument');
    sFnames.splice(index, 1);
    sLnames.splice(index, 1);
    sRelation.splice(index, 1);
    sDOB.splice(index, 1);
    sIntrum.splice(index, 1);

    sFnamesHold = sFnames;
    sLnamesHold = sLnames;
    sRelationHold = sRelation;
    sDOBHold = sDOB;
    sIntrumHold = sIntrum;
    console.log(sFnames);
    console.log(sFnamesHold);
    document.cookie = 'student_fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'student_lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_relation=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_birthdate=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_instrument=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    console.log(sFnamesHold);
    console.log(index + 1);
    console.log(index);
    console.log(sIntrum.splice(index, 1));
    console.log(sDOB.splice(index, 1));
    setCook('student_fname', sFnamesHold);
    setCook('student_lname', sLnamesHold);
    setCook('student_relation', sRelationHold);
    setCook('student_birthdate', sDOBHold);
    setCook('student_instrument', sIntrumHold);
  } else {
    console.log(btnDelete);

    document.cookie = 'student_fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'student_lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_relation=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_birthdate=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'student_instrument=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  }
  loadCookie();
}
