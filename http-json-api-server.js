//reference https://www.youtube.com/watch?v=a5wVHskZvgQ
// we will use http module for our server
const http = require("http");
// we will use url module to connect to where our data is
const link = require("url");

// we will use moment instead of vanilla Date for all time functionality for cleaner code
const moment = require("moment");
// first we make our server with request and response components
const server = http.createServer( function(request, response){

    
    // Now aquire our path and query from the url provided using the link module
    const { pathname, query} = link.parse(request.url, true);

    // we use our response component to writehead and access the content type
    response.writeHead(200, {'Content-type':"application/json"});
// if pathname is parsetime we will use moment accordingly
    if(pathname =="/api/parsetime")
    {    // we use response.end and make our json with stringify using the moment module
        return response.end(JSON.stringify({

            // we access using our query and convert the time according using moment
            hour: moment(query.iso).hour(),
            
            minute: moment(query.iso).minute(),
            
            second: moment(query.iso).second()

        }))
    }


    // we repeat the process similarly except this time using moments unix aspect of the module 
    if(pathname== "/api/unixtime")
    {
        return response.end(JSON.stringify({
            
            unixtime: +moment(query.iso).format("x")
            

        }))
    }
});

server.listen(process.argv[2]);