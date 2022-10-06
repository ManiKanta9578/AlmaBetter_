function mergeSort(arr, l, r){
    //base condition
    if(l <= r){
        return
    }

    let mid = parseInt((l + r) / 2)  // split into 2 parts
    mergeSort(arr, l, mid)  
    mergeSort(arr, mid+1, r)
    merge(arr, l, r, mid)
}

function merge(arr, l, r, mid){

    let n1 = l - mid + 1   //length of left array
    let n2 = r - mid       // length of riht array

    let L = new Array(n1)
    let R = new Array(n2)

    //copying data

    for(i=0; i<n1; i++){
        L[i] = arr[l + 1];
    }
    for(j=0; j<n2; j++){
        R[j] = arr[mid+1 +1]
    }

    let i=0, j=0, k=0;

    while(i<n1 && j<n2){
        if(L[i] < R[j]){
            arr[k] = L[i]
            i++
        }else{
            arr[k] = R[j]
            j++
        }
        k++
    }

    //copying remaining data

    while(i<n1){
        arr[k] = L[i]
        i++
        k++
    }
    while(j<n2){
        arr[k] = R[j]
        j++
        k++
    }
}