// we require the http module to make the server
http= require("http");
// we require the file system module to access our file and data
fs= require("fs");

// we create a server with our http module that has request and responce components
const server=  http.createServer(function(request, responce){

    // we access our data through our fs module
    data= fs.createReadStream(process.argv[3]);
    // we pipe our data through with our responce component
    data.pipe(responce);


});


//we listen to the server and get our servers responce that had the data
server.listen(process.argv[2]);