const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const previousNextDateIcons = document.querySelectorAll(".date-icons span");
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateofMonth
    ).getDay(),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive"><p class="day-num">${
      lastDateofLastMonth - i + 1
    }</p></li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "current-day"
        : "current-month";
    liTag += `<li class="${isToday}"><p class="day-num">${i}</p></li>`;
    console.log(isToday);
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive"><p class="day-num">${
      i - lastDayofMonth + 1
    }</p></li>`;
  }
  currentDate.innerText = `${months[currentMonth]}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();
previousNextDateIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth =
      icon.id === "arrow-left" ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth, new Date().getDate());
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
