import { stateCreator } from "../state";
import { _Node, createNode } from "../node";
import {
  decrement,
  defaultEquals,
  increment,
  isOutOfBounds,
  whileIterator,
} from "../utils";

enum Direction {
  Forward = "forward",
  Backward = "backward",
  FromHead = "from-head",
  FromTail = "from-tail",
}

interface LinkedList<T> {
  push: (element: T) => LinkedList<T>;
  insert?: (element: T, index: number) => LinkedList<T>;
  getElementAt: (index: number) => T | null;
  remove?: (element: T) => LinkedList<T>;
  indexOf?: (element: T) => number;
  removeAt: (index: number) => [LinkedList<T>, T | null];
  isEmpty: boolean;
  size: number;
  toString: () => string;
}

interface Iteration <T>{
  index: number;
  node: _Node<T> | null;
}

const useState = stateCreator();

const createLinkedList = <T>(equalsFn = defaultEquals): LinkedList<T> => {
  const [getLength, setLength] = useState(0);
  const [getHead, setHead] = useState<_Node<T> | null>(null);
  const [getTail, setTail] = useState<_Node<T> | null>(null);
  const [getIteration, setIteration] = useState<Iteration<T>>({
    index: 0,
    node: null,
  });

  const linkedList = (equalsFn = defaultEquals): LinkedList<T> => {
    const resetIteration = (): void =>
      setIteration({
        index: 0,
        node: null,
      });

    const isEmpty = (): boolean => getLength() === 0;

    const getFasterDirectionToIndex = (index: number): Direction => {
      const length = getLength();

      const { index: iteration } = getIteration();

      const distanceFromHead = Math.abs(index - 0);
      const distanceFromTail = Math.abs(index - (length - 1));
      const distanceFromIteration = Math.abs(index - iteration);

      if (
        distanceFromHead < distanceFromTail &&
        distanceFromHead <= distanceFromIteration
      ) {
        return Direction.FromHead;
      }

      if (
        distanceFromTail < distanceFromHead &&
        distanceFromTail <= distanceFromIteration
      ) {
        return Direction.FromTail;
      }

      if (iteration < index) {
        return Direction.Forward;
      }

      return Direction.Backward;
    };

    const getNodeAt = (index: number): _Node<T> | null => {
      const length = getLength();

      if (isOutOfBounds(index, length) || isEmpty()) {
        return null;
      }

      switch (getFasterDirectionToIndex(index)) {
        case Direction.FromHead:
          whileIterator(0, index, (ind) => {
            setIteration(({ node }) => ({
              index: ind,
              node: ind === 0 ? getHead() : node?.getNext(),
            }));
          });

          break;

        case Direction.FromTail:
          whileIterator(length - 1, index, (ind) => {
            setIteration(({ node }) => ({
              index: ind,
              node: ind === length - 1 ? getTail() : node?.getPrevious(),
            }));
          });

          break;

        case Direction.Forward:
          whileIterator(getIteration().index, index, (ind) => {
            setIteration(({ node }) => ({
              index: ind,
              node: node?.getNext() ?? null,
            }));
          });

          break;

        case Direction.Backward:
          whileIterator(getIteration().index, index, (ind) => {
            setIteration(({ node }) => ({
              index: ind,
              node: node?.getPrevious() ?? null,
            }));
          });

          break;
      }

      return getIteration().node;
    };

    const getElementAt = (index: number): T | null =>
      getNodeAt(index)?.element ?? null;

    const push = (element: T): LinkedList<T> => {
      const node = createNode(element);

      const lastNode = getTail();

      if (!lastNode) {
        setHead(node);
      } else {
        node.setPrevious(lastNode);
        lastNode.setNext(node);
      }

      setTail(node);
      setLength(increment);
      resetIteration();

      return linkedList(equalsFn);
    };

    const disconnectNode = (
      node: _Node<T> | null
    ): [LinkedList<T>, T | null] => {
      if (!node) {
        return [linkedList(equalsFn), null];
      }

      if (node === getHead()) {
        setHead(node.getNext());
      }

      if (node === getTail()) {
        setTail(node.getPrevious());
      }

      node.disconnect();

      setLength(decrement);
      resetIteration();

      return [linkedList(equalsFn), node!.element];
    };

    const removeFirstNode = (): [LinkedList<T>, T | null] =>
      disconnectNode(getHead());

    const removeLastNode = (): [LinkedList<T>, T | null] =>
      disconnectNode(getTail());

    const removeIndex = (index: number): [LinkedList<T>, T | null] =>
      disconnectNode(getNodeAt(index));

    const removeAt = (index: number): [LinkedList<T>, T | null] => {
      if (index === 0) {
        return removeFirstNode();
      }

      if (index === getLength() - 1) {
        return removeLastNode();
      }

      return removeIndex(index);
    };

    return {
      push,
      removeAt,
      get isEmpty() {
        return isEmpty();
      },
      get size() {
        return getLength();
      },
      getElementAt,
    };
  };

  return linkedList(equalsFn);
};

export default createLinkedList;
