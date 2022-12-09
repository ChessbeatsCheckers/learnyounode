

//first we require and get our fs module that will allow us to read the file
const fs = require('fs');
// second we read the file and store it as a buffer in our buffer variable called buffer
buf = fs.readFileSync(process.argv[2]);
// third we convert our buffer into a string that contains the whole file
strcontents = buf.toString();

// fourth we split our large string into an array split with linebreaks (\n) per element
const str = strcontents.split(/\n/);



// lastly we return the amount of linebreaks by returning the array length subtracted by 1 to account for the first element
console.log(str.length-1);