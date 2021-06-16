const { LinkedList } = require('./LinkedList');
const reverseLinkedList = require('./ReverseLinkedList');

const addTwoNumbers = (head1, head2) => {
    let temp1 = head1, temp2 = head2, carry = 0;
    const LL = new LinkedList();
    while (temp1 !== null && temp2 !== null) {
        let sum = temp1.data + temp2.data + carry;
        if (sum >= 10) {
            carry = parseInt(sum / 10);
            LL.addAtTail(sum % 10);
        }
        else {
            LL.addAtTail(sum);
            carry = 0;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    while (temp1) {
        sum = temp1.data + carry;
        if (sum >= 10 && temp1.next === null) {
            carry = parseInt(sum / 10);
            LL.addAtTail(sum % 10);
            LL.addAtTail(carry);
        }
        else if (sum >= 10) {
            carry = parseInt(sum / 10);
            LL.addAtTail(sum % 10);
        }
        else {
            LL.addAtTail(sum);
            carry = 0;
        }
        temp1 = temp1.next;
    }
    while (temp2) {
        sum = temp2.data + carry;
        if (sum >= 10 && temp2.next === null) {
            carry = parseInt(sum / 10);
            LL.addAtTail(sum % 10);
            LL.addAtTail(carry);
        }
        else if (sum >= 10) {
            carry = parseInt(sum / 10);
            LL.addAtTail(sum % 10);
        }
        else {
            LL.addAtTail(sum);
            carry = 0;
        }
        temp2 = temp2.next;
    }
    if (carry > 0) {
        LL.addAtTail(carry);
    }
    LL.head = reverseLinkedList(LL.head);
    return LL;
}

const LL1 = new LinkedList();

LL1.addAtTail(5);
LL1.addAtTail(6);
LL1.addAtTail(3);
// LL1.addAtTail(4);
// LL1.addAtTail(6);

const LL2 = new LinkedList();

LL2.addAtTail(8);
LL2.addAtTail(4);
LL2.addAtTail(2);

const LL3 = addTwoNumbers(LL1.head, LL2.head);

LL3.printLinkedList();