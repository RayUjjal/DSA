function getMinMax(arr,n){
    let min=Infinity;
    let max=-Infinity;

    arr.forEach(element => {
        max=element>max?element:max;
        min=element<min?element:min;
    });
    return [min,max];
}
const input = [1, 2, 3, 4, 5];
console.log(getMinMax(input, input.length));