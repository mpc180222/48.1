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



describe("averagePair", function () {
  it("should return true if an average pair exists", function () {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });

  it("should return false if an average pair does not exist", function () {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });
});
