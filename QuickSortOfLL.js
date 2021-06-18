const LinkedList = require('./LinkedList');

const partition = (head) => {
    let temp = head, prev = head, tailLeft = null, tailRight = null;
    while (temp.next) {
        temp = temp.next;
        if (!temp.next.next) tailLeft = temp;
    }
    let pivot = temp;
    temp = head;
    while (temp.next !== pivot) {

        if (temp.data >= pivot.data) {
            if (prev === temp) {
                head = prev.next;
                prev.next = null;
                pivot.next = prev;
                tailRight = prev;
                temp = head;
                prev = temp;
            }
            else {
                prev.next = temp.next;
                temp.next = null;
                tailRight.next = temp;
                tailRight = temp;
                temp = prev.next
            }
        }
        else {
            prev = temp;
            temp = temp.next
        }
    }

}