const express = require('express');

const termController = require('./termController');

// const router = express.Router();
// //add create
// //add delte
// router.get('/', termController.getTerm, (req, res) => {
// //res.locals needs to be used to save prev search terms?
// //when user navigates to site, req is sent and term with def and pic are sent
// const responseObject = {
//   termName: req.locals.searchTerm
// }
//     return res.status(200).send(JSON.stringify(responseObject));
//   });
// //testing
//   router.get('/', termController.createTerm, (req, res) => {

//     return res.status(200).json({termName: termName, termDefinition: termDefinition});
//   });

//   // router.get('/', termController.delete, (req, res) => {

//   //   return res.status(200).json({termName: termName, termDefinition: termDefinition});
//   // });

  

// module.exports = router;