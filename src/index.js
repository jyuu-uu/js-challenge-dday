import "./styles.css";

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dTime = document.createElement("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();

  const dDay = getDays(now) + xmasDay.getDate() - now.getDate();
  const dHour = 24 - now.getHours() - 1;
  const dMinute = 60 - now.getMinutes() - 1;
  const dSecond = 60 - now.getSeconds();
  dTime.innerText = `${dDay < 10 ? `0${dDay}` : dDay}d ${
    dHour < 10 ? `0${dHour}` : dHour
  }h ${dMinute < 10 ? `0${dMinute}` : dMinute}m ${
    dSecond < 10 ? `0${dSecond}` : dSecond
  }s`;
}

function getDays(now) {
  let tmp = 0;
  for (let i = now.getMonth(); i < days.length - 1; i++) {
    tmp += days[i];
  }
  return tmp;
}

function init() {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.innerText = "Time Until Christmas";
  body.append(h1);
  body.append(dTime);
  getTime();
  setInterval(getTime, 1000);
}
init();
