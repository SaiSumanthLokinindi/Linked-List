const { LinkedList, Node } = require('./LinkedList');

const printLL = (head) => {
    let curr = head, res = [];
    while (curr) {
        res.push(curr.data);
        curr = curr.next;
    }
    res.push("NUll");
    console.log("\n--------------\n");
    console.log(res.join(" -> "));
    console.log("\n--------------\n");
}

const segregate = (head) => {
    let evenStart = null, evenEnd = null, oddStart = null; oddEnd = null, curr = head;
    while (curr) {
        if (curr.data % 2 === 0) {
            if (!evenStart) {
                evenStart = new Node(curr.data);
                evenEnd = evenStart;
            }
            else {
                evenEnd.next = new Node(curr.data);
                evenEnd = evenEnd.next;
            }
        }
        else {
            if (!oddStart) {
                oddStart = new Node(curr.data);
                oddEnd = oddStart;
            }
            else {
                oddEnd.next = new Node(curr.data);
                oddEnd = oddEnd.next;
            }
        }
        curr = curr.next;
    }
    if (!evenStart || !oddStart) {
        return head;
    }
    evenEnd.next = oddStart;
    return evenStart;
}

const LL = new LinkedList();

LL.addAtHead(11);
LL.addAtHead(10);
LL.addAtHead(9);
LL.addAtHead(6);
LL.addAtHead(4);
LL.addAtHead(1);
LL.addAtHead(0);

LL.printLinkedList();

let head = segregate(LL.head);

printLL(head);