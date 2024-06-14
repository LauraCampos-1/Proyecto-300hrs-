const { insertarProducto, obtenerProductos, obtenerUnProductoPorId, actualizarUnProductoCompleto } = require("../services/product.service");


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
    updateProductComplete
}