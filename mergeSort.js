function mergeSort(arr,n) {
    if(n<=1){
        return arr;
    }

    let mid=Math.floor(arr.length/2);
    let leftarr=mergeSort(arr.slice(0,mid), arr.slice(0,mid).length);
    let rightarr=mergeSort(arr.slice(mid), arr.slice(mid).length);
    return merge(leftarr,rightarr);
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
    return result.concat(left.slice(l_index),right.slice(r_index));
}


const arr = [3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5]
console.log(mergeSort(arr,arr.length));