const { insertarProducto, obtenerProductos, obtenerUnProductoPorId, actualizarUnProductoCompleto, obtenerUnProductoPorPosArancelId, obtenerUnProductoPorReferencia } = require("../services/product.service");


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
        res.json({
            ok:true,
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
        res.json(arancel)
    } else {
        res.status(404).json({msg: 'error'})
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

module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProductComplete,
    getProductByArancelId,
    getProductByReference
}