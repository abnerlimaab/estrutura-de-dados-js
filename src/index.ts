import stack from "./stack";

let newStack = stack([1, 2, 3, 4, 5]);

console.log(newStack.peek());
newStack = newStack.push(6);
console.log(newStack.peek());
newStack = newStack.pop();
console.log(newStack.peek());
console.log(newStack.isEmpty());
console.log(newStack.size());
newStack = newStack.clear();
console.log(newStack.isEmpty());
console.log(newStack.size());
