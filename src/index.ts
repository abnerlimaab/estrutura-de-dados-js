import deck from "./deck";

const d = deck([1, 2, 3, 4, 5]);

console.log("deck: ", d.getAll());

console.log("peekFront: ", d.peekFront());

console.log("peekBack: ", d.peekBack());

const d2 = d.removeFront();

console.log("removeFront: ", d2.getAll());

const d3 = d2.removeBack();

console.log("removeBack: ", d3.getAll());

const d4 = d3.addFront(1);

console.log("addFront: ", d4.getAll());

const d5 = d4.addBack(5);

console.log("addBack: ", d5.getAll());

console.log("isEmpty: ", d5.isEmpty());

console.log("size: ", d5.size());

console.log("toString: ", d5.toString());

console.log("clear: ", d5.clear().getAll());