const express = require('express');

const app = express();

//API
app.get("/user", () => {
    console.log("hello world")
})

//server
app.listen(8000, (err) => {
    if (err) console.log(err)
    console.log("server started on port 8000")
})
