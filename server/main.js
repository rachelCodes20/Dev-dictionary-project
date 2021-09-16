
const express = require('express');
const path = require('path');
const app = express();

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

//static file req example
app.use('/images', express.static(path.resolve(__dirname, '../client/assets'))); 
//post request to /search

// test --- app.use('/search', (req,res) => {

//   return res.send('hey!')
// })
// app.use('/', (req,res) => {})
//add middleware that adds user searches to cache?
app.get('/get', termController.getTerm)


 
    // termRouter.get('/create', termController.createTerm);

//do i want user to be able to create a term or leave comments?
    // // termRouter.post('/', termController.createTerm);

    // termRouter.get('/:term', termController.getTerm);
        // myterm.findOne({}, function (err,result) {
        //   if(err) return err;
      //   return res.send(result);
      // })


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

  module.exports = app;