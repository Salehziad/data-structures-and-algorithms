'use strict';
const Queue = require('../queue/queue');

module.exports = class AnimalShelter{
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }
  enqueue(animal) {
    return (animal === 'cat') ? this.cat.enQueue(animal) : (animal === 'dog') ? this.dog.enQueue(animal) : 'bls enter cat or dogs anly';
  }
  dequeue(pref) {
    if (pref === 'cat') {
      if (!this.cat.isEmpty()) {
        this.cat.deQueue();
        return 'cat';
      }else return null;
    }else if(pref==='dog'){
      if(!this.dog.isEmpty){
        this.dog.deQueue('dog');
        return 'dog';
      }else return null;
    }else{
      return 'this shelter is only for cats and dogs';
    }
  }
};
