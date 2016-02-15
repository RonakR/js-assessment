exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var clsr = [];
    arr.map(function(c, i){
      clsr[i] = function(){
        return fn(c);
      };
    });
    return clsr;
  },

  partial : function(fn, str1, str2) {
    return function(param1){
      return fn(str1, str2, param1);
    }
  },

  useArguments : function() {
    var arr = [].slice.call(arguments);

    return arr.reduce(function(a, b){ return a+b;});
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments, 1, arguments.length);

    return function(){
      args = args.concat([].slice.call(arguments, 0, arguments.length));

      return fn.apply(null, args);
    }
  },

  curryIt : function(fn) {
    var applyArguments = function(fn, currentArguments){
      return fn.apply(null, currentArguments);
    }

    var getArgumentAccumulator = function(accumulatedArguments, expectedArgumentsCount){
      return function(currentArgument){
        accumulatedArguments.push(currentArgument);

        if (accumulatedArguments.length === expectedArgumentsCount){
          return applyArguments(fn, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
