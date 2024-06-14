const { Router } = require( 'express' );
const { getDescriptions, getDescriptionById, createDescription, updateDescriptionById } = require('../controllers/description.controller');
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/', getDescriptions );
router.get( '/:id', getDescriptionById );
router.post( '/', createDescription );
router.patch( '/:id', updateDescriptionById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion