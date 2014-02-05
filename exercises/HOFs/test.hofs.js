var assert = chai.assert;

suite('Underscore methods', function(){
  suite('reject', function(){
    var odds;
    
    setup(function(){
      odds = reject([1,2,3,4,5,6], function(num){
        return num % 2 == 0;
      });
    });
    
    test('should return a new collection', function(){
      assert.isArray(odds, "Check the return type of reject");
    });
    
    test('should reject collection items callback does not return truthy for', function(){
      assert.deepEqual([1,3,5], odds, "Check the conditions of inclusion in the return array");
    });
  });

  suite('every', function(){
    var falsey, truthy, noFn;
    
    setup(function(){
      falsey = every(['', false, true, 0], function(x){
        return !!x;
      });
      truthy = every([true, true, 1, "string"], function(x){
        return !!x;
      });
      noFn = every([true, 194, "string"]);
    });

    test('should return false if any values in collection are falsey', function(){
      assert.equal(falsey, false);
    });

    test('should return true if all values in collection', function(){
      assert.equal(truthy, true);
    });

    test('should return casted boolean when no callback provided', function(){
      assert.equal(noFn, true);
    });
  });
});
