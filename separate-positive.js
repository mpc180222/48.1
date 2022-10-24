// add whatever parameters you deem necessary
function separatePositive(arr) {
    let i = 0;
    let j = arr.length -1;
    while(i < j){
        if(arr[i] < 0 && arr[j] > 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
            i++;
            j--;}
        else if(arr[i] > 0 && arr[j] > 0) i++;
        else if(arr[i] <0 && arr[j] <0)j--;
        else{
            i++;
            j--;
        }
    }
    return arr;
}
