const express = require('express');
const morgan = require('morgan');
const layout  = require('./views/layout');
const models = require('./models');

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

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;
const init = async () => {
  await models.db.sync();

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  })
}

init ();
