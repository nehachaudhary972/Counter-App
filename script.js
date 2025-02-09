// Select the buttons and elements
const incrementButton = document.querySelector("#inc");
const decrementButton = document.querySelector("#dec");
const inputField = document.querySelector("#inputfield");
const counterDisplay = document.querySelector("#counter-number");
const resetButton   = document.querySelector("#reset");

let lastInputValue = null;

function updateCounter(change) {
    let currentCount = parseInt(counterDisplay.textContent); 
    let inputValue = parseInt(inputField.value) || 1; 

    let newCount = currentCount + change * inputValue; 
    counterDisplay.textContent = newCount; 
    lastInputValue = inputValue;
    change === 1 ? (incrementButton.disabled = true) : (decrementButton.disabled = true);
}


incrementButton.addEventListener("click", function () {
    updateCounter(1); 
});

decrementButton.addEventListener("click", function () {
    updateCounter(-1);
});


inputField.addEventListener("input", function () {
    incrementButton.disabled = false;
    decrementButton.disabled = false;
   
});
resetButton.addEventListener("click", function () {
    counterDisplay.textContent = 0; 
    inputField.value = "1"; 
    incrementButton.disabled = false; 
    decrementButton.disabled = false; 
    lastInputValue = null;
});
