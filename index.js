// filename : index.js

//import express
let express = require('express');

// import router
let apiRoutes = require("./DataSiswa");

//initialize app
let app = express();

//setup server port
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));

// app ARIRoutes
app.use('/DataSiswa',apiRoutes);

//Launch app to Listen Specified PORT
app.listen(port, function(){
    console.log("Running Resthub on PORT " + port);
})