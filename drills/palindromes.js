// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", 
// the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is 
// a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way 
// to rearrange those letters to be a palindrome.

const HashMap = require('./HashMap');

const palindromes = (str) => {
  // Helper function to check if string is palindrome
  const _isPalindrome = (str) => {
    let head = 0;
    let tail = str.length - 1;
    let palindrome = true;
    while ( tail > head && palindrome ) {
      if ( str[head] !== str[tail] ) return false;
      head++;
      tail--;
    }
    return true;
  };

  // Regex to get rid of all non-alpha-numeric characters
  const re = /[^A-Za-z0-9]/g;

  // Lowercase our string and run against our regex
  const testStr = str.toLowerCase().replace(re, '');

  // Check to see if current string is a palindrome
  if ( _isPalindrome(testStr) ) return true;

  // Setup our storage for characters
  const ourChars = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  // Store our doubled string into a hashmap
  for ( let i = 0; i < testStr.length; i++ ) {
    ourChars.set(i, testStr[i]);
  };

  // Start at 1 so we don't return true immediately when the string matches
  for ( let i = 1; i <= str.length; i++ ) {
    // Setup a string for each rotation
    let rotation = '';
    for ( let j = 0; j < str.length; j++ ) {
      // Add all the characters in the rotated string
      // Modulus is to roll back to 0 when it gets to the end
      rotation += ourChars.get((j + i) % str.length);
    }
    // Check if its a palindrome
    if (_isPalindrome(rotation) ) return true;
  }
  // All checks completed. This is not a palindrome
  return false;
};

console.log("Acecarr: " + palindromes('acecarr'));
console.log("North: " + palindromes('north'));
console.log("Kayak: " + palindromes('kayak'));
console.log("Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.: " + palindromes('Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.'));
console.log("quickiu: " + palindromes('quickiu'));