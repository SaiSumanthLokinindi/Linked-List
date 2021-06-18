class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    addAtHead(data) {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return this.head;
        }
        else {
            node.next = this.head;
            this.head = node;
            this.size++;
            return this.head;
        }
    }

    addAtTail(data) {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return this.head;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
            this.tail = node;
            this.size++;
            return this.head;
        }
    }

    addInBetween(data, pos) {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = this.head;
            this.size++;
            return this.head;
        }
        else {
            if (pos === 1) {
                this.addAtHead(data);
            }
            else {
                let temp = this.head;
                let i = 1;
                while (i != pos - 1) {
                    temp = temp.next;
                    i++;
                }
                let curr = temp;
                temp = temp.next;
                curr.next = node
                node.next = temp;
                this.size++;
                return this.head;
            }
        }
    }

    printLinkedList() {
        let res = [];
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            let temp = this.head;
            while (temp) {
                res.push(temp.data);
                temp = temp.next;
            }
        }
        res.push('NULL');
        console.log("\n-------------------\n");
        console.log(res.join(' -> '));
        console.log("\n-------------------\n");
    }

    deleteAtHead() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            if (this.head.next === null) this.tail = null;
            let temp = this.head;
            let data = temp.data;
            temp = temp.next;
            this.head.next = null;
            this.head = temp;
            this.size--;
            return data;
        }
    }

    deleteAtTail() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            let temp = this.head;
            if (temp.next === null) {
                this.head = null;
                this.tail = null;
            }
            else {
                let curr = null;
                while (temp.next) {
                    curr = temp;
                    temp = temp.next;
                }
                curr.next = null;
                this.tail = curr;
            }
            this.size--;
            return temp.data;
        }
    }

    deleteInBetween(pos) {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            if (pos === 1) {
                return this.deleteAtHead();
            }
            let i = 0;
            let temp = this.head;
            let curr = null;
            while (i !== pos - 1) {
                curr = temp;
                temp = temp.next;
                i++;
            }
            curr.next = temp.next;
            temp.next = null;
            this.size--;
            return temp.data;
        }
    }
}

module.exports = { Node, LinkedList };
