const {getAllDescriptions,createOneDescription, updateOneDescriptionById } = require('../services/description.service')

const getDescriptions = async (req, res) => {
    try {
        const data = await getAllDescriptions();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:'Error no puede obtener todas las descripciones'
        })
    }
}
const getDescriptionById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await getOneDescriptionById( id );

        res.json({
            ok:true,
            data
        })
        
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:'Error al obtener una categoria por ID'
        })
    }
}
const createDescription = async (req, res) => {
    const newDescription = req.body;
    try {
        const data = await createOneDescription(newDescription);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:'Error al crear una categoria'
        })
    }
}
const updateDescriptionById = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body; 
    try {
        const data = await updateOneDescriptionById(id,updatedData);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:'No pudo actualizar la categoria por ID'
        })
    }
}

module.exports = {
    getDescriptions,
    getDescriptionById,
    createDescription,
    updateDescriptionById
};

















