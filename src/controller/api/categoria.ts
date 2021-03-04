import express from 'express';

import { getRepo } from '../../database/conn';
import { Categoria } from '../../database/entity/Categoria'

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio = await getRepo(Categoria);
    let categorias = await repositorio.find();
    res.send(categorias);
});

router.post('/', async (req, res) => {
    try {
        let repositorio = await getRepo(Categoria);
        let categoria = await repositorio.save(req.body);
        return res.status(201).send(categoria);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio = await getRepo(Categoria);
        let id = parseInt(req.params.id); 

        let categoria = await repositorio.findOne(id);
        if ((categoria == null)) throw new Error(`Usuário ${id} não encontrado`);
        res.send(categoria);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;