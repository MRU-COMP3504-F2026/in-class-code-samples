const strings = require('../src/strings');

describe('String Processor Module', () => {
  sampleInput = ["  apple ", "banana", "  CHERRY", "Avocado", "blueberry"];
  let cleanedList;

  beforeAll(() => {
    cleanedList = strings.cleanStrings(sampleInput);
  });

  test('cleanStrings should trim whitespace and lowercase all elements', () => {
    expect(cleanedList).toEqual(["apple", "banana", "cherry", "avocado", "blueberry"]);
  });

  test('filterByStartingLetter should return only strings starting with the given letter', () => {
    const result = strings.filterByStartingLetter(cleanedList, 'a');
    expect(result).toEqual(["apple", "avocado"]);
  });
});