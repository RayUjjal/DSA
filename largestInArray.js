function largest(arr, n) {
    // write your code here
    let max=arr[0];
    arr.forEach(element => {
        if(element>max) {
            max=element;
        }
    });
    return max;
}

const arr = [1, 8, 7, 56, 90]
console.log(largest(arr, arr.length));