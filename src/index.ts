import createLinkedList from "./linked-list";

const p1 = performance.now();

const linkedList = createLinkedList<number>();

console.log("created linked list in", performance.now() - p1, "ms");

const p2 = performance.now();

const linkedList2 = linkedList.push(1).push(2).push(3).push(4).push(5);

console.log("pushed 5 elements in", performance.now() - p2, "ms");

const p3 = performance.now();

const linkedList3 = linkedList2.push(6).push(7).push(8).push(9).push(10);

console.log("pushed 5 more elements in", performance.now() - p3, "ms");

const p4 = performance.now();

const [linkedList4] = linkedList3.removeAt(5);

console.log("removed element at index 5 in", performance.now() - p4, "ms");

const p5 = performance.now();

const [linkedList5] = linkedList4.removeAt(0);

console.log("removed element at index 0 in", performance.now() - p5, "ms");

const p6 = performance.now();

linkedList5.removeAt(8);

console.log("removed element at index 8 in", performance.now() - p6, "ms");