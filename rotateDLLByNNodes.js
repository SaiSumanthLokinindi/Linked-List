const { DoubleLinkedList } = require('./DoubleLinkedList');

const rotate = (head, n) => {
    let temp = head;
    while (temp.next) temp = temp.next;
    while (n--) {
        let curr = head;
        head = head.next;
        temp.next = curr;
        curr.prev = temp;
        curr.next = null;
        temp = curr;
    }
    return head;
}

const DLL = new DoubleLinkedList();

DLL.addAtTail('a');
DLL.addAtTail('b');
DLL.addAtTail('c');
DLL.addAtTail('d');
DLL.addAtTail('e');
DLL.addAtTail('f');
DLL.addAtTail('g');
DLL.addAtTail('h');

DLL.printLinkedList();

DLL.head = rotate(DLL.head, 4);

DLL.printLinkedList();
