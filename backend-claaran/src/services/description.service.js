const DescriptionModel = require('../models/Description');


const getAllDescriptions = async () => {
    return await DescriptionModel.find();
}

const getDescriptionById = async ( id ) => {
    return await DescriptionModel.findOne({ _id: id });
}

const createOneDescription = async ( newCategory ) => {
    return await DescriptionModel.create( newCategory );
}

const updateOneDescriptionById = async ( id, updatedCategory ) => {
    return await DescriptionModel.findOneAndUpdate(
        { _id: id  },       // Objeto de consulta
        updatedCategory,    // Objeto con la data actualizada
        { new: true }       // Habilita el retorno de los datos registrados
    );
}


module.exports = {
    getAllDescriptions,
    getDescriptionById, 
    createOneDescription, 
    updateOneDescriptionById
};