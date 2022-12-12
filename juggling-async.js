// we use the http module from nodejs
// we get our http module for making requests to the server
var http = require('http');
// we get our buffer list module to help with reading data
var bl = require("bl");

//console.log(process.argv[3]);
// we use the http module to make a request to our url
http.get( process.argv[2], (response)=>{
    //We then pipe it, conver it and read our data
    response.pipe(bl((error,data)=>{

        data= data.toString();
        console.log(data);
        // we then do a callback within our callback doing the same thing as before to print our data in order
        http.get(process.argv[3], response=>{
            response.pipe(bl((error,data)=>{

                data= data.toString();
                console.log(data);
                http.get(process.argv[4], response=>{ 
                    response.pipe(bl((error,data)=>{
                        data= data.toString();
                        console.log(data);


                    })); 
                
                });


            }));   

        });

    }));


});


