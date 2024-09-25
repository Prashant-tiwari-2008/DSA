console.log("array")

// push,pop, deleteAtIndex,shift,unshift,shiftItem,shiftRight
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    deleteAtIndex(index) {
        delete this.data[index];
        this.length--;
    }
    /**
     * remove the element form the first position
     */
    shift() {
        this.length--;
        delete this.data[0];
        this.shiftleft();
    }

    shiftleft() {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
    }

    unshift(item) {
        this.length++;
        this.shiftRight()
        this.data[0] = item
    }

    shiftRight() {
        for (let i = 0; i <this.length;i++)
        {
            this.data[i+1] = this.data[i]
        }
    }

}


const myArray = new MyArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(40);
myArray.push(50);
myArray.push(60);
// myArray.pop();
// myArray.deleteAtIndex(3)
myArray.shift();
myArray.unshift(1)
console.log(myArray)
// console.log(myArray);