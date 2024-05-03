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

    deleteK(head, k) {
        //code here
        let currentNode = head;
        let prev = null;
        if (k - 1 == 0) {
            this.head = currentNode.next;
            return;
        }
        let i = 1;
        while (currentNode !== null) {
            if (i % k == 0) {
                console.log("removing::" + currentNode.data);
                prev.next = currentNode.next;
            }
            else {
                prev = currentNode;
                currentNode = currentNode.next;
            }
            console.log("-------------");
            console.log("(i + 1) * n - 1::" + ((i) * k));
            i++;
            console.log("i::" + i);
            this.printlist(head);
            console.log("currentNode::" + JSON.stringify(currentNode));

        }

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
let input_ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = input_ar1.length;
// for (let i = 0; i < 2 * n; i += 2) {
//     if (input_ar1[i + 1] === 1) {
//         head = llist.insertAtEnd(head, input_ar1[i]);
//     }
//     else {
//         head = llist.insertAtBegining(head, input_ar1[i]);
//     }
// }
for (let i = 0; i < n; i++) {
    head = llist.insertAtEnd(head, input_ar1[i]);
}
// llist.printlist(head);
// console.log("-------------");
head = llist.deleteK(head, 3);
// console.log("-------------");
llist.printlist(head);

/*
5 2 9 5 6
*/ 