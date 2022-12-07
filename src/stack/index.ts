import { insertAt, removeAtStart } from "../arrays";

interface Stack<T> {
  /**
   * Inserts a new element at the top of the stack
   * @param value a value or an array of values to be inserted
   * @returns a new stack with the new value inserted
   */
  push: (value: T | T[]) => Stack<T>;
  /**
   * Removes the top element from the stack
   * @returns a new stack with the top element removed
   */
  pop: () => Stack<T>;
  /**
   * Returns the top element from the stack
   * @returns the top element from the stack or undefined if the stack is empty
   */
  peek: () => T;
  /**
   * Checks if the stack is empty
   * @returns true if the stack is empty, false otherwise
   */
  isEmpty: () => boolean;
  /**
   * Removes all elements from the stack
   * @returns a new empty stack
   */
  clear: () => Stack<T>;
  /**
   * Returns the number of elements in the stack
   * @returns the number of elements in the stack
   */
  size: () => number;
  /**
   * Returns all the elements in the stack
   * @returns an array with all the elements in the stack
   */
  getAll: () => T[];
  /**
   * Returns a string representation of the stack
   * @returns a string representation of the stack
   */
  toString: () => string;
}

const stack = <T>(items: T[]): Stack<T> => ({
  push: (value: T | T[]) => stack(insertAt(items, value, 0)),
  pop: () => stack(removeAtStart(items)),
  peek: () => items[0],
  isEmpty: () => items.length === 0,
  clear: () => stack([] as T[]),
  size: () => items.length,
  getAll: () => items,
  toString: () => items.toString(),
});

export default stack;
