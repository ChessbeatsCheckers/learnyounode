// we use the http module from nodejs
var http = require('http');
// we use the b1 module from nodejs
const bl = require('bl');


//We do http.get and send our url and get a callback function with a response variable that has all needed information to print for us
http.get(process.argv[2], function (response) {
    // we pipe the response variable and use buffer list to get our data more efficently then before in small sizes
    response.pipe( bl(  function (err, data)  {
        // we do error handleing and print any errors we may encounter with buffer list
        if (err) return console.error(err);

        //we make our data into a string
        data = data.toString();
        // we print the length of our data
        console.log(data.length);
        // we print our data itself
        console.log(data);
    }));
});