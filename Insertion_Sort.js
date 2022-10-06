function insertionSort(arr,n){
    let i,j,key;
    for(i=1; i<n; i++){
        key = arr[i];
        j = i-1;

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    console.log(arr);
}
let arr = [78,46,34,98,13,28,55,1,62];
let n = arr.length;
insertionSort(arr,n);