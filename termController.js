
const term = require('./term-model');
//all my controllers for get requests go here. 
const termController = {};

    /*
termController.createTerm
createTerm: async (req,res) => {
    desctructure first arg
    term.create({{termName: req.param.name}, 'searchval', update data)  
}
*/
//query db
//add create
//add delte

termController.createTerm = async (res,next) => {

        let newTerm;
        newTerm = await term.create({
            termName: 'object',
            termDefinition: 'key value pairs'
            }, 
            (err,term) => {
            if(err) return res.status(400).json(err.message);
            //nothing being send here only updating db
            newTerm.save();
            // return res.json(newTerm);
    })
    
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