exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var new_string = "";
    var last_char = "";
    var char_count = 1;
    for (var i = 0; i < str.length; i++) {
      var this_char = str[i]
      if (this_char == last_char) {
        if (char_count < amount) {
          new_string += this_char;
        };
        char_count++;
      } else {
        new_string += this_char;
        char_count = 1;
      };
      last_char = this_char;
    };
    return new_string
  },

  wordWrap: function(str, cols) {

    var count = 0;
    var words = str.split(" ");
    var result = [];
    for(var i = 0;i < words.length;i++) {
      count += words[i].length;
      result.push(words[i]);
      var nextWord = words[i + 1];
      if (nextWord) {
        var nextWordCharacters = nextWord.length;
        if (count + nextWordCharacters < cols) {
          result.push(" ");
          count += 1;
        } else {
          result.push("\n");
          count = 0;
        }
      }

    }

    return result.join("")

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
