// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let hash={};
    let numPairs = 0;

    for(let i = 0; i < arr.length ; i ++){
        if(arr[i] in hash) numPairs++;
        else{let res = num - arr[i];
        hash[res] = arr[i];}
    }
    return numPairs;
}
