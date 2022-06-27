'use strict';
const AnimalShelter  = require('./stack-queue-animal-shelter/stack-queue-animal-shelter');


const animal=new AnimalShelter ();
animal.enqueue('cat');
animal.enqueue('cat');
animal.enqueue('dog');
animal.enqueue('dog');
animal.enqueue('ggg');
// animal.enqueue(2);
// animal.enqueue(3);
// animal.enqueue(4);
console.log(animal.dequeue('cat'));
console.log(animal.dequeue('catss'));
console.log(animal.dequeue('cat'));
console.log(animal.dequeue('cat'));

console.log(animal);
