const { LinkedList } = require('./LinkedList');

const moveToFront = (head) => {
    let temp = head, curr = null;
    while (temp.next) {
        curr = temp;
        temp = temp.next;
    }
    curr.next = null;
    temp.next = head;
    return temp;
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

LL.printLinkedList();

LL.head = moveToFront(LL.head);

LL.printLinkedList();