import { stateCreator } from "../state";

export interface _Node<T> {
  element: T;
  getNext: () => _Node<T> | null;
  setNext: (next: _Node<T> | null) => void;
  getPrevious: () => _Node<T> | null;
  setPrevious: (previous: _Node<T> | null) => void;
  disconnect: () => void;
}

const useState = stateCreator();

export const createNode = <T>(element: T): _Node<T> => {
  const [getNext, setNext] = useState<_Node<T> | null>(null);
  const [getPrevious, setPrevious] = useState<_Node<T> | null>(null);

  const disconnect = () => {
    if (getNext()) {
      getNext().setPrevious(null);
    }

    if (getPrevious()) {
      getPrevious().setNext(null);
    }

    setNext(null);
    setPrevious(null);
  };

  const node = () => ({
    element,
    getNext,
    setNext,
    getPrevious,
    setPrevious,
    disconnect,
  });

  return node();
};
