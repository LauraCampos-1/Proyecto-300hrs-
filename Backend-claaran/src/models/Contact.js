const {Schema, model} = require ('mongoose');

const ContactSchema = new Schema({
    name:{
        type:String,
        require:true 
    },
    phone:{
        type:String,
        require:true 
    },
    email:{
        type:String,
        require:true 
    }

})

const ContactModel = model ('Contact', ContactSchema);

module.exports = ContactModel;