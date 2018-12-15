const express = require('express');
const router = express.Router();

const Curso = require('../models/Curso');

//Acciones en la base de datos
router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    const cursos = await Curso.find(); //Con await se declara dicha consulta
    console.log(cursos);
    res.json(cursos); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos

router.get('/:id', async(req, res) => {
    const curso = await Curso.findById(req.params.id);
    res.json(curso);
}); //.get Obtiene los datos por id de la base de datos


router.post('/', async(req, res) => {
    const curso = new Curso(req.body); //Datos que el cliente envia
    await curso.save(); //Almacena en la base de datos
    res.json({
        status: 'Curso guardada'
    });
}); //.post Crea un nuevo dato

router.put('/:id', async(req, res) => {
    await Curso.findByIdAndUpdate(req.params.id, req.body); //Id, datos actuales
    res.json({ status: 'Curso actualizada' })

}); //.put actualiza los datos

router.delete('/:id', async(req, res) => {
    await Curso.findByIdAndDelete(req.params.id);
    res.json({ status: 'Curso Eliminado' });
}); //.delete Borra de la base de datos


module.exports = router;