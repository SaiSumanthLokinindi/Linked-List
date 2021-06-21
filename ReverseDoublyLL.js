const { DoubleLinkedList } = require('./DoubleLinkedList');

const reverseDLL = (head) => {
    let temp = head, curr = null;
    while (temp.next) temp = temp.next;
    curr = temp;
    while (head !== temp) {
        curr = head;
        head = head.next;
        curr.next = null;
        head.prev = null;
        if (temp.next === null) {
            temp.next = curr;
            curr.prev = temp;
        }
        else {
            curr.next = temp.next;
            temp.next.prev = curr;
            curr.prev = temp;
            temp.next = curr;
        }
    }
    return temp;
}

const DLL = new DoubleLinkedList();

DLL.addAtTail(1);
DLL.addAtTail(2);
DLL.addAtTail(3);
DLL.addAtTail(4);
DLL.addAtTail(5);

DLL.printLinkedList();

DLL.head = reverseDLL(DLL.head);

DLL.printLinkedList();