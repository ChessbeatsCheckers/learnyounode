// we use the http module from nodejs
var http = require('http');

//console.log(process.argv[3]);

process.argv.forEach(function(obj,index)
{ str= "";

    if(index>1)
    {
        http.get(obj, function(responce)
        {
           
            count=1;
            // we then set the encodeing to utf8 for better readability on the data
            responce.setEncoding("utf8");
           // console.log(responce);
            // we use .on to aquire the "data" portion of our url and use the callfunction it provides giving us an array of data elements 
            responce.on("data", function(data)
            {
                data.toString();
                str= str+data;
                //console.log(str);
                count=2;
            });
            console.log(str);
            str="";
        })

    }

});


