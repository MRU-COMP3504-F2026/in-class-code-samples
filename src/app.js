// For Node.js/Jest testing environment
if (typeof module !== 'undefined' && module.exports) {
  const calculator = require('./calculator');
  module.exports = calculator;
}

// Frontend calculator wrapper
const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
};

// DOM interaction
document.addEventListener('DOMContentLoaded', () => {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const operationSelect = document.getElementById('operation');
  const calculateBtn = document.getElementById('calculate');
  const resultDiv = document.getElementById('result');

  calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.innerHTML = '<p class="error">Please enter valid numbers</p>';
      return;
    }

    try {
      let result;
      switch (operation) {
        case 'add':
          result = Calculator.add(num1, num2);
          break;
        case 'subtract':
          result = Calculator.subtract(num1, num2);
          break;
        case 'multiply':
          result = Calculator.multiply(num1, num2);
          break;
        case 'divide':
          result = Calculator.divide(num1, num2);
          break;
      }

      resultDiv.innerHTML = `
        <p class="success">
          <strong>${num1} ${getOperationSymbol(operation)} ${num2} = ${result}</strong>
        </p>
      `;
    } catch (error) {
      resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
  });

  function getOperationSymbol(operation) {
    const symbols = {
      add: '+',
      subtract: '−',
      multiply: '×',
      divide: '÷'
    };
    return symbols[operation];
  }
});