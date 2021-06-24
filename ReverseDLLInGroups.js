const { DoubleLinkedList } = require('./DoubleLinkedList');
const reverseDLL = require('./ReverseDoublyLL');

const reverse = (head, n) => {
    if (n === 0 || n === 1) return head;
    let temp = head, curr = head, i = 1, flag = 0, start = null, end = null;
    while (temp) {
        if (i === n || temp.next === null) {
            temp = temp.next;
            if (temp) {
                temp.prev.next = null;
                temp.prev = null;
            }
            if (curr.prev) {
                start = curr.prev;
                start.next = null;
                curr.prev = null;
            }
            else {
                start = null;
            }
            curr = reverseDLL(curr);
            if (flag === 0) {
                head = curr;
                flag = 1;
            }
            if (start) {
                curr.prev = start;
                start.next = curr;
            }
            else {
                curr.prev = start;
            }
            end = curr;
            while (end.next) end = end.next;
            end.next = temp;
            if (temp) {
                temp.prev = end;
            } else break;
            curr = temp;
            i = 1;
            if (temp.next !== null)
                continue;
        }
        i++;
        temp = temp.next;
    }
    return head;
}

const DLL = new DoubleLinkedList();

DLL.addAtTail(1);
DLL.addAtTail(2);
DLL.addAtTail(3);
DLL.addAtTail(4);
DLL.addAtTail(5);
DLL.addAtTail(6);
DLL.addAtTail(7);
DLL.addAtTail(8);

DLL.printLinkedList();

DLL.head = reverse(DLL.head, 8);

DLL.printLinkedList();