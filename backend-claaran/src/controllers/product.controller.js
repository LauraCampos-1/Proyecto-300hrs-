const ProductModel = require("../models/Product");
const { insertarProducto, obtenerProductos, obtenerUnProductoPorId, actualizarUnProductoCompleto, obtenerUnProductoPorPosArancelId, obtenerUnProductoPorReferencia, actualizarUnProductoPorReferencia, buscarProductoPorRef, actualizarUnProductoPorID } = require("../services/product.service");


async function createProduct (req, res){
    const product = req.body;

    try {

        const newProduct = await insertarProducto(product)
        res.json({
            ok:true,
            data:newProduct
        }) 
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'No se pudo insetar produto'
        })
    }
}
async function getAllProducts (req, res){
    try {
        const data = await obtenerProductos();
        res.json({
            ok:true,
            data
        }) 
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al obtener todos los productos'
        })
    }
}
async function getProductById (req, res){
    const id = req.params.id;
    try {
        const data = await obtenerUnProductoPorId(id);
        res.json({
            ok:true,
            data
        }) 
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al obtener un producto por su ID'
        })
    }
}

async function getProductByArancelId(req, res){
    const id = req.params.id;

    

    try {
        const data = await obtenerUnProductoPorPosArancelId( id );
        
        console.log( '>>>>> CONSULTO <<<<<', data );

        if( data == null ) {
            return res.json({
                ok: false,
                msg:'El producto por referencia no existe'
            });
        }

        res.json({
            ok: true,
            data
        }) 
    } catch (error) {
        console.error(error)

        res.json({
            ok:false,
            msg:'Error al obtener un producto por su ArancelID'
        })
    }
}
async function getProductByReference (req, res){
    const arancel = req.params.PosArancelId;

    const product = product.find(product => product.PosArancelId === arancel)
    
    if(arancel) {
        res.json({
            ok: true,
            data: product
        })
    } else {
        res.status(404).json({
            ok: false,
            msg: 'error'
        })
    }
}


async function updateProductComplete (req, res){
    const id = req.params.id;
    const data = req.body;
    try {
        const productUpdate = await actualizarUnProductoCompleto(id,data);
        res.json({
            ok:true,
            data:productUpdate
        }) 
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'El producto no pudo actualizar todos sus valores'
        })
    }
}


async function actualizarProductoPorReferencia(req,res) {
    const referencia = req.params.id;
    const productoActualizado = req.body;


    try {
        const foundProductByRef = await buscarProductoPorRef( referencia );

        const updatedProductById = await actualizarUnProductoPorID( foundProductByRef._id, productoActualizado );

        res.json({
            ok: true,
            data: updatedProductById
        }) 
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'El producto no pudo actualizar por referencia'
        })
    }

}

module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProductComplete,
    getProductByArancelId,
    getProductByReference,
    actualizarProductoPorReferencia
}