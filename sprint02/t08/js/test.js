const assert = require('chai').assert;
const { checkBrackets } = require('./script')


describe("checkBrackets", function() {

  describe("Correct tests", function () {
    let correctArray = [
      "r(jk)j()))", 2,
      "r((wuhd(()", 3,
      "(efke)", 0,
      "e3((())8u)88)", 1,
      "((ew()djfn)q)))", 2,
      "_)", 1,
      "))(", 3,
      "wyegyer", -1,
      "()))))", 4,
      "(rtuegef)(jkrhfgrg", 1,
      "()", 0 
    ];

    let makeCorrectTest = (value, result) => {
      it(`In "${value}" string have to add ${result} brackets`, function () {
        assert.equal(checkBrackets(value), result);
      });
    }

    for (let i = 0; correctArray[i]; i += 2)
      makeCorrectTest(correctArray[i], correctArray[i + 1])
  });
 });

 describe("Incorrect tests", function () {
  let incorrectArray = [
    NaN,
    undefined,
    null,
    ["))(", 0]
    ["))(", 1]
  ];

  let makeErrorTest = (value) => {
    it(`If income ${typeof value} return value is -1`, function () {
      assert.equal(checkBrackets(value), -1);
    });
  }
  for (let i = 0; i < incorrectArray.length; i++)
    makeErrorTest(incorrectArray[i]);
});

