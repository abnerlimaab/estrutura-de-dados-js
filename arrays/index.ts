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
const insertAtEnd = <T>(array: Array<T>, value: T): Array<T> => [
  ...array,
  value,
];

/**
 * Removes the first element from an array and returns a new array without mutating the original.
 * @param array the array to remove from
 * @returns a new array with the first element removed
 */
const removeAtStart = <T>(array: Array<T>): Array<T> => array.slice(1);

/**
 * Removes the last element from an array and returns a new array without mutating the original.
 * @param array the array to remove from
 * @returns a new array with the last element removed
 */
const removeAtEnd = <T>(array: Array<T>): Array<T> => array.slice(0, -1);

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
const insertAt = <T>(
  array: Array<T>,
  value: T | Array<T>,
  index: number
): Array<T> =>
  Array.isArray(value)
    ? insertValuesAt(array, value, index)
    : insertValueAt(array, value, index);
