exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {

    if (isNaN(num) || !isFinite(num) || num%1 || num<2) return false;
    if (num%2==0) return (num==2);
    var m=Math.sqrt(num);
    for (var i=3;i<=m;i+=2) {
    if (num%i==0) return false;
    }
    return true;

  },

  arraySum : function(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum
  },

  fizzBuzz : function(num) {
    if (isNaN(num)) {
      return false
    }
    if (num%15==0) {
      return "fizzbuzz";
    }
    if (num%3==0) {
      return "fizz";
    }
    if (num%5==0) {
      return "buzz";
    }
    else return (num)
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
  }
};
