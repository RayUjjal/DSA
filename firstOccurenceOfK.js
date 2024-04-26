function search(n, k, arr) {
    // code here
    for(let i=0;i<n;i++){
        if(arr[i]==k){
            return i+1;
        }
    }
    return -1;
}

let input=[9, 7, 2, 16, 4];
let k=16;
console.log(search(input.length,k,input));