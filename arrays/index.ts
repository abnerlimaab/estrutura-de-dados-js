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
