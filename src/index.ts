import linkedList from "./linked-list";

const list = linkedList<number>();

const list1 = list.push(1).push(2).push(3);

console.log(list1.length);