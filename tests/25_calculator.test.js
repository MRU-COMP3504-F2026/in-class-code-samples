// https://archive.jestjs.io/docs/en/22.x/getting-started

const { add, subtract, multiply, division } = require('../src/25_calculator');

describe('Arithmetic Functions', () => {
  
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(0, 1)).toBe(-1);
    });

    test('multiplies two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-1, 5)).toBe(-5);
    });

    test('divides two numbers', () => {
        expect(division(10, 2)).toBe(5);
        expect(division(-10, 2)).toBe(-5);
    });
  
});