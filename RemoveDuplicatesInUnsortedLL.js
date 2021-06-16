const { LinkedList } = require('./LinkedList');

const removeDuplicates = (head) => {
    let temp = head, curr = null;
    let hash = [];
    while (temp) {
        if (hash.indexOf(temp.data) === -1) {
            curr = temp;
            hash.push(curr.data);
            temp = temp.next;
        } else {
            curr.next = temp.next;
            temp.next = null;
            temp = curr.next;
        }
    }
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(9);
LL.addAtTail(2);
LL.addAtTail(4);
LL.addAtTail(2);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(7);
LL.addAtTail(4);


LL.printLinkedList();

removeDuplicates(LL.head);

LL.printLinkedList();