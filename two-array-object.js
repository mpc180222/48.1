// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {

    let i = 0;
    let obj ={};

    while(i < arr1.length){

        if(arr1[i] && arr2[i]) obj[arr1[i]] = arr2[i];
        else if(!arr2[i]) obj[arr1[i]] = null;
        i++;
    }

}
