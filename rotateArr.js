function rotateArr(arr,n,d){
    //code here
    var first = arr.splice(0, d);
    arr=arr.concat(first);
    return arr;
}

console.time('execution_time');
let input=[-1, -2, -3, 4, 5, 6, 7];
let d=2;
console.log(rotateArr(input,input.length,d));
console.timeEnd('execution_time');