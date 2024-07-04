const { validateToken } = require("../helpers/jwt.helper");



const authUser = (req, res, next) => {

    const token = req.header('X-Token');

    if (! token) {
        return res.json({
            ok: false, 
            msg: 'Error al obtener el token.'
        });
    }
try {
    const payload = validateToken(token);
    req.authUser = payload;
    next();
}
catch(error){
    res.json({
        ok: false,
        msg: 'Token inválido.'
    });
}
}

module.exports ={
    authUser
}