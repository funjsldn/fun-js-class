describe("call and apply",function() {

  function usesThis() {
    return this.property;
  }
  function usesThisAndArguments(a) {
    return this + a;
  }

  function slicer(thing,from,to) {
    // YOUR CODE
    // END CODE
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

    it("can be used with to create a reusable 'slicer' that slices any array-like thing",function() {

      // references 'slicer' function

      var notAnArray = {0:"foo",1: "bar",2: "baz",3: "qux",length:4};
      var anArray = ["afoo","abar","abaz","aqux"];

      assert.deepEqual(slicer(notAnArray,1,3),["bar","baz"]);
      assert.deepEqual(slicer(anArray,1,3),["abar","abaz"]);
      assert.deepEqual(slicer(anArray,1),["abar","abaz","aqux"]);
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

  
    describe("can use arguments, apply and HOFs to recreate .bind",function() {

      function yourBind(fn,thisArg) {
        // YOUR CODE HERE
        // END YOUR CODE
      }

      function yourPartial(fn) {
        // YOUR CODE HERE
        // END YOUR CODE
      }

      function usesThisAndTwoArgs(a,b) {
        return [a,b,this.property].join("-");
      }
      function usesThreeArgs(a,b,c) {
        return [a,b,c].join("-");
      }

      var boundOnce = yourBind(usesThisAndTwoArgs,{property: "thisArg"},"a");
      var boundTwice = yourBind(boundOnce,null,"b");
      var boundThreeTimes = yourBind(yourBind(yourBind(usesThisAndTwoArgs,{property: "thisArg"}),null,"a"),null,"y");

      var partialThreeTimes = yourPartial(yourPartial(yourPartial(usesThreeArgs,"a"),"m"),"z");

      it("can be applied repeatedly",function() {
        assert.equal(boundTwice(),"a-b-thisArg")
      })
      it("can be applied repeatedly - further",function() {
        assert.equal(boundThreeTimes(),"a-y-thisArg")
      })
      it("can use extra arguments",function() {
        assert.equal(boundOnce("z"),"a-z-thisArg")
      })
      it("isn't hard-coded",function() {
        assert.equal(boundOnce("b"),"a-b-thisArg","uses extra arguments")
      })
      it("in turn, can implement partial",function() {
        assert.equal(partialThreeTimes(),"a-m-z")
      })
    });

});
