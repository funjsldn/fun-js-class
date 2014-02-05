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
