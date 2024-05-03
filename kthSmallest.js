function kthSmallest(arr, l, r, k) {
    for(let i=l;i<k;i++){
        let swap = false;
        for(let j=r;j>=i;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
                swap=true;
            }
        }
        if(!swap){
            break;
        }
        console.log(arr);
    }
    return arr[k-1];
}

function kthSmallest2(arr, l, r, k){
    arr=arr.sort((a,b)=>a-b);
    return arr[k-1];
}
let input =[7,10,4,20,15];
let l=0,r=5,k=4;
console.log(kthSmallest2(input, l, r, k));