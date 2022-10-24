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




describe("constructNote", function() {
  it("should return false for empty letters string", function() {
    expect(constructNote("abcd", "")).toBe(false);
  });

  it("should return true for empty message", function() {
    expect(constructNote("", "abc")).toBe(true);
  });

  it("should account for duplicates", function() {
    expect(constructNote("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", function() {
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  it("should return true if all letters contained", function() {
    expect(constructNote("abc", "abcd")).toBe(true);
  });
});
