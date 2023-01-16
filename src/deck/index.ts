import { insertAt, removeAtEnd, removeAtStart } from "../arrays";

interface Deck<T> {
  /**
   * addFront adds an item to the front of the deck (index 0)
   * @param value The value to add to the front of the deck
   * @returns A new deck with the value added to the front
   */
  addFront: (value: T | T[]) => Deck<T>;
  /**
   * addBack adds an item to the back of the deck (index length - 1)
   * @param value The value to add to the back of the deck
   * @returns A new deck with the value added to the back
   */
  addBack: (value: T | T[]) => Deck<T>;
  /**
   * removeFront removes an item from the front of the deck (index 0)
   * @returns A new deck with the value removed from the front
   */
  removeFront: () => Deck<T>;
  /**
   * removeBack removes an item from the back of the deck (index length - 1)
   * @returns A new deck with the value removed from the back
   */
  removeBack: () => Deck<T>;
  /**
   * peekFront returns the value at the front of the deck (index 0)
   * @returns The value at the front of the deck
   */
  peekFront: () => T;
  /**
   * peekBack returns the value at the back of the deck (index length - 1)
   * @returns The value at the back of the deck
   */
  peekBack: () => T;
  /**
   * getAll returns all the values in the deck
   * @returns An array of all the values in the deck
   */
  getAll: () => T[];
  /**
   * isEmpty returns true if the deck is empty
   * @returns True if the deck is empty otherwise false
   */
  isEmpty: () => boolean;
  /**
   * size returns the number of items in the deck
   * @returns The number of items in the deck
   */
  size: () => number;
  /**
   * clear returns an empty deck
   * @returns An empty deck
   */
  clear: () => Deck<T>;
  /**
   * toString returns a string representation of the deck
   * @returns A string representation of the deck
   */
  toString: () => string;
}

const deck = <T>(items: T[] = []): Deck<T> => ({
  addFront: (value: T | T[]) => deck(insertAt(items, value, 0)),
  addBack: (value: T | T[]) => deck(insertAt(items, value, items.length)),
  removeFront: () => deck(removeAtStart(items)),
  removeBack: () => deck(removeAtEnd(items)),
  peekFront: () => items[0],
  peekBack: () => items[items.length - 1],
  getAll: () => items,
  isEmpty: () => items.length === 0,
  size: () => items.length,
  clear: () => deck(),
  toString: () => items.toString(),
});

export default deck;
