describe("promises",function() {

  describe("core API",function() {

    var fulfilledWithSweets = new Promise(function(resolve) {
      resolve("sweets");
    });

    it("resolves successful promises with the first handler",function(check) {
      var yourAnswer = check.FILL_ME_IN;

      fulfilledWithSweets.then(function(value) {
        check(value,yourAnswer);
      });
    }.question());

    it("returns a promise to return value of function after resolution",function(check) {
      var yourAnswer = check.FILL_ME_IN;

      fulfilledWithSweets.then(function(value) {
        return value.toUpperCase()
      }).then(function(value) {
        check(value,yourAnswer);
      });

    }.question());

    
    it("returns a promise to return value of function after resolution - assignment",function(check) {
      var yourAnswer = check.FILL_ME_IN;

      var returnValue = fulfilledWithSweets.then(function(value) {
        return value + "-" + value;
      })
      
      returnValue.then(function(value) {
        check(value,yourAnswer);
      });

    }.question());



    it("an error will mean the promise is rejected",function(check) {
      var yourAnswer = check.FILL_ME_IN;

      fulfilledWithSweets.then(function(value) {
        throw new Error("no sweets please")
      }).then(null,function(rejection) {
        var value = rejection.message;
        check(value,yourAnswer);
      });

    }.question());

    it("returning from the error handler creates will resolve the returned promise",function(check) {
      var yourAnswer = check.FILL_ME_IN;

      var promise = fulfilledWithSweets.then(function(value) {
        throw new Error("no sweets please")
      }).then(null,function(value) {
        return "fixed";
      });

      promise.then(function(value) {
        check(value,yourAnswer);
      });

    }.question());

    describe("all",function() {

      var toffee = new Promise(function(resolve) {
        resolve("toffee");
      });
      var bonbons = new Promise(function(resolve) {
        resolve("bonbons");
      });
      var noSweets = new Promise(function(resolve,reject) {
        reject("sweets are bad for you");
      });

      it("allows multiple promises to be combined",function(check) {
        var yourAnswer = check.FILL_ME_IN;

        var value = Promise.all([toffee,bonbons]).then(function(results) {
          var combined = results.join("-");
          check.answerTo("multiple-promises",combined,yourAnswer);
        });

      }.question());

      it("rejects if any promises are rejected",function(check) {

        var value = Promise.all([toffee,noSweets]).then(
          check.expectToBeCalledTrueFalse(null),
          check.expectToBeCalledTrueFalse(null)
        );

      }.question());

    });

  });
});

