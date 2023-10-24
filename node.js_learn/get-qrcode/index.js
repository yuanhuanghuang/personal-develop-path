const qr = require("qrcode"); // inmport
let data = {                
    "name" : "Yuan Huang",
    "gender": "female"

};  // data in JSON file, this is the info of a person
let strJSON = JSON.stringify(data); //convert the JSON to string
/*
qr.toString(strJSON, {type: "terminal"}, function(err,code){ // show the qrcode in the terminal
    if(err) return console.log("error"); //if the error occur, then we are going to show in the console
    console.log(code);

});
*/


//encode the barcode to base64 string
// qr.toDataURL(strJSON, function(err,code){ // show the qrcode in the terminal
//     if(err) return console.log("error"); //if the error occur, then we are going to show in the console
//     console.log(code);

// });

//save the image to file
qr.toFile('qr.png',strJSON, function(err){ // there's no parameter code here
    if(err) return console.log(err); //if the error occur, then we are going to show in the console
});