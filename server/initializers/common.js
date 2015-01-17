module.exports = {
  loadPriority:  900,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
        
    api.commonFunction = function threeOps(myArg1, myArg2) {
      var addition = myArg1 + myArg2;
      var multiplication = myArg1 * myArg2;
      var substraction = myArg1 - myArg2;
      substraction = (substraction < 0)? substraction * -1 : substraction;
      
      var result = "<" + addition + "*" + multiplication + ";" + substraction + "#";
      
      return result;
    }

    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
}