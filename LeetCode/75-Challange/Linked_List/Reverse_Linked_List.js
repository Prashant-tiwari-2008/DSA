// Given the head of a singly linked list, reverse the list, and return the reversed list.

const head = [1, 2, 3, 4, 5] //[5,4,3,2,1]
const head1 = [1, 2] //[2,1]

var reverseList = function (head) {
    let previous = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
};