class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        debugger
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value])
            // console.log(this.data)
        } else {
            this.data[address].push([key, value])
        }
    }

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address];
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

//    / keys() {
//         const keysArray = [];
//         for (let i = 0; i < this.data.length; i++) {
//             debugger
//             if (this.data[i]) {
//                 console.log(this.data[i])
//                 keysArray.push(this.data[i][0])
//             }
//         }
//         return keysArray
//     }

    //keys()
    keys() {
        let key = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                key.push(this.data[i][j][0])
            }
        }
        return key;
    }
}


const myHashTable = new HashTable(5);
myHashTable.set('grapes', 10000);
myHashTable.set('apple', 20000);
myHashTable.set('orange', 30000);
let result = myHashTable.get('orange');
console.log("result", result)
console.log(myHashTable.keys())