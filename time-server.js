//reference https://www.youtube.com/watch?v=wBu1tcixwok
// we require the net module to create our time server
net= require("net");
// we require the moment module that we npm installed to make date time more efficent 
const moment = require("moment");
const server = net.createServer(function(socket){
    // We use the moment module to get the current time and day in a much more efficent format the using Date()
    time = moment().format("YYYY-MM-DD hh:mm");
    // we use socket the write to send our data through
    socket.write(time);
    // last we end with socket.end to end the server
    socket.end();
});

// we use server listen to get our data from the server  via the port provided as an element
server.listen(process.argv[2]);
