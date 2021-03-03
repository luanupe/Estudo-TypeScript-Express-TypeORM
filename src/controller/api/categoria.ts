import path from 'path';
import express from 'express';

import { getRepository } from 'typeorm';

import { Categoria } from '../../database/entity/Categoria'

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio = getRepository(Categoria);
    let categorias = await repositorio.find();
    res.send(categorias);
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio = getRepository(Categoria);
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