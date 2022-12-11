//first we require our http module via nodejs
const http = require("http");

// we then invoke http.get which takes a url and provides a callbackfunction  with response being our data
http.get(process.argv[2],function callback(responce){


    // we then set the encodeing to utf8 for better readability on the data
    responce.setEncoding("utf8");
     // we use .on to aquire the "data" portion of our url and use the callfunction it provides giving us an array of data elements 
    responce.on("data", function(data){
        
        
        console.log(data);
    });

});