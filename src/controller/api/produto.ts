import path from 'path';
import express from 'express';

import { getRepository } from 'typeorm';

import { Produto } from '../../database/entity/Produto'

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio = getRepository(Produto);
    let produtos = await repositorio.find();
    res.send(produtos);
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio = getRepository(Produto);
        let id = parseInt(req.params.id); 

        let produto = await repositorio.findOne(id);
        if ((produto == null)) throw new Error(`Usuário ${id} não encontrado`);
        res.send(produto);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;