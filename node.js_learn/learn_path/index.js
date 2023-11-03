const fs = require('fs') // file system
const path = require('path')
fs.readFile('./file/starter.txt', (err, data) =>{
    if (err) throw err;
    console.log(data); // after we read the data, it's presented as buffer data

    //if we want to read the data
    console.log(data.toString());
})

//also we can define the encoding to allow us read the buffer data
fs.readFile(path.join(__dirname, 'file','starter.txt'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data); 
});

fs.writeFile(path.join(__dirname, 'file','reply.txt'), 'Nice to meet you!', (err) =>{
    if (err) throw err;
    console.log('Write complete!');

    // write append inside the callback of the writeFile function, then only when we created the funtion,
    // can we append to the existing file
    fs.appendFile(path.join(__dirname, 'file','reply.txt'), '\nNice to meet you!', (err) =>{
        if (err) throw err;
        console.log('Append complete!');
    });
});


//if we get an uncaught error, we have to proces that
// no need to import process
process.on('uncaughtException', err =>{
    console.error(`This is an uncaught error: ${err}`);
    process.exit(1); //exit the application

});
