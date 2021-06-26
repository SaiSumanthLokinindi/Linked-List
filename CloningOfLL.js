

class Node {
    constructor(data) {
        this.data = data;
        this.random = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtTail(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
            return this.head;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
            return this.head;
        }
    }

}

const clone = (head) => {
    const clone = new LinkedList();
    let temp = head, curr = null;
    while (temp) {
        clone.addAtTail(temp.data);
        temp = temp.next;
    }
    temp = head, curr = clone.head;
    while (curr) {
        curr.random = temp;
        temp = temp.next;
        curr = curr.next;
    }
    curr = clone.head;
    while (curr) {
        curr.random.next = curr;
        curr = curr.next;
    }
    curr = clone.head;
    while (curr) {
        curr.random = curr.random.random.next;
        curr = curr.next;
    }
    return clone;
}



const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

let temp = LL.head;
temp.random = temp.next.next;
temp.next.random = temp.next.next.next.next;
temp.next.next.random = temp.next;
temp.next.next.next.random = temp;
temp.next.next.next.next.random = temp.next.next.next;

const clonedLL = clone(LL.head)

temp = clonedLL.head;
console.log(temp.random);