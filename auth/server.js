const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post("/auth", function (req, res) {
    
    const streamkey = req.body.key;

    if(streamkey == "ebalmamudreyka") {
        res.status(200).send();
        return;
    }

    req.status(403).send();

});

app.listen(8000, function () {
    console.log("Listening on port 8000")
});