// Calculator program logic

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    // try-catch block is used to handle errors that may occur during the evaluation of the expression like hitting 7+ then =
    try {
        display.value = eval(display.value); //eval takes expression and evaluates it
    }
    catch (error) {
        display.value = "Error";
    }
}