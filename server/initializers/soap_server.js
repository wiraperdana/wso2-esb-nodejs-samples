var http = require('http');
var soap = require('soap');

var util = require('util');

module.exports = {
  loadPriority:  100,
  startPriority: 100,
  stopPriority:  100,
  initialize: function(api, next){

    var helloService = {
      Hello_Service: {
        Hello_Port: {
          SayHelloRequest: function(args) {
            console.log(util.inspect(args));
            return {
              firstName: args.name
            };
          }
        }
      }
    }
    var xml = require('fs').readFileSync('public/HelloService.wsdl', 'utf8');
    var server = http.createServer(function(request,response) {
            response.end("404: Not Found: "+request.url)
        });
    server.listen(8082);
    var s = soap.listen(server, '/hello', helloService, xml);
    
    console.log(xml);
    
    s.log = function(type, data) {
        // type is 'received' or 'replied'
        console.log("type: "+util.inspect(type));
        console.log("data: "+util.inspect(data));
    };
    
/*

    var sampleService = {
      Sample_Service: {
        Sample_Port: {
          SampleOperationRequest: function(args) {
            return {
              myArg1: args.myArg1,
              myArg2: args.myArg2
            };
          }
        }
      }
    }
    var xml = require('fs').readFileSync('public/soapSample.wsdl', 'utf8');

    var server = http.createServer(function(request,response) {
            response.end("404: Not Found: "+request.url)
        });
    server.listen(8081);
    var s = soap.listen(server, '/soapSample', sampleService, xml);
    
    s.log = function(type, data) {
      // type is 'received' or 'replied'
      console.log("type: "+util.inspect(type));
      console.log("data: "+util.inspect(data));
    };
*/

    
    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
}