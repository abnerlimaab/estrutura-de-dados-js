export const defaultEquals = <T>(a: T, b: T) => a === b;

export const isOutOfBounds = (index: number, length: number): boolean =>
  index < 0 || index >= length;

export const increment = (a: number) => a + 1;

export const decrement = (a: number) => a - 1;

export const whileCondition = (
  condition: () => boolean,
  iterator: () => void
) => {
  while (condition()) {
    iterator();
  }
};

export const whileIterator = (
  from: number,
  to: number,
  callback: (indice: number) => void
) => {
  const increment = from < to;
  let i = from;
  while (increment ? i <= to : i >= to) {
    callback(i);
    increment ? i++ : i--;
  }
};
