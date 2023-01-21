import createLinkedList from "./linked-list";
import { stateCreator } from "./state";

const useState = stateCreator((state) =>
  console.info("Index state size: ", state.length)
);

const [linkedList, setLinkedList] = useState(createLinkedList());

setLinkedList((list) => list.push(1));
setLinkedList((list) => list.push(2));
setLinkedList((list) => list.push(3));

console.log(linkedList().size);
