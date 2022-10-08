let array=[34,21,41,12,1,6,89];
console.log(array);

mergesort(array,0,array.length-1);
console.log(array);

function mergesort(arr,left,right){
    if(left<right){
        let mid=parseInt(left+(right-left)/2);
        mergesort(arr,left,mid);
        mergesort(arr,mid+1,right);
        merge(arr,left,mid,right);
    }
}


function merge(arr,left,mid,right){
    let m=mid-left+1;
    let n=right-mid;

    let leftArray=[];
    let rightArray=[];

    for(let i=0;i<m;i++){
        leftArray[i]=arr[left+i];
    }

    for(let i=0;i<n;i++){
        rightArray[i]=arr[mid+i+1];
    }
    let i=0,j=0,k=left;

    while(i<m && j<n){
        if(leftArray[i]<=rightArray[j]){
            arr[k]=leftArray[i];
            i++;
            k++;
        }
        else{
            arr[k]=rightArray[j];
            j++;
            k++;
        }
    }

    while(i<m){
        arr[k]=leftArray[i]; i++; k++;
    }

    while(j<n){
        arr[k]=rightArray[j]; j++;k++;
    }
}