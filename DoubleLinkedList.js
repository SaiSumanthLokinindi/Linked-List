class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addAtHead(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    addAtTail(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
            node.prev = temp;
        }
    }

    addInBetween(data, pos) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            if (pos === 1) {
                this.addAtHead(data);
            } else {
                let i = 1, temp = this.head;
                while (temp.next) {
                    if (i === pos - 1) {
                        let curr = temp.next;
                        temp.next = node;
                        node.prev = temp;
                        node.next = curr;
                        curr.prev = node;
                        return;
                    }
                    i++;
                    temp = temp.next;
                }
                temp.next = node;
                node.prev = temp;
            }
        }
    }

    deleteAtHead() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            let data = this.head.data, temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
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
            while (temp.next) temp = temp.next;
            let curr = temp.prev;
            curr.next = null;
            temp.prev = null;
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
                this.deleteAtHead();
            }
            else {
                let i = 1, temp = this.head;
                while (temp) {
                    if (i === pos) {
                        let curr = temp.prev;
                        curr.next = temp.next;
                        if (temp.next === null) {
                            temp.prev = null;
                        }
                        else {
                            temp.next.prev = curr;
                            temp.prev = null;
                            temp.next = null;
                        }
                        return temp.data;
                    }
                    i++;
                    temp = temp.next;
                }
            }
        }
    }

    printLinkedList() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return;
        }
        else {
            let temp = this.head, res = [];
            res.push("NULL");
            while (temp) {
                res.push(temp.data);
                temp = temp.next;
            }
            res.push("NULL");
            console.log("\n------------------\n");
            console.log(res.join("  <-->  "));
            console.log("\n------------------\n");
        }
    }
}

module.exports = { DoubleLinkedList, Node };