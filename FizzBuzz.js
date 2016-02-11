var FizzBuzz = function(n) {
  for (var i = 0; i <= n; i++) {
    var str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    console.log(str || i);
  }
};

FizzBuzz(100);
