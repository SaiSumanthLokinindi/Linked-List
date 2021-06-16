const { LinkedList } = require('./LinkedList');

const removeDuplicates = (head) => {
    let temp = head;
    while (temp.next) {
        if (temp.data === temp.next.data) {
            let curr = temp.next;
            temp.next = curr.next;
            curr.next = null;
        }
        else {
            temp = temp.next;
        }
    }
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(4);
LL.addAtTail(5);
LL.addAtTail(5);

LL.printLinkedList();

removeDuplicates(LL.head);

LL.printLinkedList();