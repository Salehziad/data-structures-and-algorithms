'use strict';
const PsedoQueue = require('./queuePsedo/queuepsedo');


const psedoQueue=new PsedoQueue();
psedoQueue.enqueue(1);
psedoQueue.enqueue(2);
psedoQueue.enqueue(3);
psedoQueue.enqueue(4);
psedoQueue.dequeue();
console.log(psedoQueue);
