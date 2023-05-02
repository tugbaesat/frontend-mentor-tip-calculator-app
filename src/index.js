const resetButton = document.getElementById("reset-button");
const tipButtons = document.querySelectorAll(".percentage");
const percentageCustom = document.getElementById("percentage-custom");
const billInput = document.getElementById("bill-input");
const numberOfPeople = document.getElementById("number-of-people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

let tipPercentage = 0;
let billAmount = 0;
let numberOfPeopleValue = 1;
tipAmount.textContent = "$0.00";
totalAmount.textContent = "$0.00";

resetButton.addEventListener("click", (e) => {
  tipPercentage = 0;
  billAmount = 0;
  numberOfPeopleValue = 0;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  errorMessage.remove();
});

for (const btn of tipButtons) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    tipPercentage = Number(e.target.innerText.trim().slice(0, -1));
    calculateTip();
  });
}

percentageCustom.addEventListener("input", (e) => {
  e.preventDefault();
  tipPercentage = Number(e.target.value);
  calculateTip();
});

billInput.addEventListener("input", (e) => {
  e.preventDefault();
  billAmount = Number(e.target.value);
  calculateTip();
});

numberOfPeople.addEventListener("input", (e) => {
  e.preventDefault();
  numberOfPeopleValue = Number(e.target.value);
  calculateTip();
});

const errorLabel = document.getElementById("number-of-people-label");
let errorMessage = document.createElement("span");
errorMessage.textContent = "Can't be zero!";

function calculateTip() {
  let tipAmountValue;
  let totalAmountValue;

  if (numberOfPeopleValue == 0) {
    errorLabel.appendChild(errorMessage);
  } else {
    tipAmountValue = Number(
      (billAmount * tipPercentage) / (100 * numberOfPeopleValue)
    );
    totalAmountValue = Number(
      billAmount / numberOfPeopleValue + tipAmountValue
    );

    tipAmount.textContent = "$" + tipAmountValue.toFixed(2);
    totalAmount.textContent = "$" + totalAmountValue.toFixed(2);
  }
}
