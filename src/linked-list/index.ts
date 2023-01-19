import { defaultEquals } from "../utils";

interface _Node<T> {
    element: T;
    next: _Node<T> | null;
}

interface LinkedList<T> {
    push: (element: T) => LinkedList<T>;
    insert: (element: T, index: number) => LinkedList<T>;
    getElementAt: (index: number) => T | undefined;
    remove: (element: T) => LinkedList<T>;
    indexOf: (element: T) => number;
    removeAt: (index: number) => LinkedList<T>;
    isEmpty: () => boolean;
    size: () => number;
    toString: () => string;
}

const createLinkedList = <T>(equalsFn = defaultEquals) => {
    let head: _Node<T> | null = null;
    const setHead = (newHead: _Node<T> | null) => head = newHead;

    let length = 0;
    const setLength = (newLength: number) => length = newLength;

    function linkedList(equalsFn = defaultEquals) {

        const push = (element: T) => {
            setLength(length + 1);

            const node = { element, next: null };

            if (!head) {
                setHead(node);
                return linkedList(equalsFn);
            }

            let current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;

            return linkedList(equalsFn);
        }

        return {
            push,
            length
        }
    };

    return linkedList(equalsFn);
}

export default createLinkedList;