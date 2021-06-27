const { LinkedList } = require('./LinkedList');
const reverseLL = require('./ReverseLinkedList');

const deleteRight = (head) => {
    head = reverseLL(head);
    let max = head.data, temp = head;
    while (temp.next) {
        if (temp.next.data < max) {
            let curr = null;
            if (temp.next.next) {
                curr = temp.next.next;
                temp.next.next = null;
                temp.next = curr;
            }
            else {
                temp.next = temp.next.next;
            }
        }
        else if (temp.next.data > max) {
            max = temp.next.data;
            temp = temp.next;
        }
        else {
            temp = temp.next;
        }
    }
    return reverseLL(head);
}

const LL = new LinkedList();
// LL.addAtTail(12);
// LL.addAtTail(15);
// LL.addAtTail(10);
// LL.addAtTail(11);
// LL.addAtTail(5);
// LL.addAtTail(6);
// LL.addAtTail(2);
// LL.addAtTail(3);

LL.addAtTail(10);
LL.addAtTail(20);
LL.addAtTail(30);
LL.addAtTail(40);
LL.addAtTail(50);
LL.addAtTail(60);

LL.head = deleteRight(LL.head);

LL.printLinkedList();