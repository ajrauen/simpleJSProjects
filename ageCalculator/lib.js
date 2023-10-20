const calculateAge = () => {
  const dateInputValue = document.getElementById("date").value;

  let timeDiff;
  if (dateInputValue) {
    timeDiff = new Date().getTime() - new Date(dateInputValue).getTime();

    timeDiff /= 1000;
    timeDiff /= 60 * 60 * 24;
    timeDiff /= 365.25;
  } else {
    return;
  }

  const resultString = `Your age is ${Math.floor(timeDiff)} years old`;
  document.getElementById("result").innerHTML = resultString;
};
