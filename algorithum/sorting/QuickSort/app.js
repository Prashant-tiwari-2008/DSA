console.log("Quick Sort")

const Input = [12, 34, 11, 1, 54, 25, 67, 45];

function QuickSort(unsorted_array) {
    if(unsorted_array.length <= 1){
        return unsorted_array;
    }
    let pivet = unsorted_array[0];
    let leftArray = [];
    let rightArray = [];
    for (let i = 1; i < unsorted_array.length; i++) {
        if (unsorted_array[i] < pivet) {
            leftArray.push(unsorted_array[i]);
        }else{
            rightArray.push(unsorted_array[i])
        }
    }
    return [...QuickSort(leftArray),pivet,...QuickSort(rightArray )]
}

console.log(QuickSort(Input))