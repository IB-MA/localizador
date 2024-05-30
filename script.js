let display = document.getElementById('display');
let currentOperand = '';
let currentOperator = '';
let firstOperand = '';

function appendNumber(number) {
    currentOperand += number;
    updateDisplay(currentOperand);
}

function appendOperator(operator) {
    if (currentOperand === '' && firstOperand === '') return;
    if (firstOperand === '') {
        firstOperand = currentOperand;
        currentOperand = '';
    } else {
        calculateResult();
    }
    currentOperator = operator;
}

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    firstOperand = '';
    currentOperator = '';
}

function updateDisplay(value) {
    display.value = value;
}

function calculateResult() {
    if (currentOperand === '' || currentOperator === '') return;
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentOperand);
            break;
        default:
            return;
    }
    updateDisplay(result);
    firstOperand = result;
    currentOperand = '';
    currentOperator = '';
}
