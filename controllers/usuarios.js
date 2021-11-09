const { response } = require('express')

const usurariosGet = (req, res= response) => {
    res.json({
        msg: 'get API- controlador'
    })
}

const usuariosPost = (req, res= response) => {
    const body = req.body;
    res.json({
        msg: 'post API- controlador',
        body
    })
}

const usuariosPut = (req, res= response) => {

    const { id } = req.params;
    res.json({
        msg: 'put API- controlador',
        id
    })
}

const usuariosPatch = (req, res= response) => {
    res.json({
        msg: 'patchAPI- controlador'
    })
}

const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'delete API- controlador'
    })
}






module.exports = { usurariosGet, 
                usuariosDelete, 
                usuariosPatch, 
                usuariosPost, 
                usuariosPut }

