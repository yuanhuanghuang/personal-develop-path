const express = require("express");
const qr = require("qrcode");

const app = express();
app.use(express.json());



// Data Url
app.get("/", async (req, res) => {
    let data = {
        "name" : "Yuan Huang",
        "gender": "female"
    };
    const str = JSON.stringify(data);
    qr.toDataURL(str,(err,data)=>{
       if (err) return console.log("error"); 
       res.send(data)

    });
    
    
});

app.listen(8081, () => {
  console.log("Started Backend server at PORT: 0.0.0.0:8081", );
});
