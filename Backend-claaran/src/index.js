/* console.log ('Hola') */

const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express
const cors = require( 'cors' );

const { dbConnection } = require( './config/mongo.config' );  // Importamos la configuracion de Mongoose para MongoDB
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() ); 

/* / Definimos las rutas disponibles */ 
app.use( '/api/products', require( './routes/product.routes' ) );       // -> http://localhost:4000/api/products
app.use( '/api/descriptions', require( './routes/description.routes'))

// Invoca la configuracion de la base de datos para establecer la conexion
dbConnection();

/* / Lanzamos el servidor web */
app.listen( PORT, function() {
    console.log( `servidor corriendo en http://localhost:${PORT}`);
});
