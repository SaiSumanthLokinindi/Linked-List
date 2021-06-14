const LinkedList = require('./LinkedList');

const reverseLinkedList = (LL)=>{
    let temp=LL.head;
    while(temp.next){
        temp=temp.next;
    }
    let curr = LL.head;
    while(curr!==temp){
        LL.head = curr.next;
        curr.next = null;
        if(temp.next===null){
            temp.next = curr;
        }
        else{
            curr.next=temp.next;
            temp.next=curr;
        }
        curr=LL.head;
    }
}

const LL = new LinkedList();

LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

LL.printLinkedList();

reverseLinkedList(LL);

LL.printLinkedList();
