const ContactModel = require ('../models/Contact')

const getAllContacts = async () => {
    return await ContactModel.find();
}

const createOneContact = async ( newContact ) => {
    return await ContactModel.create(newContact);
}

module.exports = {
    getAllContacts,
    createOneContact
}