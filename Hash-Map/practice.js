class MyHashTable{
    constructor(size){
        this.data = new Array(size);
    }
    
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) *i ) % this.data.length;
        }
        return hash;
    }
    
    //set
    set(key,value){
        let address = this._hash(key);
       if(!this.data[address]){
           this.data[address] = []
           this.data[address].push([key,value])
       }else{
           this.data[address].push([key,value])
       }
    }
        
    //get
    get(key){
        let address = this._hash(key);
       // while(key !== this.data[address][i]) // Need to think for it
       for(let i=0;i<this.data[address].length;i++){
           if(key === this.data[address][i][0]){
               console.log(this.data[address][i][1])
           }
       }
    }
    
    //keys()
    keys(){
        let key = [];
        for(let i = 0;i<this.data.length;i++){
            for(let j=0;j<this.data[i].length;j++){
                key.push(this.data[i][j][0])
            }
        }
        return key;
    }
}

const myHash = new MyHashTable(2);
myHash.set('name',"prashant")
myHash.set('age',32)
myHash.set('gender',"male")
myHash.set('id',310205)
console.log(myHash)
console.log("keys => ",myHash.keys())