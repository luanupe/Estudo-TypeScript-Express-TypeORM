import express from 'express';
import { Repository } from 'typeorm';

import { getRepositoryCategoria } from '../../database/conn';
import { Categoria } from '../../database/entity/Categoria'

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio:Repository<Categoria> = await getRepositoryCategoria();
    let categorias:Categoria[] = await repositorio.find();
    res.send(categorias);
});

router.post('/', async (req, res) => {
    try {
        let repositorio:Repository<Categoria> = await getRepositoryCategoria();
        let categoria:Categoria = await repositorio.save(req.body);
        return res.status(201).send(categoria);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio:Repository<Categoria> = await getRepositoryCategoria();
        let id = parseInt(req.params.id); 

        let categoria:Categoria = await repositorio.findOneOrFail(id);
        let produtos = Promise.resolve([ categoria.produtos ]);

        console.log(produtos);
        res.send(categoria);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;