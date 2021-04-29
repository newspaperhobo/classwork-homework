const express = require('express');

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
    response.send("What's up!");
}) 

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})
