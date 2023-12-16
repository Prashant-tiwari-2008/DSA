console.log("selection sort")

let array = [6, 5, 7, 3, 8, 2, 1, 4]
console.log("old array", array)

function mySelectionSort(array) {
    for(let i=0; i < array.length;i++){
        let min = array[i];
        for(let j=i; j < array.length; j++){
            if(min > array[j]){
                min = array[j];
            }
        }
       let index = array.indexOf(min)
       let temp = array[i];
       array[i] = min;
       array[index] = temp
       console.log(array)
    }
    return array
}

console.log(mySelectionSort(array))