let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(s) {
   // clear any existing timers
   clearInterval(countdown);

   const now = Date.now();
   const then = now + s * 1000;
   displayTimeLeft(s);
   displayEndTime(then);

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it
      if (secondsLeft <= 0) {
         clearInterval(countdown);
         return;
      }
      // display it
      displayTimeLeft(secondsLeft);
   }, 1000)
}

function displayTimeLeft(s) {
   const minutes = Math.round(s / 60);
   const remainderSeconds = s % 60;
   const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
   document.title = display;
   timerDisplay.textContent = display;

}

function displayEndTime(timestamp) {
   const end = new Date(timestamp);
   const hours = end.getHours();
   const adjustedHour = hours > 12 ? hours - 12 : hours;
   const minutes = end.getMinutes();
   endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}


function startTimer() {
   const seconds = parseInt(this.dataset.time);
   timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const mins = this.minutes.value;
   timer(mins * 60);
   this.reset();

})