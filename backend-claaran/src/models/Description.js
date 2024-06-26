const { Schema, model } = require( 'mongoose' );

const DescripcionSchema = new Schema ({
  
    tipodeDescripcion :{
        type: String,
        required: true
    },
    detalleDescripcion :{
        type: String,
        required: true
    },
    iDProducto :{
        type: String,
        required: true
    }},{
    timestamps: true
});

const DescriptionModel = model('Description', DescripcionSchema);

module.exports = DescriptionModel;