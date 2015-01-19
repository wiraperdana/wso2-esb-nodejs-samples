# wso2-esb-nodejs-samples

Sample of use cases where WSO2 ESB interracts with node.js http and tcp services.

1. HTTP GET (query) to HTTP POST (form)
2. HTTP POST (form) to HTTP GET (query)
3. HTTP POST (form) to HTTP SOAP
4. HTTP POST (form) to TCP
5. HTTP POST (form) to TCP with transform mediator
6. HTTP POST (form) to HTTP GET (query) or TCP with content-based routing mediator
7. HTTP POST (form) to HTTP GET (query) or TCP with content-based routing and transform mediator
8. TCP to HTTP GET (query)

## Getting Started

1. Make sure you have node and npm installed before to start node.js services.

        cd server/
        ./actionhero start 
        
    OR run it in background process
    
        ./actionhero start --daemon

2. Open *usecases* directory. It contains xml files named with use case number.

3. Open the xml file, and copy pasted it as API or PROXY in WSO2 ESB Administration Console source view.

## Available Backend Services

1. HTTP GET (query)

    Calling HTTP GET service with query parameters. 

        curl "http://localhost:8080/api/httpgetquery?myArg={myArg1}&myArg2={myArg2}"
    
    should return
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

2. HTTP GET (params)

    Calling HTTP GET service using REST style.

        curl "http://localhost:8080/httpgetparams/{myArg1}/{myArg2}"
    
    should return string:
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

3. HTTP POST (json)

    Calling HTTP POST service with JSON attached to request body payload.
    
        curl -d '{ "myArg1": <myArg1> , "myArg2": <myArg2> }' "http://localhost:8080/httppostjson"
        
    should return string:
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

4. HTTP POST (xml)

    Calling HTTP POST service with XML attached to request body payload.
    
        curl -d '<?xml version="1.0" encoding="UTF-8"?><request><myArg1>{myArg1}</myArg1><myArg1>{myArg2}</myArg2></request>' "http://localhost:8080/httppostjson"
        
    should return string:
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

5. HTTP POST (form)

    Calling HTTP POST service with x-www-form-urlencoded format attached to request body payload.
    
        curl -d "myArg1={myArg1}" -d "myArg2={myArg2}" "http://localhost:8080/api/httppostform"
        
    should return string:
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

6. TCP

    Calling TCP service with string of parameters separated with space.
    
        telnet localhost 9000
        {myArg1} {myArg2}
        
    should return string:
    
        <{myArg1+myArg2}*{myArg1*myArg2};{(+)myArg1-myArg2}#

## Use Case 1: HTTP GET (query) to HTTP POST (form)

#### ESB API: 
    http://localhost:8280/usecases/first?myArg1={myArg1}&myArg2={myArg2}

#### NODE.JS API: 
    http://localhost:8080/api/httppostform

The service accept parameters in x-www-form-urlencoded format.

#### TRY

    curl "http://localhost:8280/usecases/first?myArg1=12323&myArg2=34343"

should return:

    <1232334343*423208789;22020#
    
## Use Case 2: HTTP POST (form) to HTTP GET (query)

#### ESB API: 
    http://localhost:8280/usecases/second

#### NODE.JS API: 
    http://localhost:8080/api/httpgetquery?myArg={myArg1}&myArg2={myArg2}

#### TRY
    curl -d "myArg1=56565" -d "myArg2=2321" "http://localhost:8280/usecases/second"

should return:

    <565652321*131287365;54244#
    
## Use Case 3: HTTP POST (form) to HTTP SOAP

// TODO