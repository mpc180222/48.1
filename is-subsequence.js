// add whatever parameters you deem necessary
function isSubsequence(subStr, parentStr) {

    let subStrPointer = 0;

    for(let i = 0 ; i < parentStr.length ; i ++){

        if(parentStr[i] === subStr[subStrPointer]) subStrPointer++;

        if(subStrPointer === subStr.length) return true;

    }
    return false;

}
