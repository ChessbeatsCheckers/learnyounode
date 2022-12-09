

//first we require and get our fs module that will allow us to read the file
const fs = require('fs');
// This time we read the file useing readFile which takes in 3 arguments, the first being the file path, second being the encoding which is utf-8 usually, and lastly a callback function
//our callback function occurs after reading the file
fs.readFile(process.argv[2], 'utf-8', function(err , data)
{
    // Our callback function contains 2 arguments, first being an error argument incase an error were to happen and the third being a data argument which stores our data 
    // we read our data variable and split based on line breaks
    const str = data.split(/\n/);
    // lastly we return the amount of linebreaks by returning the array length subtracted by 1 to account for the first element
    console.log(str.length-1);

});
