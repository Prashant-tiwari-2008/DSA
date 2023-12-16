console.log("Merge Sort")

const Input = [12, 34, 11, 1, 54, 25, 67, 45];

function mergeSort(unsorted_array) {
    let mid = unsorted_array.length / 2;
    if (unsorted_array.length < 2) {
        return unsorted_array
    }
    let left = unsorted_array.splice(0, mid);
    return sort(mergeSort(left), mergeSort(unsorted_array))
}

function sort(leftArray, rightArray) {
    let array = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            array.push(leftArray.shift())
        } else {
            array.push(rightArray.shift())
        }
    }
    return [...array, ...leftArray, ...rightArray]
}




console.log(mergeSort(Input))