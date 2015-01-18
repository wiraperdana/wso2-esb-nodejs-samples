var util = require('util');

var commonInputs = {
  myArg1: {
    required: true,
    validator: function(param){
      if(param > 0){
        return true;
      }else{
        return new Error('myArg1 should be greater than 0');
      }
    },  
    formatter: function(param){
      return parseInt(param);
    },
  }, 
  myArg2: {
    required: true,
    validator: function(param){
      if(param > 0){
        return true;
      }else{
        return new Error('myArg2 should be greater than 0');
      }
    },
    formatter: function(param){
      return parseInt(param);
    },
  }
};
    
exports.http_get = {
  name:                   'http_get_query',
  description:            'http_get_query',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: commonInputs,

  run: function(api, connection, next){
    connection.rawConnection.responseHeaders.push(['Content-Type', 'text/plain']);
        
    var myArg1 = connection.rawConnection.params.query.myArg1;
    var myArg2 = connection.rawConnection.params.query.myArg2;
    
    connection.response = api.commonFunction(myArg1, myArg2);
    
    next(connection, true);
  }
};

exports.http_post = {
  name:                   'http_post_form',
  description:            'http_post_form',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: commonInputs,

  run: function(api, connection, next){
    connection.rawConnection.responseHeaders.push(['Content-Type', 'text/plain']);
    
    api.log(util.inspect(connection));
    
    var myArg1 = connection.params.myArg1;
    var myArg2 = connection.params.myArg2;
    
    connection.response = api.commonFunction(myArg1, myArg2);
    
    next(connection, true);
  }
};