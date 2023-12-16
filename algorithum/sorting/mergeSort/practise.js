console.log("Merge Sort")

const Input = [12, 34, 11, 1, 54, 25, 67, 45];

function myMergeSort(array) {
    let mid = array.length / 2;
    if (array.length < 2) {
        return array
    }
    let leftArray = array.splice(0, mid);
    let x = mergeElement(myMergeSort(leftArray), myMergeSort(array))
    return x
}

function mergeElement(leftElement, rightElement) {
    let array = [];
    while (leftElement.length && rightElement.length) {
        if (leftElement[0] < rightElement[0]) {
            array.push(leftElement.shift())
        } else {
            array.push(rightElement.shift())
        }
    }
    return [...array, ...leftElement, ...rightElement]
}

console.log(myMergeSort(Input))