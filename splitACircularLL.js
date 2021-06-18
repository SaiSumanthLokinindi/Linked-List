const { LinkedList } = require("./LinkedList");

const printLinkedList = (head) => {
    let res = [];
    if (head === null) {
        console.log("Linked List is empty");
        return;
    }
    else {
        let temp = head;
        while (temp.next !== head) {
            res.push(temp.data);
            temp = temp.next;
        }
        res.push(temp.data);
    }
    console.log("\n-------------------\n");
    console.log(res.join(' -> '));
    console.log("\n-------------------\n");
}

const splitACircularLL = (head) => {
    let slow = head, fast = head;
    if (head.next === null) {
        return [null, null];
    }
    while (fast.next !== head && fast.next.next !== head) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;
    slow.next = head;
    slow = temp;
    while (temp.next !== head) temp = temp.next;
    temp.next = slow;
    return [head, slow];
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

LL.tail.next = LL.head;

const [head1, head2] = splitACircularLL(LL.head);

printLinkedList(head1);
printLinkedList(head2);
