// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

let head = [1, 3, 4, 7, 1, 2, 6];
let head1 = [1, 2, 3, 4];
let head2 = [2, 1];

// not acceptable as linked list don't have the length propety so we can not find middle directly
// right as per my implementaion of linked list
var deleteMiddle = function (head) {
    let middle = Math.ceil(head.length / 2)
    let currentNode = head;
    let previouseNode
    let i = 0;
    while (i !== middle){
        previouseNode = currentNode;
        currentNode = currentNode.next;
        i++;
    }
    previouseNode.next = currentNode.next;
};

console.log(deleteMiddle(head))
// console.log(deleteMiddle(head1))
// console.log(deleteMiddle(head2))

//chat_gpt solution 
var deleteMiddle = function(head) {
    if(!head || !head.next){
        return null;
    }

    let fast = head;
    let slow = head;
    let prev = head;
    while(fast && fast.next){
        prev = slow
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = slow.next;

    return head
};