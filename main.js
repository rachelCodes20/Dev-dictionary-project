const express = require('express');
const app = express();
const mongoose = require('mongoose');
const termController = require('./termController');
const PORT = 8080;

// ***FIGURE HOW TO SAVE THIS FILE WITHOUT SHOWING PASS (GITIGNORE? ENV?)***

// const PORT = 8080;----- do I need this since rendering with local host
//mongoose.connect('mongodb://username:password@host:port/database?options...');

mongoose.connect('mongodb+srv://Rae:<PASSWORD>@devdictionarycluster1.oajrw.mongodb.net/devDictionary?retryWrites=true&w=majority');
  // 'mongodb://localhost:8080/DevDictionary'));
  //mongodump --uri mongodb+srv://Rae:<password>@devdictionarycluster1.oajrw.mongodb.net/<DATABASE> 
// mongoose.connection.once('open', () => {
//     console.log('Connected to Database');
//   });
const myterm = mongoose.model('term', new Term({termName: String}));
myterm.findOne(async function (err,result) {
  if(err) return err;
  return res.send(result);
})
  
  app.get('/', (req,res,next) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    const termRouter = express.Router();
    app.use('/term', termRouter);
    termRouter.post('/', termController.createTerm);
    termRouter.get('/:term', termController.getTerm);
  })

  //add global erro handler
  app.listen(PORT, `listening on port ${PORT}`);