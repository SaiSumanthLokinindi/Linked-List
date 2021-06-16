const { LinkedList } = require('./LinkedList');

const detectStartingPoint = (head) => {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}


const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

let temp1 = LL.head.next;
let temp2 = LL.head;

while (temp2.next) temp2 = temp2.next;

temp2.next = temp1;

console.log(detectStartingPoint(LL.head));