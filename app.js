console.log('hello world');

// Variables to store the numbers and operator
let num1 = '';  
let num2 = ''; 
let operator = '';  //("+", "-", "*", "/")
let result = 0;  

// found in the index.html file refer to the HTML elements (buttons and display)
const numberBtnEls = document.querySelectorAll('.number');  // # buttons
const operatorBtnEls = document.querySelectorAll('.operator');  //  ("+", "-", "*", "/") buttons
const equalBtnEl = document.querySelector('.equals');  // = button
const displayEl = document.querySelector('.display');  // Display area

// Functions

// update the display with the current result
const render = () => {
    displayEl.textContent = result;  // getting the results to show in the display area of the calculator
};

// clicks on number buttons
const updateNumber = (event) => {
    const number = event.target.textContent;  // pull the number from the # button that was clicked

    // Check if an operator is already set, IF operator is already set then adding the num2 to num1; if not set then need to add num1 to num2
    if (operator) {
        num2 += number;  // Add the number to the second number
        result = num2;  // Update the result to show the current second number
    } else {
        num1 += number;  // Add the number to the first number
        result = num1;  // Update the result to show the current first number
    }
    
    render();  // Update the display with the results
};

// clicks on operator buttons
const updateOperator = (event) => {
    const selectedOperator = event.target.textContent;  // pull the operator to the button that was clicked
    if (selectedOperator === 'C') {
        num1 = '';
        num2 = '';
        operator = '';
        result = 0;

    render()
     
    }else {
        operator = selectedOperator;
    render()
    
    }
};
// if the c buton was selected this should clear out all previous number pressed resulting in screen resetting

// calculate equation when user clicks the equal button 
const calculate = () => {
    const n1 = Number(num1) // turn num1 to a number
    const n2 = Number(num2) //turn num2 to a number
    let output = 0;

    if (operator === '+') {
        output = n1 + n2;
    } else if (operator === '-') {
        output = n1 - n2;
    } else if (operator === '*') {
        output = n1 * n2;
    } else if (operator === '/') {
        output = n1 / n2;
    } else {
        output = 'Error';
    }

    result =  output;
    render();  
};


// Event listeners

// Event listener for number buttons
numberBtnEls.forEach((numBtnEl) => {
    numBtnEl.addEventListener('click', updateNumber);  // Call updateNumber when a number button is clicked
});

// Event listener for operator buttons
operatorBtnEls.forEach((operatorBtnEl) => {
    operatorBtnEl.addEventListener('click', updateOperator);  // Call updateOperator when one of the operator buttons are clicked
});

// Event listener for equal button
equalBtnEl.addEventListener('click', calculate);  // doesnt have the .forEach because theres only one equal button vs. others have multiple

