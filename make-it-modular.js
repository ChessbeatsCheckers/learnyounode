// we require our module, to get access to the callback function within
const mymod= require('./mymodule.js');

// we get our dirrectory, chosen by learnyounode
const direct = process.argv[2];
//we get our extension, again chosen by learnyounode
const exten = process.argv[3];

// we pass our values into module and use the callback to print all "extension" files
mymod(direct,exten, function(err, list){

    // if there is an error, we print it, otherwise we continue on to print our list of extension files
if(err) return console.error(err);
else{

list.forEach(function(obj){
    console.log(obj);
});

}});