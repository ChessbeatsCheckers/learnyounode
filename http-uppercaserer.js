// first we require our http module for our server
const http = require("http");
// we then require our through2-map module for reaching our data chunk
const throughmap = require("through2-map");
// we make our http server that has a callback with a request and response components
const server = http.createServer(function(request,response){
    
    

    //we get our request and data by pipeing and using the through2-map callback function which provides a chunk component
    request.pipe(throughmap(function(chunk){
        //we then convert the chunk to a string and make it uppercase
        return chunk.toString().toUpperCase();


    })).pipe(response);
    // We lastly pipe with the response component
});

// we listent on the server port provided 
server.listen(process.argv[2]);