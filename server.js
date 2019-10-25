const express = require("express");
const app = express();

const port = 2255;

app.use(express.static('build/bundle.js'))

app.listen(port, ()=>{
    console.log("App is running at port :" +port )
})