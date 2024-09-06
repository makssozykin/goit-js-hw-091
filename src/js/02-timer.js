// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  calendar: document.getElementById('datetime-picker'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.button.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.button.disabled = false;
    }
  },
};

flatpickr(refs.calendar, options);

refs.button.addEventListener('click', onStart);

function onStart() {
  timerId = setInterval(() => {
    const countdown = new Date(refs.calendar.value) - new Date();
    if (countdown >= 0) {
      const { days, hours, minutes, seconds } = convertMs(countdown);
      refs.button.disabled = true;
      refs.days.textContent = days < 10 ? addLeadingZero(days) : days;
      refs.hours.textContent = hours < 10 ? addLeadingZero(hours) : hours;
      refs.minutes.textContent =
        minutes < 10 ? addLeadingZero(minutes) : minutes;
      refs.seconds.textContent =
        seconds < 10 ? addLeadingZero(seconds) : seconds;
    } else {
      Notiflix.Notify.info('Countdown finished');

      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
