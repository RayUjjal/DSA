function rotate(arr, n) {
    if(n==1){
        return arr;
    }
    let result=[];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            result.push(arr[n - 1])
        }
        else {
            result.push(arr[i-1])
        }
    }

    return result;
}

const input = [1, 2, 3, 4, 5];
console.log(rotate(input, input.length));