import express from 'express';

import { getRepo } from '../../database/conn';
import { Produto } from '../../database/entity/Produto';

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio = await getRepo(Produto);
    let produtos = await repositorio.find();
    res.send(produtos);
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio = await getRepo(Produto);
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