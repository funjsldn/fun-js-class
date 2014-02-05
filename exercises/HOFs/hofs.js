// Just write standard function expressions in here
// e.g. function myFunc(){...}

function reject(xs, fn){
  var rejected = [];
  for (var i = 0; i < xs.length; i++) {
    var x = xs[i];
    if (!fn(x)) rejected.push(x);
  }
  return rejected;
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
  _.each(obj, function(prop, key, obj){
    return result[key] = fn(prop);
  });
  return result;
}
