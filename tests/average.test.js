const averageAbs = require('../src/average');

describe('average', () => {
    test('calculates the average of positive numbers', () => {
        expect(averageAbs([1, 2, 3, 4, 5])).toBe(3);
    });

    test('calculates the average with a single number', () => {
        expect(averageAbs([5])).toBe(5);
        expect(averageAbs([-5])).toBe(5);
    });

    test('calculates the average of mixed numbers', () => {
        expect(averageAbs([-1, 2, -3, 4])).toBe(10/4); // (1 + 2 + 3 + 4) / 4 = 2.5
    });

    test('calculates the average of negative numbers', () => {
        expect(averageAbs([-1, -2, -3])).toBe(2); // (1 + 2 + 3) / 3 = 2
        expect(averageAbs([1, 2, 3])).toBe(2); // (1 + 2 + 3) / 3 = 2
    });

    test('should throw an error for null input', () => {
        expect(() => averageAbs(null)).toThrow("Array numbers must not be null.");
        expect(() => averageAbs([])).toThrow("Array numbers must not be empty.");
    });
});