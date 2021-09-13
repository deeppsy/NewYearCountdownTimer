const present_date = new Date();
const newYears = new Date(present_date.getFullYear() + 1, 0, 1);

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

function changeValues(days, hours, minutes, seconds) {
  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");
  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const timeDifference = newYearsDate - currentDate;
  const totalSeconds = timeDifference / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  changeValues(days, hours, minutes, seconds);
}

// call it first once
countdown();

setInterval(() => {
  countdown();
}, 1000);
