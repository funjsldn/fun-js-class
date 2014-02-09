// Just write standard function expressions in here
// e.g. function myFunc(){...}

function reject(xs, fn){
  var included = [];
  for (var i = 0; i < xs.length; i++) {
    var x = xs[i];
    if (!fn(x)) included.push(x);
  }
  return included;
}

function every(xs, fn){
  for (var i = 0; i < xs.length; i++) {
    var x = xs[i];
    fn = fn || function(y){ return !!y; };
    
    if (!fn(x)) return false;
    else return true;
  }
}

function mapValues(obj, fn){
  var result = {};
  _.each(obj, function(prop, key){
    return result[key] = fn(prop);
  });
  return result;
}

function findKey(obj, fn){
  var result;
  _.each(obj, function(prop, key){
    if (fn(prop)) result = key;
  });
  return result;
}
