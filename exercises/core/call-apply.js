describe("call and apply",function() {

  function usesThis() {
    return this.property;
  }
  function usesThisAndArguments(a) {
    return this + a;
  }

  describe("call",function() {
    // for these tests, change the arguments to .call to make the tests pass
    it("can be used to set the value of 'this' for functions using it",function() {
      assert.equal(usesThis(),"hello")
    });

    it("can pass arguments",function() {
      assert.equal(usesThisAndArguments(),15)
    });

    it("is useful for using prototype methods as functions",function() {
      var notAnArray = {0:"foo",1: "bar",2: "baz",3: "qux",length:4};
      // YOUR CODE
      var middleTwoElementsSliced = notAnArray;
      // END CODE
      assert.deepEqual(middleTwoElementsSliced,["bar","baz"]);
    });
  })

  describe("arguments",function() {
    it("can be used to implement variable length arguments lists",function() {
      function implementationFunction() {
        // YOUR CODE STARTS
        testFunction();
        // YOUR CODE ENDS
      }

      implementationFunction("bolt","runner b","runner c","runner d");

      function testFunction(winner,losers) {
        assert.equal("bolt",winner);
        assert.deepEqual(["runner b","runner c","runner d"],losers);
      }
    });
  })

  describe("apply",function() {

    it("can call a function with a list of values",function() {
      var values = [1,50,25,100,-Infinity];
      // modify the call to max
      assert.equal(Math.max(),100);
    });


    it("can be used with the argument array to wrap existing functions",function() {
      function takesFirstNArguments(n,fn) {
        // YOUR CODE STARTS
        return function() {
        }
        // YOUR CODE ENDS
      }

      var maxer = takesFirstNArguments(2,Math.max);

      assert.equal([1,-100,50,1000,-2].reduce(maxer),1000);
    });


  });

});
