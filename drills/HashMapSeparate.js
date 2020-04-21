const LinkedList = require('./SingleLinkedList');

class HashMapSeparate {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  };

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      return null;
    }
    let vals = [];
    let curItem = this._hashTable[index].value.head;
    while ( curItem ) {
      vals.push(curItem.val);
      curItem = curItem.next;
    }
    return vals;
  };

  put( key, value ) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMapSeparate.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMapSeparate.SIZE_RATIO);
    }

    let index = this._findSlot( key );
    // let node = new _Node(value);

    if ( !this._hashTable[index] ) {
      this._hashTable[index] = {
        key,
        value: new LinkedList(),
        DELETED: false
      };
      this.length++;
    }
    this._hashTable[index].value.insertLast(value);
  };

  _findSlot(key) {
    const hash = HashMapSeparate._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      };
    };
  };

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        let curVal = slot.value.head;
        while ( curVal ) {
          this.put(slot.key, curVal.val);
          curVal = curVal.next;
        };
      };
    };
  };

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number. 
    return hash >>> 0;
  };
};

module.exports = HashMapSeparate;