/**
 * Inserts a value at the start of an array and returns a new array without mutating the original.
 * @param array the array to insert into.
 * @param value the value to insert.
 * @returns a new array with the value inserted at the start
 */
const insertAtStart = <T>(array: Array<T>, value: T): Array<T> => [
  value,
  ...array,
];

/**
 * Inserts a value at the end of an array and returns a new array without mutating the original.
 * @param array the array to insert into.
 * @param value the value to insert.
 * @returns a new array with the value inserted at the end
 */
export const insertAtEnd = <T>(array: Array<T>, value: T): Array<T> => [
  ...array,
  value,
];

/**
 * Removes the first element from an array and returns a new array without mutating the original.
 * @param array the array to remove from
 * @returns a new array with the first element removed
 */
export const removeAtStart = <T>(array: Array<T>): Array<T> => array.slice(1);

/**
 * Removes the last element from an array and returns a new array without mutating the original.
 * @param array the array to remove from
 * @returns a new array with the last element removed
 */
export const removeAtEnd = <T>(array: Array<T>): Array<T> => array.slice(0, -1);

/**
 * Inserts a value at a given index in an array and returns a new array without mutating the original.
 * @param array the array to insert into.
 * @param value the value to insert.
 * @param index the index to insert the value at.
 * @returns a new array with the value inserted at the given index
 */
const insertValueAt = <T>(
  array: Array<T>,
  value: T,
  index: number
): Array<T> => {
  const newArray = [...array];

  newArray.splice(index, 0, value);

  return newArray;
};

/**
 * Inserts multiple values at a given index in an array and returns a new array without mutating the original.
 * @param array the array to insert into.
 * @param values the values to insert.
 * @param index the index to insert the values at.
 * @returns a new array with the values inserted at the given index
 */
const insertValuesAt = <T>(
  array: Array<T>,
  values: Array<T>,
  index: number
): Array<T> => {
  const newArray = [...array];

  newArray.splice(index, 0, ...values);

  return newArray;
};

/**
 * Inserts a value or multiple values at a given index in an array and returns a new array without mutating the original.
 * @param array the array to insert into.
 * @param value the value or values to insert.
 * @param index the index to insert the value or values at.
 * @returns a new array with the value or values inserted at the given index
 * @see insertValueAt
 * @see insertValuesAt
 */
export const insertAt = <T>(
  array: Array<T>,
  value: T | Array<T>,
  index: number
): Array<T> =>
  Array.isArray(value)
    ? insertValuesAt(array, value, index)
    : insertValueAt(array, value, index);

/**
 * Removes a value or multiple values at a given index in an array and returns a new array without mutating the original.
 * @param array the array to remove from.
 * @param start the index to remove the value at.
 * @param deleteCount the number of values to remove.
 * @returns a new array without deleted values
 */
const removeAt = <T>(
  array: Array<T>,
  start: number,
  deleteCount?: number
): Array<T> => {
  const newArray = [...array];

  newArray.splice(start, deleteCount);

  return newArray;
};

/**
 * Updates a value at a given index in an array and returns a new array without mutating the original.
 * @param array the array to update.
 * @param fn the function to update the value with.
 * @param start the index to update the value at.
 * @param updateCount the number of values to update.
 * @returns a new array with the value updated at the given index
 */
const updateValueAtWithFn = <T>(
  array: Array<T>,
  fn: (value: T, index: number, array: Array<T>) => T,
  start: number,
  updateCount?: number
): Array<T> => {
  const count = updateCount ?? 1;

  return array.map((value, index) =>
    index >= start && index < start + count ? fn(value, index, array) : value
  );
};

/**
 * Updates a value at a given index in an array and returns a new array without mutating the original.
 * @param array the array to update.
 * @param value the value to update with.
 * @param start the index to update the value at.
 * @param updateCount the number of values to update.
 * @returns a new array with the value updated at the given index
 */
const updateValueAt = <T>(
  array: Array<T>,
  value: T,
  start: number,
  updateCount?: number
): Array<T> => {
  const count = updateCount ?? 1;

  return array.map((item, index) =>
    index >= start && index < start + count ? value : item
  );
};

/**
 * Updates a value or multiple values at a given index in an array and returns a new array without mutating the original.
 * @param array the array to update.
 * @param valueOrFn the value or function to update with.
 * @param start the index to update the value at.
 * @param updateCount the number of values to update.
 * @returns a new array with the value or values updated at the given index
 * @see updateValueAt
 * @see updateValueAtWithFn
 */
const updateAt = <T>(
  array: Array<T>,
  valueOrFn: T | ((value: T, index: number, array: Array<T>) => T),
  start: number,
  updateCount?: number
): Array<T> =>
  typeof valueOrFn === "function"
    ? // @ts-ignore
      updateValueAtWithFn(array, valueOrFn, start, updateCount)
    : updateValueAt(array, valueOrFn, start, updateCount);
