exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(a,b) {return a + b;});
  },

  remove : function(arr, item) {
    return arr.filter(function(a) { return a != item; } );
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0, len = arr.length; i < len; i++){
      if (arr[i] == item) {
        arr.splice(i, 1);
        i --;
        len --;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop()
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail : function(arr) {
    arr.shift()
    return arr;
  },

  concat : function(arr1, arr2) {
    arr2.map(function(a){arr1.push(a);});
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var num = 0;
    arr.map(function(a){ if ( a==item ) num++;});
    return num;
  },

  duplicates : function(arr) {
    
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
