const { LinkedList } = require('./LinkedList');

const reverseLinkedList = (head) => {
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    let curr = head;
    while (curr !== temp) {
        head = curr.next;
        curr.next = null;
        if (temp.next === null) {
            temp.next = curr;
        }
        else {
            curr.next = temp.next;
            temp.next = curr;
        }
        curr = head;
    }
    return temp;
}

module.exports = reverseLinkedList;
