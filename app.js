const express = require('express');
const morgan = require('morgan');
const layout  = require('./views/layout');


const app = express();
const staticMiddleware = express.static(__dirname + '/public');


app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(express.urlencoded({extended: false}));

app.get ('/', async (req, res, next) => {
  try {
    res.send(layout(''));
    console.log('hello world');
  } catch (next) {
      next(err);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
