function search(arr, N, X){
    for(let i=0;i<N;i++){
        if(arr[i]==X){
            return i;
        }
    }

    return -1;
}

const input=[1,2,3,4,5];
const find=4;
console.log(search(input,input.length,find));