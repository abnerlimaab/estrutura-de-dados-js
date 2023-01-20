import { defaultEquals } from "../utils";

interface _Node<T> {
  element: T;
  next: _Node<T> | null;
}

interface LinkedList<T> {
  push: (element: T) => LinkedList<T>;
  insert: (element: T, index: number) => LinkedList<T>;
  getElementAt: (index: number) => T | undefined;
  remove: (element: T) => LinkedList<T>;
  indexOf: (element: T) => number;
  removeAt: (index: number) => LinkedList<T>;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
}

const createNode = <T>(element: T) => ({ element, next: null });

const getLastNode = <T>(head: _Node<T> | null) => {
  let current = head;

  if (current === null) return;

  while (current.next) {
    current = current.next;
  }

  return current;
};

const createLinkedList = <T>(equalsFn = defaultEquals) => {
  let head: _Node<T> | null = null;
  const setHead = (newHead: _Node<T> | null) => (head = newHead);

  let length = 0;
  const setLength = (newLength: number) => (length = newLength);

  const linkedList = (equalsFn = defaultEquals) => {
    const push = (element: T) => {
      setLength(length + 1);

      const node = createNode(element);
      const lastNode = getLastNode(head);

      if (!lastNode) {
        setHead(node);
      } else {
        lastNode.next = node;
      }

      return linkedList(equalsFn);
    };

    return {
      push,
      length,
    };
  };

  return linkedList(equalsFn);
};

export default createLinkedList;
