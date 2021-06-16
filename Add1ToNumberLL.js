const { Node, LinkedList } = require('./LinkedList');
const reverseLinkedList = require('./ReverseLinkedList');

const add1ToLinkedList = (head) => {
    head = reverseLinkedList(head);
    let temp = head, carry = 1, curr = null;
    while (carry != 0 && temp) {
        let sum = temp.data + carry;
        carry = 0;
        if (sum >= 10) {
            temp.data = sum % 10;
            carry = sum / 10;
            curr = temp;
            temp = temp.next;
        }
        else {
            temp.data = sum;
        }
    }
    if (carry > 0) {
        const node = new Node(carry);
        curr.next = node;
    }
    head = reverseLinkedList(head)
    return head;
}

const ll = new LinkedList();

ll.addAtTail(1);
ll.addAtTail(9);
ll.addAtTail(9);
ll.addAtTail(9);

ll.printLinkedList();

ll.head = add1ToLinkedList(ll.head);

ll.printLinkedList();