class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    insertAtBegining(head, newData) {
        //your code here
        let newNode = new Node(newData);
        if (head == null) {
            head = newNode;
        }
        else {
            newNode.next = head;
            head = newNode;
        }
        return head;
    }
    //Function to insert a node at the end of the linked list.
    insertAtEnd(head, newData) {
        let newNode = new Node(newData);
        if (head == null) {
            return newNode;
        }
        let currentNode = head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return head;

    }

    printlist(head) {
        let current = head;
        let s = '';
        while (current !== null) {
            s += current.data + " ";
            current = current.next;
        }
        console.log(s);
    }
}

let head = null;
let llist = new LinkList();
let input_ar1 = [9, 0, 5, 1, 6, 1, 2, 0, 5, 0];
let n = 5;
for (let i = 0; i < 2 * n; i += 2) {
    if (input_ar1[i + 1] === 1) {
        head = llist.insertAtEnd(head, input_ar1[i]);
    }
    else {
        head = llist.insertAtBegining(head, input_ar1[i]);
    }
}
llist.printlist(head);

/*
5 2 9 5 6
*/ 