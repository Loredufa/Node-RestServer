
const { Router } = require('express');

const router = Router();

const { usurariosGet, 
        usuariosDelete, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch } = require ('../controllers/usuarios');

router.get('/', usurariosGet );

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router; 





