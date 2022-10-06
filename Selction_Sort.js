function selctionSot(arr){
    let n = arr.length;
    let min_idx;

    for(let i=0; i<n-1; i++){
        min_idx =i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min_idx]){
                min_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
    console.log(arr);
}
let arr = [77,44,11,88,55,22,99,66,33];

selctionSot(arr);