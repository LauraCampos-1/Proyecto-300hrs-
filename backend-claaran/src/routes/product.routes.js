const { Router } = require( 'express' );    // Importamos el router de Express
const { createProduct, getAllProducts, getProductById, updateProductComplete, getProductByArancelId, getProductByReference } = require('../controllers/product.controller');
const router = Router();                    // Invocamos el router de Express para definir nuestras rutas

/** Definir las rutas para la entidad 'product' */

router.post( '/', createProduct );           // Crea Producto
router.get( '/', getAllProducts );   // Obtenemos todos Productos
router.get( '/:id', getProductById); // Obtenemos producto por Id
router.patch( '/:id', updateProductComplete);
router.get( '/paid/:id', getProductByArancelId );
router.get( '/reference/:PosArancelId', getProductByReference );



module.exports = router;   // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion