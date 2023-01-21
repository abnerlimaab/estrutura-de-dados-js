import createLinkedList from "./linked-list";
import { createState } from "./state";

const [linkedList, setLinkedList] = createState(createLinkedList());

setLinkedList(list => list.push(1));
setLinkedList(list => list.push(2));
setLinkedList(list => list.push(3));

console.log(linkedList().size);