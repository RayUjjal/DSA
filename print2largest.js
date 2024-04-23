function print2largest(arr, n){
    let higest=-1;
    let n2high=-1;
    if(n>1)
    {
        for(let i=0;i<n;i++){
            if(arr[i]>higest && arr[i]>n2high){
                n2high=higest;
                higest=arr[i];
            }
        }
        return n2high;
    }
    return -1;
}
let input=[12,35,1,10,34,1];
console.log(print2largest(input,input.length));