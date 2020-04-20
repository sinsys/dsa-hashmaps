// Write an algorithm to group a list of words into anagrams
// Input:
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
// Output:
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

const HashMap = require('./HashMap');
const anagrams = (arr) => {

  // Setup a new hashmap to store letter combinations
  let combos = new HashMap();

  // Iterate through each word
  arr.forEach(word => {
    // Sort the characters of the word. This will give us unique anagram keys
    let sortedWord = word.split('').sort().join('');
    // If we don't have a key for the sorted word
    if ( !combos.get(sortedWord) ) {
      // Create the key and set the word as our value
      combos.set(sortedWord, [word])
    } else {
      // Add the word to our key's value
      combos.set(sortedWord, [...combos.get(sortedWord), word])
    };
  });

  // Setup an array to return
  let returnArr = [];
  // Iterate through slots in the HashMap
  combos._hashTable.forEach(slot => {
    // If the slot isn't empty
    if ( slot ) {
      // Add our array to our returnArr
      returnArr.push(slot.value);
    }
  });
  // Return the new expected array
  return returnArr;
};

console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));