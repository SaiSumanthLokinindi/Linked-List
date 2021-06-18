const { LinkedList } = require('./LinkedList');
const reverseLinkedList = require('./ReverseLinkedList');



const checkPalindrome = (head) => {
    let slow = head, fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = reverseLinkedList(slow.next);
    slow.next = temp;
    let p1 = head, p2 = temp;
    while (p1 != temp && p2) {
        if (p1.data !== p2.data) {
            return false
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    temp = reverseLinkedList(temp);
    slow.next = temp;
    return true;
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(2);
LL.addAtTail(1);

console.log(checkPalindrome(LL.head));

LL.printLinkedList();