import { stateCreator } from "../state";
import { decrement, defaultEquals, increment } from "../utils";

interface _Node<T> {
  element: T;
  next: _Node<T> | null;
  previous: _Node<T> | null;
  disconnect: () => void;
}

enum Direction {
  Forward = "forward",
  Backward = "backward",
}

interface LinkedList<T> {
  push: (element: T) => LinkedList<T>;
  insert?: (element: T, index: number) => LinkedList<T>;
  getElementAt?: (index: number) => T | undefined;
  remove?: (element: T) => LinkedList<T>;
  indexOf?: (element: T) => number;
  removeAt: (index: number) => [LinkedList<T>, T | null];
  isEmpty: boolean;
  size: number;
  toString: () => string;
}

const createState = stateCreator(state => console.info("Linked-list state size: ", state.length));

const createNode = <T>(element: T): _Node<T> => {
  const [getNext, setNext] = createState<_Node<T> | null>(null);
  const [getPrevious, setPrevious] = createState<_Node<T> | null>(null);

  const node = () => ({
    element,
    get next() {
      return getNext();
    },
    set next(next: _Node<T> | null) {
      setNext(next);
    },
    get previous() {
      return getPrevious();
    },
    set previous(previous: _Node<T> | null) {
      setPrevious(previous);
    },
    disconnect: () => {
      if (getNext()) {
        getNext()!.previous = null;
      }

      if (getPrevious()) {
        getPrevious()!.next = null;
      }

      setNext(null);
      setPrevious(null);
    },
  });

  return node();
};

const isOutOfBounds = (index: number, length: number) =>
  index < 0 || index >= length;

const isEmpty = (length: number) => length === 0;

const getFastDirection = (index: number, length: number): Direction =>
  index < length / 2 ? Direction.Forward : Direction.Backward;

const createLinkedList = <T>(equalsFn = defaultEquals) => {
  const [getLength, setLength] = createState(0);
  const [getHead, setHead] = createState<_Node<T> | null>(null);
  const [getLastNode, setLastNode] = createState<_Node<T> | null>(null);

  const linkedList = (equalsFn = defaultEquals): LinkedList<T> => {
    const getNodeAt = (index: number) => {
      const length = getLength();

      if (isOutOfBounds(index, length) || isEmpty(length)) {
        return null;
      }

      const direction = getFastDirection(index, length);

      switch (direction) {
        case Direction.Forward: {
          let current = getHead()!;
          let i = 0;

          while (i < index) {
            current = current.next!;
            i++;
          }

          return current;
        }
        case Direction.Backward: {
          let current = getLastNode()!;
          let i = length;

          while (i > index) {
            current = current.previous!;
            i--;
          }

          return current;
        }
      }
    };

    const push = (element: T): LinkedList<T> => {
      const node = createNode(element);

      const lastNode = getLastNode();

      if (!lastNode) {
        setHead(node);
      } else {
        node.previous = lastNode;
        lastNode.next = node;
      }

      setLastNode(node);
      
      setLength(increment);

      return linkedList(equalsFn);
    };

    const disconnectNode = (
      node: _Node<T> | null
    ): [LinkedList<T>, T | null] => {
      if (!node) {
        return [linkedList(equalsFn), null];
      }

      if (node === getHead()) {
        setHead(node.next);
      }

      if (node === getLastNode()) {
        setLastNode(node.previous);
      }

      node.disconnect();

      setLength(decrement);

      return [linkedList(equalsFn), node!.element];
    };

    const removeFirstNode = (): [LinkedList<T>, T | null] =>
      disconnectNode(getHead());

    const removeLastNode = (): [LinkedList<T>, T | null] =>
      disconnectNode(getLastNode());

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
      isEmpty: isEmpty(getLength()),
      size: getLength(),
    };
  };

  return linkedList(equalsFn);
};

export default createLinkedList;
