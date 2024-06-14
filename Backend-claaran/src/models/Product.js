const { Schema, model } = require( 'mongoose' );

const ProductSchema = new Schema ({
    PosArancelId :{
        type: String,
        required: true,
        unique: true
    },
    PosArancelArancel: {
        type: Number, 
        required: true
    },
    posArancelIva: {
        type: Number, 
        required: true
    },
   /*  posDescripcion :{
        type: String, 
        required: true
    }, */
    entidad: {
        type: String, 
        required: true
    }}, {
        timestamps: true
     });

const ProductModel = model('Product', ProductSchema);

module.exports = ProductModel;
