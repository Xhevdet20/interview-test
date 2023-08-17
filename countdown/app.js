const countFn = () => {
  getTime();
  setInterval(() => {
    getTime();
  }, 1000)
}

const getTime = () => {
  const input = document.getElementById("date").value;
  console.log(input)
  const date = new Date(input).getTime()
  const currentDate = new Date().getTime();

  const timeLeft = date - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (input != "" && date > currentDate) {
    document.getElementById("wrong").innerHTML = ""
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
  } else if (currentDate > date) {
    document.getElementById("wrong").innerHTML = "Please select a date in the future"
    document.getElementById("days").innerHTML = 0
    document.getElementById("hours").innerHTML = 0
    document.getElementById("minutes").innerHTML = 0
    document.getElementById("seconds").innerHTML = 0

  } else {
    document.getElementById("wrong").innerHTML = "Check date format e.g 11/23/2025"
    document.getElementById("days").innerHTML = 0
    document.getElementById("hours").innerHTML = 0
    document.getElementById("minutes").innerHTML = 0
    document.getElementById("seconds").innerHTML = 0
  }
}