/*
selection sort
*/

function selectionSort(a, n) {
    for (let i = 0; i < n; i++) {
        for(let j=i;j<n;j++){
            if(a[i]>a[j]){
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return n > 0 ? a : [-1];
}

const arr = [3,4,12,3,12,3,4,4,12,7,11,6,5]
console.log(selectionSort(arr, arr.length));