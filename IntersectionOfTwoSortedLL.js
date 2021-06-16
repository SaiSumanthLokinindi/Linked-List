const { LinkedList } = require('./LinkedList');

const findIntersection = (head1, head2) => {
    let temp1 = head1, temp2 = head2;
    const LL = new LinkedList();
    while (temp1 && temp2) {
        if (temp1.data === temp2.data) {
            LL.addAtTail(temp1.data);
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        else if (temp1.data < temp2.data) {
            temp1 = temp1.next;
        }
        else {
            temp2 = temp2.next;
        }
    }
    return LL;
}

const LL1 = new LinkedList();

LL1.addAtTail(1);
LL1.addAtTail(2);
LL1.addAtTail(3);
LL1.addAtTail(4);
LL1.addAtTail(5);


const LL2 = new LinkedList();

LL2.addAtTail(2);
LL2.addAtTail(3);
LL2.addAtTail(4);
// LL2.addAtTail(8);


const LL3 = findIntersection(LL1.head, LL2.head);

LL3.printLinkedList();

