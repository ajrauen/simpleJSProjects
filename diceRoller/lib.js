const diceElement = document.getElementById("dice");
const previousDiceTemplate = document.getElementById("previousRollTemplate");
const previousRolls = document.getElementById("previousRolls");
const previous = [];

const rollDice = () => {
  diceElement.classList.add("roll-animation");
  setTimeout(() => {
    diceElement.classList.remove("roll-animation");
    setDicePips();
  }, 1000);
};

const setDicePips = () => {
  const diceRollResult = Math.ceil(Math.random() * 6);
  let pips = [];
  for (var i = 1; i <= diceRollResult; i++) {
    let element = document.createElement("div");
    element.classList.add("pip");
    pips.push(element);
  }

  diceElement.innerHTML = "";
  diceElement.append(...pips);

  let savedResult = diceElement.cloneNode(true);
  savedResult.id = `dice${previous.length + 1}`;
  previous.push(savedResult);
  getPreviousResultElement();
};

const getPreviousResultElement = () => {
  let newElement = previousDiceTemplate.cloneNode(true);
  newElement.classList.remove("previousRollTemplate");
  newElement.classList.add("previousRoll");
  newElement.id = `dice${previous.length + 1}`;
  newElement.querySelector(".rollLabel").innerHTML = `Roll: ${
    previous.length + 1
  }`;
  newElement
    .querySelector("#previousDice")
    .append(previous[previous.length - 1]);
  previousRolls.append(newElement);
};
