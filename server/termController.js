
const Term = require('./term-model');
//all my controllers for get requests go here. 
const termController = {};


// termController.createTerm = async (res,next) => {

//     let newTerm;
//     try {
//         newTerm = await Term.create({
//         termName: 'object',
//         termDefinition: 'key value pairs'
//         },
//         (err, doc) => {
//             if (!err) {
//                console.log('our doc ', doc) 
//                res.send(newTerm);
//             }else {
//                 return next('error creating doc ',err)
//         }
//         })
//         //nothing being send here only updating db
//     }catch(e) {
//         return res.send('error on update ', e)
//     }
//     // try {
//     //     const devTerm = await Term.find();
//     //     console.log('newterm ',devTerm)
//     //     res.send(devTerm)
//     // }
// };


termController.getTerm = async (req,res,next) => {
    let retrievedTerm;
    //entry from params
    console.log('req.params ', req.params.userEntry)
    let userEntry = req.params.userEntry;
  
        try {
            retrievedTerm = await Term.findOne({termName: userEntry})
            //send back termDefinition
            console.log('retrieved ter ', retrievedTerm)
            return res.status(200).json(retrievedTerm)
        }
            catch(err){
            return res.status(404).send(err)
        }
    }


    module.exports = termController;