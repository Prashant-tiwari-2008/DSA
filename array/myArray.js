console.log("myArray")

class myCustomeArry {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    //getting an index value
    get() {

    }

    //push method
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    //pop method ==>> returning the deleted element
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //delete element at perticular index
    // using singletone design pattern 
    deleteAtIndex(index) {
        let item = this.data[index];
        this.shiftItem(index)
        return item
    }

    //shift method => remove the first element 
    shift(){
        let item = this.data[0]
        this.shiftItem(0)
    }
    
    //single responsiblity
    shiftItem(index) {
        debugger
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
    }
    
    //unshift Method ==> add element at first position
    unshift(item){
        this.length++;
        this.shiftRight();
        // this.data[0] = item;
    }

    //shift item in right side
    shiftRight(index){
        for(let i=0;i<this.length;i++){
            this.data[this.length-1] = this.data[this.length-2]
        }
        this.length++;
    }
}

const myArray = new myCustomeArry()
myArray.push("Prashant");
myArray.push("Pradeep");
myArray.push("Shweta");
myArray.push("sandeep");
myArray.push("ankit");
// for (let i = 0; i < 10; i++) {
//     myArray.push(Math.floor(Math.random() * 100));
// }
myArray.deleteAtIndex(2)
// myArray.unshift('prakash');
console.log(myArray, "myArray")