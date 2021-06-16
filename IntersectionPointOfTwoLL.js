const { LinkedList } = require('./LinkedList');

const findIntersectionNode = (head1, head2) => {
    let temp1 = head1, temp2 = head2;
    while (temp1) {
        temp1.data = temp1.data * -1;
        temp1 = temp1.next;
    }
    while (temp2) {
        if (temp2.data < 0) {
            break;
        }
        temp2 = temp2.next;
    }
    return temp2.data * -1;
}

const LL1 = new LinkedList();

LL1.addAtTail(3);
LL1.addAtTail(6);
LL1.addAtTail(9);
LL1.addAtTail(15);
LL1.addAtTail(30);


const LL2 = new LinkedList();

LL2.addAtTail(10);

let temp = LL1.head;
while (temp.data !== 15) {
    temp = temp.next;
}

LL2.head.next = temp;

console.log(findIntersectionNode(LL1.head, LL2.head));