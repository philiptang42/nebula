exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    obj.Friday = fn;
    console.log(obj.Friday)
    return obj.Friday();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    console.log(constructor.prototype);
  },

  iterate : function(obj) {
    var properties_array = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var properties_pair = key + ": " + obj[key];
        properties_array.push(properties_pair);
      };
    };
    console.log(properties_array);
    return properties_array;
  }
};
