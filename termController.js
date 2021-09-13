
const term = require('./term-model');
//all my controllers for get requests go here. 
const termController = {};

//query db
//add create
//add delte

termController.createTerm = async (res,next) => {

        let newTerm;
        try {
            newTerm = await DevTerm.create({
            termName: 'object',
            termDefinition: 'key value pairs'
            })
            //nothing being send here only updating db
            newTerm.save();
            // return res.json(newTerm);
            const devTerm = await DevTerm.findOne()
            console.log('newterm ',newTerm.termName)
        }catch(e) {
            return res.status(400).json('error on update ', e)
        }
    };
//use try catch blocks with asyn await!
termController.getTerm = async (req,res,next) => {
    let retrievedTerm;
    const {termName} = req.body;
    retrievedTerm = await termController.find({termName}, err, termFound => {
        if (err) return res.send(err.message);
        return res.json(termFound);
    });
}

//termController.updateTerm
    //term.update()
        //findOneAndUpdat({}, cb(err, ()=>{}))

//termController.deleteTerm
    //term.deleteOne()

    module.exports = termController;