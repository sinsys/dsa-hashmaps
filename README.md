# Data Structures & Algorithms

## Hashmaps Practice Drills

### 1. Create a HashMap class  

Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.

 - Export your HashMap module  
 - Create a .js file called HashMaps_drills. In the file import the HashMap module. Create a function called main()
 - Inside your main() function, create a hash map called lotr.
 - For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
 - Add the following items to your hash map: 
   - {"Hobbit": "Bilbo"}, 
   - {"Hobbit": "Frodo"},
   - {"Wizard": "Gandalf"},
   - {"Human": "Aragorn"}, 
   - {"Elf": "Legolas"}, 
   - {"Maiar": "The Necromancer"},
   - {"Maiar": "Sauron"}, 
   - {"RingBearer": "Gollum"}, 
   - {"LadyOfLight": "Galadriel"}, 
   - {"HalfElven": "Arwen"},
   - {"Ent": "Treebeard"}
 - Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
   - > The length is 9. Yes I have.  
 - Retrieve the value that is hashed in the key "Maiar" and Hobbit.
   - > Maiar = "Sauron"
   - > Hobbit = "Frodo"  
 - What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
   - > Maiar = "Sauron"  
   - > Hobbit = "Frodo"  
 - What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
   - > 24. Original size is 8. Once the HashMap hits 50% capacity, it increases its capacity to 3 * capacity, making it 24.

### 2. WhatDoesThisDo  

DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

  > `20`
  > `10`
  > The string is identical, so when the map is set, the value is overwritten as the key is identical. 10 becomes 20.
  > Likewise with map2, the string is identical so the value of 20 gets overwritten to 10.  
  
```javascript
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
```  

### 3. Demonstrate understanding of Hash maps  

*You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

1) Show your hash map after the insertion of keys `10, 22, 31, 4, 15, 28, 17, 88, 59` into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.  

|Cell|Val|Notes                                                                                          |Val|K mod M|
|----|---|-----------------------------------------------------------------------------------------------|---|-------|
|0   |22 |                                                                                               |10 |10     |
|1   |88 |88 collides with 22, so it is moved to the next available slot.                                |22 |0      |
|2   |   |                                                                                               |31 |9      |
|3   |   |                                                                                               |4  |4      |
|4   |4  |                                                                                               |15 |4      |
|5   |15 |15 Collides with 4, so it is moved to the next available slot.                                 |28 |6      |
|6   |28 |                                                                                               |17 |6      |
|7   |17 |17 collides with 28, so it is moved to the next available slot.                                |88 |0      |
|8   |59 |59 collides with 15, so it is moved to the next available slot.                                |59 |4      |
|9   |31 |                                                                                               |   |       |
|10  |10 |                                                                                               |   |       |  

2) Show your hash map after the insertion of the keys `5, 28, 19, 15, 20, 33, 12, 17, 10` into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.  

|Cell|Val           |Notes                                                                        |Val|K mod M|
|----|--------------|-----------------------------------------------------------------------------|---|-------|
|0   |              |                                                                             |5  |5      |
|1   |28 -> 19 -> 10|19 and 10 both collide with 28 so they are added in sequence to a linked list|28 |1      |
|2   |20            |                                                                             |19 |1      |
|3   |12            |                                                                             |15 |6      |
|4   |              |                                                                             |20 |2      |
|5   |5             |                                                                             |33 |6      |
|6   |15 -> 33      |33 collides with 15 so it is added in sequence to a linked list              |12 |3      |
|7   |              |                                                                             |17 |8      |
|8   |17            |                                                                             |10 |1      |  

### 4. Remove duplicates  

  > `./drills/remove-duplicates.js`  
  
Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".

### 5. Any permutation a palindrome  

  > `./drills/palindromes.js`  
  
Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.

### 6. Anagram grouping  

  > `./drills/anagrams.js`  
  
Write an algorithm to group a list of words into anagrams. For example, if the input was `['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']`, the output should be: `[['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]`.

### 7. Separate Chaining  

Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the lotr hash map.