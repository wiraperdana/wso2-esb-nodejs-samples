var soap = require('soap-server');

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){

    function SoapService(){}
    SoapService.prototype.soap = function(myArg1, myArg2){
        return api.commonFunction(myArg1, myArg2);
    };
    
    api.soap_server = new soap.SoapServer();
    var soapService = api.soap_server.addService('soapService', new SoapService());
    
    var soapOperation = soapService.getOperation('soap');
    soapOperation.setInputType('myArg1', {type: 'number'});
    soapOperation.setInputType('myArg2', {type: 'number'});
    
    api.soap_server.listen(8081, '127.0.0.1');

    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
}