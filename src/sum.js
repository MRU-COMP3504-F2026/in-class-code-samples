// https://archive.jestjs.io/docs/en/22.x/getting-started

function add(a, b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a,b) {
  if (b == 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports = {
  add,
  sub,
  multiplication,
  division,
};