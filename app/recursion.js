exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Extra Credit
  },

  permute: function(arr) {
    // Extra Credit
  },

  fibonacci: function(n) {
    // Required
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
  },

  validParentheses: function(n) {
    // Extra Credit
  }
};
