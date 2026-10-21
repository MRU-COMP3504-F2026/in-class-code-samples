const add = function (x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

const multiply = function (x, y) {
  return x * y;
}

const division = function (x, y) {
    if( y == 0) {
        throw new Error("Cannot divide by zero!");
    }
  return x / y;
}

module.exports = { 
    add, 
    subtract,
    multiply,
    division
};