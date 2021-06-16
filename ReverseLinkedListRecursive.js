const { LinkedList } = require('./LinkedList');

const reverseLinkedList = (head, ll) => {
    if (head.next === null) {
        ll.head = head;
        head.next = null;
        return head;
    }
    let curr = head;
    let temp = reverseLinkedList(curr.next, ll);
    temp.next = curr;
    curr.next = null;
    return curr;
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

LL.printLinkedList();

reverseLinkedList(LL.head, LL);

LL.printLinkedList();