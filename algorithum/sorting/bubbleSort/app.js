console.log("bubble sort");

let array = [6, 5, 7, 3, 8, 2, 1, 4, 0]
console.log("old array", array)
function myBubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array [j] > array[j+1]){
                let temp = array [j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
    }
    return array
}

console.log(myBubbleSort(array))