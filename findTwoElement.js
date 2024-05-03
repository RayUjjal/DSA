/**
 * Given an unsorted array Arr of size N of positive integers. 
 * One number 'A' from set {1, 2,....,N} is missing and one number 'B' occurs twice in array. Find these two numbers.
 */

function findTwoElement(arr, n) {
    let repeat=-1;
    for(let i=0;i<n;i++){
        let index=Math.abs(arr[i])-1;
        if(arr[index]>0){
            arr[index]*=-1;
        }
        else{
            repeat=Math.abs(arr[i]);
        }
    }

    let missing=-1;
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            missing=i+1;
            break;
        }
    }
    return [repeat,missing];
}

let input = [13, 33, 43, 16, 25, 19, 23, 31, 29, 35, 10, 2, 32, 11, 47, 15, 34, 46, 30, 26, 41, 18, 5, 17, 37, 39, 6, 4, 20, 27, 9, 3, 8, 40, 24, 44, 14, 36, 7, 38, 12, 1, 42, 12, 28, 22, 45];
// let input = [1,3,3];
// let input = [2,2];
console.time('execution_time');
console.log(findTwoElement(input, input.length));
console.timeEnd('execution_time');