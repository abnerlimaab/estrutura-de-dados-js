import { insertAt, removeAtStart } from "../arrays";

interface IStack<T> {
  push: (value: T | T[]) => IStack<T>;
  pop: () => IStack<T>;
  peek: () => T;
  isEmpty: () => boolean;
  clear: () => IStack<T>;
  size: () => number;
}

const stack = <T>(items: T[]): IStack<T> => ({
  push: (value: T | T[]) => stack(insertAt(items, value, 0)),
  pop: () => stack(removeAtStart(items)),
  peek: () => items[0],
  isEmpty: () => items.length === 0,
  clear: () => stack([] as T[]),
  size: () => items.length,
});

export default stack;
