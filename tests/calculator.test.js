const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('adds a positive & negative number', () => {
        expect(add(-3, 2)).toBe(-1);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-5, 3)).toBe(-2);
    });

    test('should add zero', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(3, 10)).toBe(-7);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-10, -4)).toBe(-6);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-4, -10)).toBe(6);
    });


  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(6, 7)).toBe(42);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-6, -7)).toBe(42);
    });

    test('should multiply one positive & one negative number', () => {
      expect(calculator.multiply(-6, 7)).toBe(-42);
    });

    test('should return zero when multiplying by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 4)).toBe(5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    test('should divide one negative & one positive numbers', () => {
      expect(calculator.divide(-20, 4)).toBe(-5);
    });

    test('should throw error on division by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });
  });
});
