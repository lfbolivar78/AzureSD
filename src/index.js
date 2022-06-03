const { response } = require('express');
const express = require ('express');
const app = express ();

//Configuración
app.set ('puerto',process.env.PORT || 3000);
app.set ('json spaces', 2);

const morgan = require ('morgan');
app.use (morgan('dev'));
app.use (express.urlencoded({extended:false}));
app.use (express.json());

//Rutas
app.use(require ('./Routes/index'));

//Inicializando el servidor
app.listen(app.get('puerto'), () => {
    console.log (`Servidor en puerto ${app.get('puerto')}`);
});