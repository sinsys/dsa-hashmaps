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