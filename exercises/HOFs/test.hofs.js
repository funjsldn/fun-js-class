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
});
