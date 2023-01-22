import createLinkedList from "./linked-list";
import { stateCreator } from "./state";

const useState = stateCreator();

const [linkedList, setLinkedList] = useState(createLinkedList<number>());

setLinkedList((list) => list.push(1));
setLinkedList((list) => list.push(2));
setLinkedList((list) => list.push(3));
setLinkedList((list) => list.push(4));
setLinkedList((list) => list.push(5));
setLinkedList((list) => list.push(6));
setLinkedList((list) => list.push(7));
setLinkedList((list) => list.push(8));
setLinkedList((list) => list.push(9));
setLinkedList((list) => list.push(10));

console.log(linkedList().getElementAt(2))
console.log(linkedList().getElementAt(3))
console.log(linkedList().getElementAt(2))
console.log(linkedList().getElementAt(0))
console.log(linkedList().getElementAt(9))
console.log(linkedList().getElementAt(1))

console.log(linkedList().size);
