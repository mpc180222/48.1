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




describe("separatePositive", function() {
  it("does nothing to arrays of all positive numbers", function() {
    var arr = [1, 2, 3];
    expect(separatePositive(arr)).toBe(arr);
  });

  it("does nothing to arrays of all negative numbers", function() {
    var arr = [-1, -2, -3];
    expect(separatePositive(arr)).toBe(arr);
  });

  it("moves positives to the left and negatives to the right", function() {
    var arr = [2, -1, -3, 6, -8, 10];
    separatePositive(arr);

    expect(arr[0] > 0).toBe(true);
    expect(arr[1] > 0).toBe(true);
    expect(arr[2] > 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);

    var arr2 = [5, 10, -15, 20, 25];
    separatePositive(arr2);

    expect(arr2[0] > 0).toBe(true);
    expect(arr2[1] > 0).toBe(true);
    expect(arr2[2] > 0).toBe(true);
    expect(arr2[3] > 0).toBe(true);
    expect(arr2[4]).toBe(-15);
  });
});
