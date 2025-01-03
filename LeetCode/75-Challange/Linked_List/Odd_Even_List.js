// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

const head = [1, 2, 3, 4, 5] // [1,3,5,2,4]
const head1 = [2, 1, 3, 5, 6, 4, 7] // [2,3,6,7,1,5,4]

// chatgpt solution
const oddEvenList = (head) => {
    if (!head || !head.next) return head; 

    let odd = head;
    let even = head.next;
    let evenHead = even

    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next
    }
    odd.next = evenHead;

    return head;
}

console.log(oddEvenList(head))
console.log(oddEvenList(head1))
