let arr = [234, 43, 55, 63,  5, 6, 235, 547];

function bblSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<(arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
}
bblSort(arr);



//Optimised BubbleSort

let arr1 = [230,40,50,60,5,6,230,550];

function bblSort1(arr1){
    let i,j;
    let len = arr1.length;
    let isSwapped = false;

    for(i=0; i<len; i++){
        isSwapped = false;
        for(j=0; j<len-1-i; j++){
            if(arr1[j] > arr1[j+1]){
                let temp = arr1[j]
                arr1[j] = arr1[j+1]
                arr1[j+1] = temp
                isSwapped = true 
            }
        }
        if(!isSwapped){
            break;
        }
    }
    console.log(arr1);
}
bblSort(arr1);
