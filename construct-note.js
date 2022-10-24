// add whatever parameters you deem necessary
function constructNote(msg, letters) {

    if(msg.length ===0) return true;
    if(msg.length > 0 && letters.length === 0) return false;

    let result = true;
    function countFreq(str){
        let obj = {};
        for(let i = 0 ; i < str.length ; i ++){
            if(obj[str[i]]) obj[str[i]] ++;
            else{obj[str[i]] = 1}
        }
        return obj;}

        let msgObj = countFreq(msg);
    let lettersObj = countFreq(letters);

    for(let key in msgObj){

        if(!lettersObj[key] || lettersObj[key] && lettersObj[key] < msgObj[key]) result = false;

    }

    return result;

}
