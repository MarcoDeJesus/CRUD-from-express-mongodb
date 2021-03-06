var express = require("express");
    app = express();
    bodyParser = require("body-parser");
    methodOverride = require("method-override");
    mongoose = require("mongoose");
    models = require("./models/tvshows");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Hellow!");
});

app.use(router);

mongoose.connect('mongodb://localhost:27017/tvshows', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    }
    app.listen(3000, function() {
      console.log("Node server running on http://localhost:3000");
  });
});

var TVShowCtrl = require('./controllers/tvshows');

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
   .put(TVShowCtrl.updateTVShow)
   .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);