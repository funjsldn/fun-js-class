exports.reject = reject;
exports.every = every;
exports.mapValues = mapValues;
exports.findKey = findKey;

var _ = require("underscore");

function reject(xs, fn){
  var included = [];
  for (var i = 0; i < xs.length; i++) {
    var x = xs[i];
    if (!fn(x)) included.push(x);
  }
  return included;
}

function every(xs, fn){
  var result = true;
  var index = -1, length = xs.length;
  
  fn = fn || function(y){ return !!y; };

  while (++index < length){
    if (!(result = !!fn(xs[index]))) {
      break;
    }
  }

  return result;
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
