const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const termController = require('./termController');
const PORT = 3000;


// const mongo_URI = 'mongodb+srv://Rae:!!$$Savannah!!$@devdictionarycluster1.oajrw.mongodb.net/devDictionary?retryWrites=true&w=majority';
// // ***FIGURE HOW TO SAVE THIS FILE WITHOUT SHOWING PASS (GITIGNORE? .ENV?)***
// //mongoose.connect('mongodb://username:password@host:port/database?options...');
//   //mongodump --uri mongodb+srv://Rae:<password>@devdictionarycluster1.oajrw.mongodb.net/<DATABASE> 

// mongoose.connect(mongo_URI , {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//   });

// mongoose.connection.once('connected', () => {
//     console.log('Connected to Database!');
//   });

app.use("/", (req, res) => res.send("hello"));
const apiRouter = require(path.join(__dirname, '/routers.js'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const termRouter = express.Router()
app.use('/term', termRouter);

// const data = {
//   termName: 'object',
//   termDefinition: 'key vallue pairs',
// }
// const newTerm = new DevTerm(data);
// newTerm.save((error) => {
//   if(error) {
//     consolelog('error occured', error)
//   }else {
//     console.log('data has been saved!')
//   }
// })
  // const myterm = model('term', new Term({termName: String}));
  
  // myterm.findOne(async function (err,result) {
  //   if(err) return err;
  //   return res.send(result);
  // })
 
    // console.log('mongoose', mongoose)
    

    // termRouter.post('/', termController.createTerm);

    termRouter.get('/:term', termController.getTerm);
  

  //add global erro handler

  app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});