exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function run(){
      console.log(start++);

      if(start <= end){
        timeout = setTimeout(run, 100);
      }
    }
    run()

    return {
      cancel : function() {
        timeout && clearTimeout(timeout);
      }
    }
  }
};
