
const Term = require('./term-model');
//all my controllers for get requests go here. 
const termController = {};

//query db
//add create
//add delte

// termController.createTerm = async (res,next) => {

//         let newTerm;
//         try {
//             newTerm = await Term.create([{
//             termName: 'object',
//             termDefinition: 'key value pairs'
//             }])
//             //nothing being send here only updating db
//             res.send(newTerm);
//         }catch(e) {
//             return res.send('error on update ', e)
//         }
//         // try {
//         //     const devTerm = await Term.find();
//         //     console.log('newterm ',devTerm)
//         //     res.send(devTerm)
//         // }
//     };

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

//use try catch blocks with asyn await!
termController.getTerm = async (req,res,next) => {
    let retrievedTerm;
    console.log('something!')
        // const {termName} = {'athing': 'avalue'}//req.body;
        try {
            retrievedTerm = await Term.find({termName: 'object'})
            console.log('retrieved term', retrievedTerm);
            //turn into json !
            return res.status(200).json(retrievedTerm)
            
            // res.send(retrievedTerm);
        }
            catch(err){
            return res.status(404).send(err)
        }
    }


// termController.getTerm =  (req,res) => {
//        return res.send('gt term err')
     
// }

//termController.updateTerm = (req, res) => {
     //term.update()
        //findOneAndUpdat({}, cb(err, ()=>{}))
// }
   

//termController.deleteTerm = (req, res) => {
    //term.deleteOne()
// }
    

    module.exports = termController;