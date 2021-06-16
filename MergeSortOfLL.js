const { LinkedList } = require('./LinkedList');

const getMiddleNode = (head) => {
    if (head === null) return head;
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

const merge = (head1, head2) => {
    let temp1 = head1, temp2 = head2;
    const ll = new LinkedList();
    while (temp1 && temp2) {
        if (temp1.data <= temp2.data) {
            ll.addAtTail(temp1.data);
            temp1 = temp1.next
        }
        else {
            ll.addAtTail(temp2.data);
            temp2 = temp2.next;
        }
    }
    while (temp1) {
        ll.addAtTail(temp1.data);
        temp1 = temp1.next;
    }
    while (temp2) {
        ll.addAtTail(temp2.data);
        temp2 = temp2.next;
    }
    return ll;
}

const mergeSort = (head) => {
    if (head.next === null) {
        return head;
    }
    let mid = getMiddleNode(head);
    let nextOfMiddle = mid.next;
    mid.next = null;
    let left = mergeSort(head);
    let right = mergeSort(nextOfMiddle);
    let aux = merge(left, right);
    return aux.head;
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(5);
LL.addAtTail(3);
LL.addAtTail(12);
LL.addAtTail(2);
LL.addAtTail(7);
LL.addAtTail(4);
LL.addAtTail(6);
LL.addAtTail(3);
LL.addAtTail(9);

LL.head = mergeSort(LL.head);

LL.printLinkedList();
