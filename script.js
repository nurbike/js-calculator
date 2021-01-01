let operationAdded = false;
let numberAdded = false;

function addNumber(x) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerText = resultDiv.innerText + x;
    numberAdded = true;
}

function addOperator(y) {
    if (operationAdded) {
        alert("Only one operator is permitted!");
        return;
    }
    if (!numberAdded) {
        alert("You need to add a number first!");
        return;
    }
    let resultDiv = document.getElementById("result");
    resultDiv.innerText = resultDiv.innerText + y;
    operationAdded = true;
}

function clearField() {
    let resultDiv = document.getElementById("result");
    resultDiv.innerText = "";
    operationAdded = false;
    numberAdded = false;
}

function equals() {
    let resultDiv = document.getElementById("result");
    let resultDivText = resultDiv.innerText;
    let result = 0;

    if (resultDivText.includes("-")) {
        numbers = resultDivText.split("-");
        let firstNumber = parseInt(numbers[0]);
        let secondNumber = parseInt(numbers[1]);
        result = sub(firstNumber, secondNumber);
    }

    if (resultDivText.includes("+")) {
        numbers = resultDivText.split("+");
        let firstNumber = parseInt(numbers[0]);
        let secondNumber = parseInt(numbers[1]);
        result = add(firstNumber, secondNumber);
    }

    if (resultDivText.includes("*")) {
        numbers = resultDivText.split("*");
        let firstNumber = parseInt(numbers[0]);
        let secondNumber = parseInt(numbers[1]);
        result = multiply(firstNumber, secondNumber);
    }

    if (resultDivText.includes("/")) {
        numbers = resultDivText.split("/");
        let firstNumber = parseInt(numbers[0]);
        let secondNumber = parseInt(numbers[1]);
        result = divide(firstNumber, secondNumber);
    }

    clearField();
    addNumber(result);
}

function multiply(x, y) {
    let result = x * y;
    return result;
}

function sub(x, y) {
    let result = x - y;
    return result;

}

function add(x, y) {
    let result = x + y;
    return result;

}

function divide(x, y) {
    let result = x / y;
    return result;
}
