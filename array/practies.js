class myCustomArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    //getting an index value
    get(index){
        return this.data[index]
    }
    
    // push
    push(item){
        this.data[this.length] = item
        this.length++;
    }
    //pop
    pop(){
      this.length--;
      delete this.data[this.length];
    }    
    //delete at particular index
    deleteAtIndex(index){
        let item = this.data[index];
        this.shiftItem(index)
    }
    
    shiftItem(index){
        delete this.data[index];
        for(let i = index;i<this.length - 1;i++){
            this.data[i] = this.data[i+1];
        }
        this.pop();
    }
    // shift method(remove first element)
    shift(){
        this.shiftItem(0);
    }
    
    //unshift => pushing item starting
    unshift(item){
        for(let i=this.length;i>0;i--){
            this.data[i] = this.data[i-1]
        }
        this.data[0] = item;
        this.length++;
    }
}

const myArray = new myCustomArray()
for(let i=0;i<10;i++){
    myArray.push(Math.floor(Math.random() * 100 + 1));
}
//myArray.pop();
console.log(myArray)
myArray.unshift(10000);
console.log(myArray);