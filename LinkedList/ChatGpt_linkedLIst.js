class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Points to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initial head of the list
        this.size = 0; // Size of the list
    }

    // 1. Insert a node at the beginning
    insertAtHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // 2. Insert a node at the end
    insertAtEnd(value) {
        let newNode = new Node(value);
        if (!this.head) { // If list is empty, make the new node the head
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode;
        }
        this.size++;
    }

    // 3. Insert a node at a given index
    insertAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            return null; // Invalid index
        }
        let newNode = new Node(value);
        if (index === 0) {
            this.insertAtHead(value);
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // Traverse to the position
        while (count < index) {
            previous = current; // Store previous node
            current = current.next; // Move to next node
            count++;
        }
        newNode.next = current; // Insert new node between previous and current
        previous.next = newNode;
        this.size++;
    }

    // 4. Delete a node by value
    deleteByValue(value) {
        if (!this.head) {
            return null; // List is empty
        }
        let current = this.head;
        let previous = null;

        // If the head node is to be deleted
        if (current.value === value) {
            this.head = current.next;
            this.size--;
            return;
        }

        // Traverse the list to find the node to be deleted
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            return null; // Value not found
        }

        // Remove node by linking previous node to the next node
        previous.next = current.next;
        this.size--;
    }

    // 5. Delete a node at a given index
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null; // Invalid index
        }
        let current = this.head;
        let previous = null;
        let count = 0;

        if (index === 0) {
            this.head = current.next; // Remove the head
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next; // Remove the node at index
        }
        this.size--;
    }

    // 6. Search for a value in the list
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true; // Value found
            }
            current = current.next;
        }
        return false; // Value not found
    }

    // 7. Reverse the linked list
    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; // Store next node
            current.next = previous; // Reverse the link
            previous = current; // Move previous and current one step forward
            current = next;
        }
        this.head = previous; // Reset the head to the new first node
    }

    // 8. Traverse the linked list
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // 9. Get the size of the list
    getSize() {
        return this.size;
    }

    // 10. Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }
}
