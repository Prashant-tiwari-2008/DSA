console.log("Insertion Sort")

const array = [12, 45, 23, 51, 19, 8];
const array1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("original array", array1)

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

console.log("sorted array", insertionSort(array1))