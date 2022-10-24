// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let str1 = String(int1);
    let str2 = String(int2);
    if(str1.length !== str2.length) return false;
    let str1Hash = {};
    let str2Hash = {};

    for(let i = 0 ; i < str1.length ; i++){

        if(str1[i] in str1Hash) str1Hash[str1[i]] = str1Hash[str1[i]] +1;
        else{str1Hash[str1[i]] = 1}
        if(str2[i] in str2Hash) str2Hash[str2[i]] = str2Hash[str2[i]] +1;
        else{str2Hash[str2[i]] = 1}
    }

    let j = 0;

    while( j < str1.length){
        if(!(str2[j] in str1Hash) || !(str1[j] in str2Hash) ||
        str1Hash[str1[j]] !== str2Hash[str1[j]]) return false;

        j++;
    }

    return true;
}
