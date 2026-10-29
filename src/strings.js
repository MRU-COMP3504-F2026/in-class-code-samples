/**
 * Trims whitespace and converts all strings to lowercase.
 * @param {string[]} list 
 * @returns {string[]}
 */
function cleanStrings(list) {
  // return list.map(item => item.trim().toLowerCase());
  cleanedList = [];
  for (item of sampleInput) {
    cleanedList.push(item.trim().toLowerCase());
  }
  return cleanedList;
}

/**
 * Filters strings to only include those starting with a specific letter.
 * @param {string[]} list 
 * @param {string} letter 
 * @returns {string[]}
 */
function filterByStartingLetter(list, letter) {
  target = letter.toLowerCase();

  filteredList = [];
  for ( item of list) {
    if (item.startsWith(target)) {
      filteredList.push(item);
    }
  }
  return filteredList;
}

/**
 * Finds the first string that exceeds a specific length.
 * @param {string[]} list 
 * @param {number} minLength 
 * @returns {string|undefined}
 */
function findFirstLongString(list, minLength) {  
  for (item of list) {
    if (item.length > minLength) {
      return item;
    }
  }
  return undefined;
}

/**
 * Combines an array of strings into a single comma-separated sentence.
 * @param {string[]} list 
 * @returns {string}
 */
function combineToSentence(list) {
  let sentence = "";

  for (let i = 0; i < list.length; i++) {
  const item = list[i];
  
    if (i === 0) {
      sentence = item;
    } else {
      sentence = `${sentence}, ${item}`;
    }
  }
  return sentence;
}

module.exports = {
  cleanStrings,
  filterByStartingLetter, 
  findFirstLongString, 
  combineToSentence
};