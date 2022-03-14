const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const mongoose = require('mongoose');
const termController = require('./termController');
const dotenv = require('dotenv').config();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }, 
  function(error) {
    if(error){
      console.log('error connecting ', error)
    }else{
      console.log('Connected to Database!')
    }
  }
  );


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//app.use('/images', express.static(path.resolve(__dirname, '../client/assets'))); 

app.get(':userEntry', termController.getTerm)

app.post('/get', termController.getTerm)
 
  // termRouter.get('/create', termController.createTerm);

    function errorHandler (err, req, res, next) {
      const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' }, 
      };
      const errorObj = Object.assign(defaultError, err);
      console.log(errorObj.log);
      res.status(errorObj.status).send(JSON.stringify(errorObj.message));
    }
  //add global error handler
  app.use('/', errorHandler)

  app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});

  // module.exports = app;