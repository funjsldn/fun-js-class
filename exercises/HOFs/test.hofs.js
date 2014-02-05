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
    
    test('should return collection of odd numbers', function(){
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

    test('should return a Boolean', function(){
      assert.isBoolean(falsey, "Check the return type of every");
      assert.isBoolean(truthy, "Check the return type of every");
      assert.isBoolean(noFn, "Check the return type of every");
    });

    test('should return false if any values in collection are falsey', function(){
      assert.equal(falsey, false, "Check truthiness of collection items");
    });

    test('should return true if all values in collection are truthy', function(){
      assert.equal(truthy, true, "Check truthiness of collection items");
    });

    test('should return value casted to boolean when no callback provided', function(){
      assert.equal(noFn, true, "Have you provided a default callback?");
    });
  });

  suite('mapValues', function(){
    var doubled;
    
    setup(function() {
      doubled = mapValues({'a': 1, 'b': 2, 'c': 3}, function(num){
        return num * 2;
      });
    });

    test('should return an object', function(){
      assert.isObject(doubled, "Check return type of mapValues");
    });

    test('should return new object with all prop values doubled', function(){
      assert.deepEqual(doubled, {'a': 2, 'b': 4, 'c': 6});
    });

    test('should return new object pluralized prop values', function(){
      var plurals = mapValues({'a': 'house', 'b': 'cat', 'c': 'monkey'}, function(animal){
        return animal + 's';
      });

      assert.deepEqual(plurals, {'a': 'houses', 'b': 'cats', 'c': 'monkeys'});
    });
  });

  suite('findKey', function(){
    var findTeen;
    
    setup(function() {
      var children = {
        'Martha': 27,
        'Paul': 45,
        'Richard': 16
      };
      
      findTeen = findKey(children, function(child){
        return child < 20;
      });
    });

    test('should return a string', function(){
      assert.isString(findTeen, "Check return type of findKey");
    });

    test('should return first child under 20', function(){
      assert.equal(findTeen, "Richard");
    });
  });
});
