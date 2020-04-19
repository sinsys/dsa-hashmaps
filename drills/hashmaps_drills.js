// Walk through the HashMap implementation in the curriculum and understand it well. 
// Then write a HashMap class and its core functions with open addressing as the 
// collision resolution mechanism.

//  - Export your HashMap module  
//  - Create a .js file called HashMaps_drills. In the file import the HashMap module. 
//  - Create a function called main()
//  - Inside your main() function, create a hash map called lotr.
//  - For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
//  - Add the following items to your hash map: 
//    - {"Hobbit": "Bilbo"}, 
//    - {"Hobbit": "Frodo"},
//    - {"Wizard": "Gandalf"},
//    - {"Human": "Aragorn"}, 
//    - {"Elf": "Legolas"}, 
//    - {"Maiar": "The Necromancer"},
//    - {"Maiar": "Sauron"}, 
//    - {"RingBearer": "Gollum"}, 
//    - {"LadyOfLight": "Galadriel"}, 
//    - {"HalfElven": "Arwen"},
//    - {"Ent": "Treebeard"}
//  - Print your hash map and notice the length and items that are hashed in your hash map. 
//      Have you hashed all the items you were asked to?
//  - Retrieve the value that is hashed in the key "Maiar" and Hobbit.
//  - What are the values of Maiar and Hobbit that you have? Is there a discrepancy? 
//      Explain your answer.
//  - What is the capacity of your hash table after you have hashed all the above items? 
//      Explain your answer.

const HashMap = require('./HashMap');

let characters = [
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

const main = () => {
  // Set up our hash map
  const lotr = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  characters.forEach(char => {
    let charType = Object.keys(char)[0];
    let charName = char[charType];
    lotr.set(charType, charName);
  });

  console.log(lotr);
  
}

main();