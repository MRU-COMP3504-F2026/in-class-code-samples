// https://archive.jestjs.io/docs/en/22.x/getting-started

const calculator = require('../src/sum');

test('test adding method', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(2, -2)).toBe(0);
});

test('test multiplication method', () => {
  expect(calculator.multiplication(2, -2)).toBe(-4);
  expect(calculator.multiplication(-2, -2)).toBe(4);
});