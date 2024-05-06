function loopHere(head, tail, position) {
    if (position === 0)
        return;
    let walk = head;
    for (let i = 1; i < position; i++)
        walk = walk.next;
    tail.next = walk;
}

function isLoop(head) {
    if (!head) return false;

    let fast = head.next;
    let slow = head;

    while (fast !== slow) {
        if (!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
}

function length(head) {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}

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

    getNthFromLast(head, n) {
        // code here

    }

    removeDuplicates(head) {
        //your code here

        let current = head;
        let prev = null;
        let list = {};
        while (current !== null) {
            if (!list.hasOwnProperty(current.data)) {
                list[current.data] = (list[current.data] || 0) + 1;
            }
            else {
                prev.next = current.next;
                current = current.next;
                continue;
            }
            prev = current;
            current = current.next;
        }

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
                prev.next = currentNode.next;
            }
            prev = currentNode;
            currentNode = currentNode.next;
            i++;
        }

        return head;
    }

    removeLoop(head) {
        //your code here
        let loop = {};
        let current = head;
        let prev = null;
        while (current != null) {
            if (!loop.hasOwnProperty(current.data)) {
                loop[current.data] = (loop[current.data] || 0) + 1;
            }
            else {
                prev.next = null;
                break;
            }
            prev = current;
            current = current.next;
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

/** insertion*/
// {
//     let input_ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let n = input_ar1.length;
//     for (let i = 0; i < 2 * n; i += 2) {
//         if (input_ar1[i + 1] === 1) {
//             head = llist.insertAtEnd(head, input_ar1[i]);
//         }
//         else {
//             head = llist.insertAtBegining(head, input_ar1[i]);
//         }
//     }
// }

/** deleting */
{
    // let input_ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let n = input_ar1.length;
    // for (let i = 0; i < n; i++) {
    //     head = llist.insertAtEnd(head, input_ar1[i]);
    // }
    // llist.printlist(head);
    // console.log("-------------");
    // head = llist.deleteK(head, 3);
    // llist.printlist(head);
}

/** removing Duplicates */
// {
//     let input_ar1 = [1, 2, 2, 2, 2, 2, 3, 4, 4, 5];
//     let n = input_ar1.length;
//     for (let i = 0; i < n; i++) {
//         head = llist.insertAtEnd(head, input_ar1[i]);
//     }
//     llist.printlist(head);
//     console.log("-------------");
//     head = llist.removeDuplicates(head);
//     llist.printlist(head);
// }

/**removing loops */
{
    let input_ar1 = [62,20,37,80,14,14,69,71,56,47];
    let n = input_ar1.length;
    for (let i = 0; i < n; i++) {
        head = llist.insertAtEnd(head, input_ar1[i]);
    }
    let tail = head;
    for (let i = 1; i < n; i++) {
        tail.next = new Node(input_ar1[i]);
        tail = tail.next;
    }
    let pos = 3;
    loopHere(head, tail, pos);
    llist.removeLoop(head);
    if (isLoop(head) || length(head) !== n)
        console.log("0");
    else
        console.log("1");
}