function isSubsequence(subStr, parentStr) {

  let subStrPointer = 0;

  for(let i = 0 ; i < parentStr.length ; i ++){

      if(parentStr[i] === subStr[subStrPointer]) subStrPointer++;

      if(subStrPointer === subStr.length) return true;

  }
  return false;

}


describe("isSubsequence", function() {
  it("should return true if the first string is a substring of the second", function() {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it("should return false if the first string is not a substring of the second", function() {
    expect(isSubsequence("abc", "acb")).toBe(false);
    expect(isSubsequence("notasubstring", "banana")).toBe(false);
    expect(isSubsequence("almost", "almossssss")).toBe(false);
  });
});
