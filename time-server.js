
// we require the net module to create our time server
net= require("net");
// we require the moment module that we npm installed to make date time more efficent 
const moment = require("moment");
const server = net.createServer(function(socket){
    // We use the moment module to get the current time and day in a much more efficent format the using Date()
    const time = moment().format("YYYY-MM-DD HH:mm");
    // we use socket the write to send our data through
    socket.write(time);
    // last we end with socket.end to end the server
    socket.end('\n');
});

// we use server listen to get our data from the server  via the port provided as an element
server.listen(process.argv[2]);


//official solution
// const net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       const d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     const server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))

