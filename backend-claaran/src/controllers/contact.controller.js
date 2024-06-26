const { getAllContacts, createOneContact } = require("../services/contact.service");

const getContacts = async (req, res) => {
    try {
        const data = await getAllContacts();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(Error);
        res.json({
            ok:false,
            msg: 'Error al obtner los contactos'
        })
    }
}

const createContact = async (req,res) => {
    const newContact = req.body;
    try {
        const data = await createOneContact(newContact)
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:'Error al crear contacto'
        })
    }
}

module.exports = {
    getContacts,
    createContact
}