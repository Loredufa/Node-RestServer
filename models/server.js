const express = require('express')

class Server {

constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'

    //Middlerware
    this.middleware();

    //Rutas de mi aplicacion
    this.routes();
}

middleware () {

    //Cors
    this.app.use

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'))
}

routes () {
    this.app.use(this.usuariosPath, require ('../routes/user'))
}

listen () {
    this.app.listen( this.port, () => {
        console.log('Servidor corriendo', this.port)
    })
}

}





module.exports = Server;


