function leftRotate(arr,n,d){
    //code here

    let rotatearr=arr.slice(0,d);
    let remainingarr=arr.slice(d);
    return remainingarr.concat(rotatearr)

    // for(let i=0;i<d;i++){
    //     let temp=arr.shift();
    //     arr.push(temp);
    // }
    // return arr;
}

console.time('execution_time');
let input=[-1, -2, -3, 4, 5, 6, 7];
let d=2;
console.log(leftRotate(input,input.length,d));
console.timeEnd('execution_time');