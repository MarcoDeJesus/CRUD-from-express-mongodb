var express = require("express");
    app = express();
    bodyParser = require("body-parser");
    methodOverride = require("method-override");
    mongoose = require("mongoose");

app.use(bodyParser.urlenconded({
    extended: false
}));

app.use(bodyParse.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Hellow!");
});

app.use(router);

app.listen(3000, () => {
    console.log("Server is running...");
});

