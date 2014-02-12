var library = require("./hofs.js");

describe('Underscore methods', function(){
  describe('Arrays', function(){
    describe('reject', function(){
      var odds;
      
      beforeEach(function(){
        odds = library.reject([1,2,3,4,5,6], function(num){
          return num % 2 == 0;
        });
      });
      
      it('should return a new collection', function(){
        assert.isArray(odds, "Check the return type of reject");
      });
      
      it('should return collection of odd numbers', function(){
        assert.deepEqual([1,3,5], odds, "Check the conditions of inclusion in the return array");
      });
    });

    describe('every', function(){
      var falsey, truthy, noFn;
      
      beforeEach(function(){
        falsey = library.every(['', false, true, 0], function(x){
          return !!x;
        });
        truthy = library.every([true, true, 1, "string"], function(x){
          return !!x;
        });
        noFn = library.every([true, 194, "string"]);
      });

      it('should return a Boolean', function(){
        assert.isBoolean(falsey, "Check the return type of every");
        assert.isBoolean(truthy, "Check the return type of every");
        assert.isBoolean(noFn, "Check the return type of every");
      });

      it('should return false if any values in collection are falsey', function(){
        assert.equal(falsey, false, "Check truthiness of collection items");
      });

      it('should return true if all values in collection are truthy', function(){
        assert.equal(truthy, true, "Check truthiness of collection items");
      });

      it('should return value casted to boolean when no callback provided', function(){
        assert.equal(noFn, true, "Have you provided a default callback?");
      });
    });
  });

  describe('Objects', function(){
    describe('mapValues', function(){
      var doubled;
      
      beforeEach(function() {
        doubled = library.mapValues({'a': 1, 'b': 2, 'c': 3}, function(num){
          return num * 2;
        });
      });

      it('should return an object', function(){
        assert.isObject(doubled, "Check return type of mapValues");
      });

      it('should return new object with all prop values doubled', function(){
        assert.deepEqual(doubled, {'a': 2, 'b': 4, 'c': 6});
      });

      it('should return new object pluralized prop values', function(){
        var plurals = library.mapValues({'a': 'house', 'b': 'cat', 'c': 'monkey'}, function(animal){
          return animal + 's';
        });

        assert.deepEqual(plurals, {'a': 'houses', 'b': 'cats', 'c': 'monkeys'});
      });
    });

    describe('findKey', function(){
      var findTeen;
      
      beforeEach(function() {
        var children = {
          'Martha': 27,
          'Paul': 45,
          'Richard': 16
        };
        
        findTeen = library.findKey(children, function(child){
          return child < 20;
        });
      });

      it('should return a string', function(){
        assert.isString(findTeen, "Check return type of findKey");
      });

      it('should return first child under 20', function(){
        assert.equal(findTeen, "Richard");
      });
    });
  });
});
