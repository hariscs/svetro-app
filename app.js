const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.listen(5000, function () {
    console.log("Server start port 5000");
});
