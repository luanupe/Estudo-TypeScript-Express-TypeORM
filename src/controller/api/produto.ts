import express from 'express';
import { Repository } from 'typeorm';

import { getRepositoryProduto } from '../../database/conn';
import { Produto } from '../../database/entity/Produto';

let router = express.Router();

router.get('/', async (req, res) => {
    let repositorio:Repository<Produto> = await getRepositoryProduto();
    let produtos:Produto[] = await repositorio.find();
    res.send(produtos);
});

router.get('/:id', async (req, res) => {
    try {
        let repositorio:Repository<Produto> = await getRepositoryProduto();
        let id = parseInt(req.params.id); 

        let produto:Produto = await repositorio.findOneOrFail(id);
        res.send(produto);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;