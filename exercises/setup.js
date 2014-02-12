var chai = require("chai");
global.assert = chai.assert;
global.Promise = require('es6-promise').Promise;

function whatIs(fn) {
  var questionName = "";
  function forMocha(done) {
    var failed = false;
    function api(val,answer) {
      if(val === answer) return done()
      if(answer === whatIs.FILL_ME_IN) return notAttempted();
      if(answer !== val) return incorrect();
    }
    api.FILL_ME_IN = whatIs.FILL_ME_IN;
    var callsExpected = {};
    var callId = 0;
    api.expectToBeCalledTrueFalse = function(assert) {
      if(assert === null) notAttempted();
      var id = callId++;
      if(assert) callsExpected[id] = true;
      return function() {
        if(assert) return callsExpected[id] = false
        incorrect();
      }
    }
    api.answerTo = function(q,v,answer) {
      questionName = q + ": ";
      api(v,answer);
    }
    api.for = function(q) {
      questionName = q + ": ";
      return api;
    }
    fn(api);
    setTimeout(validateCalls);

    function validateCalls() {
      if(callId === 0) return
      for(var call in callsExpected) {
        if(callsExpected[call] === true) return incorrect();
      }
      done();
    }
    function fail(reason) {
      if(failed) return;
      done(new Error(questionName + reason))
      failed = true;
    }
    function notAttempted() {
      fail("Not attempted");
    }
    function incorrect() {
      fail("Incorrect");
    }
  }
  return forMocha;
}
whatIs.FILL_ME_IN = function() {}


Object.defineProperty(Function.prototype,"question",{
  value: function() {
    return whatIs(this)
  }
})

