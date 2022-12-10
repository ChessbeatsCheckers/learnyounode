//first we require and get our fs module that will allow us to read the files and access the file system
const fs = require('fs');
// next we require the path module that is part of nodejs to access information on files within a path
const path = require("path");
// we know the second argument is the extension we will be searching for so we will declare it as a global variable
filetypeneeded = "."+ process.argv[3];
// We will use readdir, to read the directory with the fs module that is part of nodejs, this will get us access to the files in the directory
fs.readdir(process.argv[2], function(err , data)
{
    //we will now loop through all the files in the directory with the printarre function
   data.forEach(printarre);

});


function printarre(obj, index, arre)
{
   // we will use the path.extname module to check the extension of each file and compare them. If the extension returned is the same as the global variable we are looking for we will filter it out and print it
    if(path.extname(obj)==filetypeneeded)
         console.log(obj);
}