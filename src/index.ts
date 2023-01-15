import queue from "./queue";

const q = queue([1, 2, 3]);

console.log("Queue:", q.getAll());

const q1 = q.enqueue(4);

console.log("Queue after enqueue:", q1.getAll());

const [q2, v] = q1.dequeue();

console.log("Queue after dequeue:", q2.getAll());
console.log("Dequeued value:", v);

console.log("Peek:", q2.peek());

console.log("Size:", q2.size());

console.log("Is empty:", q2.isEmpty());

const q3 = q2.clear();

console.log("Queue after clear:", q3.getAll());

console.log("Is empty:", q3.isEmpty());

console.log("Size:", q3.size());

const q4 = q3.enqueue([5, 6, 7]);

console.log("Queue after enqueue:", q4.getAll());

console.log("Queue to string:", q4.toString());