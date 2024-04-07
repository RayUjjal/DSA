function mergeSort(array,begin) {
    end = array.length;
    if (end <= 1) {
        return array;
    }

    let mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}

function merge(left, right) {
    let l_index = 0;
    let r_index = 0;
    let result = [];
    while (l_index < left.length && r_index < right.length) {
        if (left[l_index] < right[r_index]) {
            result.push(left[l_index]);
            l_index++;
        }
        else {
            result.push(right[r_index]);
            r_index++;
        }
    }
    return result;
}


const arr = [3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5]
console.log(mergeSort(arr));