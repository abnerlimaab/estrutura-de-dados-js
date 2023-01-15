import { insertAt, removeAtStart } from "../arrays";

interface Queue<T> {
  /**
   * Inserts a new element at the end of the queue
   * @param value a value or an array of values to be inserted
   * @returns a new queue with the new value inserted
   */
  enqueue: (value: T | T[]) => Queue<T>;
  /**
   * Removes the first element from the queue
   * @returns an Array containing the new queue and the removed element
   */
  dequeue: () => [Queue<T>, T];
  /**
   * @returns the first element of the queue without removing it
   */
  peek: () => T;
  /**
   * @returns the queue as an array
   */
  getAll: () => T[];
  /**
   * @returns the number of elements in the queue
   */
  size: () => number;
  /**
   * @returns true if the queue is empty, false otherwise
   */
  isEmpty: () => boolean;
  /**
   * Removes all elements from the queue
   * @returns a new empty queue
   */
  clear: () => Queue<T>;
  /**
   * @returns a string representation of the queue
   */
  toString: () => string;
}

const queue = <T>(items: T[]): Queue<T> => ({
  enqueue: (value: T | T[]) => queue(insertAt(items, value, items.length)),
  dequeue: () => [queue(removeAtStart(items)), items[0]],
  peek: () => items[0],
  getAll: () => items,
  size: () => items.length,
  isEmpty: () => items.length === 0,
  clear: () => queue([] as T[]),
  toString: () => items.toString(),
});

export default queue;
