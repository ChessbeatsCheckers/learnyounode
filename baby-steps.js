// we declare a global totalsum in variable to hold our total number
totalsum=0;

 // This will be our base starting function
function main()
{
    // We loop through our array of numbers from process.argv and add the sum in our getsum fucntion
    process.argv.forEach(getsum)
    console.log(totalsum);
}


// this function will get the total sum of our process
function getsum(obj, index, arre)
{
    
   //we add after imdex is >1 since we know first 2 elements are paths
    if(index>1)
    totalsum= totalsum+ Number(obj); 
}

main();

// In summary, the flow of this code begins with the global variable totalsum and main function beign triggered. Then we collect and add the sum using a foreach statement and getsum function and lastly print it with console.log 
