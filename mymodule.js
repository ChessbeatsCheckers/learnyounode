// we require the file system module from node.js
const fs = require("fs");
// we require the path module from node.js
const path = require("path");


// we setup our call module.exports for our callback, it will recieve a directory, and extension.
module.exports= (dir, ext, callback)=>{

    ext="."+ext;  // we add "." to our ext for search purposes later
    // we declare fs.readdir and get a list of all files in that directory and invoke the callback function
    fs.readdir(dir, function(error,list){

        // we setup error handleing, and send an error callback if it does occur during readdir
        if(error) 
        return callback(error);

        // we declare an array of files to send 
        const filestosend=[];
        
        // we scan through the list and add files with  extension to the filestosent array
        list.forEach(function(obj){  if(path.extname(obj)==ext) filestosend.push(obj);})

        // we send back our callback with an error of null and filestosend having all the  files within it 
        return callback(null, filestosend);
    });
}