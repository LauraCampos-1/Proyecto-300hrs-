const { Schema, model } = require( 'mongoose' );

const ProductSchema = new Schema ({

    PosArancelId :{
        type: String,
        required: true,
        /* unique: true */
    },
    PosArancelArancel: {
        type: Number, 
        required: true
    },
    posArancelIva: {
        type: Number, 
        required: true
    },  
    producto: {
        type: String, 
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    referencia:{
        type: String,
        required: true
    },
    serial:{
        type: String,
        required: true
    },
    uso:{
        type: String,
        required: true
    }
    }, {
        timestamps: true
    }
);

const ProductModel = model('Product', ProductSchema);

module.exports = ProductModel;
