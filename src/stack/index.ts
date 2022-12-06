import { insertAt } from "../arrays";

interface IStack<T> {
  push: (value: T | T[]) => IStack<T>;
  peek: () => T;
}

const stack = <T>(items: T[]): IStack<T> => {
  return {
    push: (value: T | T[]) => stack(insertAt(items, value, 0)),
    peek: () => items[0],
  };
};
