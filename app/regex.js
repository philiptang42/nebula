exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var hasnumber = (/\d/);
    return hasnumber.test(str);
  },

  containsRepeatingLetter : function(str) {

    previous_letter = "";
    alphabet = /[a-zA-Z]/;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == previous_letter) {
        return true;
      } else {
      if (alphabet.test(str[i])) {
        previous_letter = str[i];}
      };
    };
    return false;
  },

  endsWithVowel : function(str) {

    var vowels = /[aeiouAEIOU]/;
    last_letter = str[str.length - 1];
    return vowels.test(last_letter);

  },

  captureThreeNumbers : function(str) {

    // var number_check = /\d/;
    // var numbers = [];
    // for (var i = 0; i < str.length; i++) {
    //   if (number_check.test(str[i])) {
    //     numbers.push(str[i]);
    //     if (numbers.length == 3) {
    //       return numbers.join("");
    //     }
    //   } else {
    //     numbers = [];
    //   };
    // }
    // return false;

    var nums = (/\d\d\d/.exec(str));
    if (nums == null) {
      // exec creates an array that match the parameters defined under the regex
      return false;
    }
    else {
      return nums[0];
    }
  },

  matchesPattern : function(str) {

    var phone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    return phone.test(str);

  },

  isUSD : function(str) {

    var money = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
    return money.test(str);

  }
};
