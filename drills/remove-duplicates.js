// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. 
// For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as 
// well such as "google all that you think can think of".

const HashMap = require('./HashMap');

const removeDupes = (str) => {
  // Compare to lowercase strings
  let lowerCaseStr = str.toLowerCase();
  // Create a map for encountered characters
  let existingChars = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  // Establish a string to return
  let returnStr = '';

  // Loop through the whole string
  for ( let i = 0; i < str.length; i++ ) {
    // If the key exists, move forward with the loop and do nothing
    if ( str[i] === " " ) {
      returnStr += " ";
      continue;
    } else if ( existingChars.get(lowerCaseStr[i]) ) {
      continue;
    } else {
      // Set the key and val to our current character
      existingChars.set(lowerCaseStr[i], lowerCaseStr[i]);
      // Add the original value to our return string
      returnStr += str[i];
    }
  }
  return returnStr;
}

console.log(removeDupes("Google"));
console.log(removeDupes("Google all that you think can think of"));
console.log(removeDupes("The quick brown fox jumped over the lazy dogs"));