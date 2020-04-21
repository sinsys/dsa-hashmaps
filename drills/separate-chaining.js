// Write an algorithm to group a list of words into anagrams
// Input:
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
// Output:
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]


// Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.
// Test your hash map with the same values from the lotr hash map.

const HashMapSeparate = require('./HashMapSeparate');

const characters = [
  {"Hobbit": "Bilbo"},
  {"Hobbit": "Frodo"},
  {"Wizard": "Gandalf"}, 
  {"Human": "Aragorn"}, 
  {"Elf": "Legolas"}, 
  {"Maiar": "The Necromancer"},
  {"Maiar": "Sauron"}, 
  {"RingBearer": "Gollum"}, 
  {"LadyOfLight": "Galadriel"}, 
  {"HalfElven": "Arwen"},
  {"Ent": "Treebeard"}
];

const separateChaining = (arr) => {
  // Set up our hash map
  const lotr = new HashMapSeparate();
  HashMapSeparate.MAX_LOAD_RATIO = 0.5;
  HashMapSeparate.SIZE_RATIO = 3;

  // Load up our map with all of our characters
  characters.forEach(char => {
    let charType = Object.keys(char)[0];
    let charName = char[charType];
    lotr.put(charType, charName);
  });
  // Log the map
  console.log(lotr);
  // Log Maiar's val
  console.log(lotr.get("Maiar"));
  // Log Hobbit's val
  console.log(lotr.get("Hobbit"));
}

separateChaining();

// Expected Object:
/*
HashMapSeparate {
  length: 9,
  _hashTable: [
    <2 empty items>,
    { key: 'HalfElven', value: [LinkedList], DELETED: false },
    <1 empty item>,
    { key: 'LadyOfLight', value: [LinkedList], DELETED: false },
    <1 empty item>,
    { key: 'Wizard', value: [LinkedList], DELETED: false },
    { key: 'RingBearer', value: [LinkedList], DELETED: false },
    <4 empty items>,
    { key: 'Elf', value: [LinkedList], DELETED: false },
    { key: 'Hobbit', value: [LinkedList], DELETED: false },
    <6 empty items>,
    { key: 'Ent', value: [LinkedList], DELETED: false },
    <1 empty item>,
    { key: 'Human', value: [LinkedList], DELETED: false },
    { key: 'Maiar', value: [LinkedList], DELETED: false }
  ],
  _capacity: 24,
  _deleted: 0
}
[ 'The Necromancer', 'Sauron' ]
[ 'Bilbo', 'Frodo' ]
*/