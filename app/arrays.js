exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) != -1) {
        arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(x){return x == item}).length
  },

  duplicates : function(arr) {

    var count = function(arr, item) {
      var check = function(x) {
        return x == item;
      };
      return arr.filter(check).length;
    };

    new_array = [];

    for (var i = 0; i < arr.length; i++) {
      if (count(arr, arr[i]) > 1) {
        if (new_array.indexOf(arr[i]) == -1) {
          new_array.push(arr[i]);
        };
      };
    };
    return new_array;

  },

  square : function(arr) {
    return arr.map(function(x){return Math.pow(x, 2)});
  },

  findAllOccurrences : function(arr, target) {
    indexes = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};
