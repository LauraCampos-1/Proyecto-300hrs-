const { compareSync } = require('bcrypt');

const UserModel = require('../models/User');
const { findUserByUsername, registerUser, getOneUserById } = require('../services/auth.service');
const { generateToken } = require('../helpers/jwt.helper');


const register = async(req, res) => {

    const {username} = req.body;
    const userFound = await findUserByUsername(username);

    if (userFound){
        return res.status(200).json({
            ok: false,
            msg: 'El usuario ya está registrado.'
        });
    }

    registerUser(req.body);
    res.status(200).json({
        ok: true,
        msg: 'Registro existoso.'
    });
}

const login = async(req, res) => {

    const {username, password} = req.body;
    const userFound = await findUserByUsername(username);  
    
    if(! userFound){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe. Por favor, regístrese.'
        });
    }
const validPassword = compareSync (password, userFound.password);
    if (! validPassword){
        return res.status(400).json({
            ok: false,
            msg: 'Contraseña inválida. Intente nuevamente'
        });
    }

const userData = userFound.toObject();
delete userData.password;

const payload = {...userData}, 
      token = generateToken(payload);  

     res.status(200).json({
        ok: true,
        token
     });
}

const getUserById = async (req, res) => {
    const user_id = req.params.id

    try {
        const data = await getOneUserById(user_id)
        res.status(200).json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el usuario por id'
        })
    }
}
const renewToken = (req, res)=> {
    const userData = req.authUser; 
    const {id} = userData;

    delete userData.iat;
    delete userData.exp;

const userFound = UserModel.findById(id);
    if(! userFound){
        res.status(400).json({
            ok: false,
            msg: 'El usuario no existe; el token no se renovará.'
        });
    }

const newToken = generateToken ({...userData})
        res.status(200).json({
            ok:true,
            token: newToken,
            userData
        });
    }

module.exports = {
    login,
    register, 
    renewToken,
    getUserById
}