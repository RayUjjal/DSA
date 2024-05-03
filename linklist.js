class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    append(data, pos = (this.length + 1)) {
        if (pos > (this.length + 2) || pos <= 0) {
            return;
        }
        const newNode = new Node(data);
        //null list add to start
        if (this.head == null) {
            this.head = newNode;
        }
        // add to last
        else if (pos == (this.length + 1)) {
            let lastNode = this.lastnode();
            lastNode.Node.next = newNode;
        }
        // add to position
        else {
            if (pos == 1) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let lastNode = this.lastnode(pos);
                newNode.next = lastNode.Node;
                // lastNode.prevNode.next = newNode;
            }
        }
        this.length++;
    }

    delete(pos = this.length) {
        let currentNode = this.head;
        let prev = null;
        console.log(this.length);
        if (pos - 1 == 0) {
            this.head = currentNode.next;
            return;
        }
        else if(pos>this.length){
            return;
        }
        for (let i = 0; i < pos; i++) {
            if (i == pos - 1) {
                prev.next = currentNode.next;
            }
            else {
                prev = currentNode;
                currentNode = currentNode.next;
            }
        }  
    }

    print(pos = this.length) {
        let node = this.head;
        pos > this.length || pos == 0 ? this.display("null") : "";
        for (let i = 0; i < this.length; i++) {
            if (pos == this.length) {
                this.display(String(node.data) + " -> " + (node.next == null ? node.next : ""));
            }
            else if (i == (pos - 1)) {
                this.display(node.data);
            }
            node = node.next;
        }
        this.display("\n");
    }

    display(data) {
        process.stdout.write(data);
    }

    lastnode(pos = this.length) {
        let node = this.head;
        let prev = null;
        for (let i = 0; i < pos - 1; i++) {
            prev = node;
            node = node.next;
        }
        return { prevNode: prev, Node: node };
    }
}

let llist = new LinkList();
llist.append("ujjal");
llist.delete();
llist.print();
llist.append("ujjal");
llist.print();
llist.append("test_user_2");
llist.append("test_user_3");
llist.print();
llist.delete();
llist.print();
llist.append("test_user_3");
llist.delete(1);
llist.print();
llist.append("ujjal", 1);
llist.print();
llist.append("ujjal22", 1);
llist.print();
llist.delete(5);
llist.print();
