function averagePair(arr, avg) {
    if(!arr.length) return false;
    let i = 1;
    let result = false;
    while(i < arr.length){
      let j = 0;
      while (j < i){
        if((arr[i]+arr[j])/2 === avg) return true;
        j++;
      }
  
      i++;
    }
    return result;
  }
  