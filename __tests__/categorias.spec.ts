const supertest = require('supertest');

import { getConn } from '../src/database/conn';
import { server } from "../server";

describe('API Teste do controller de categorias', () => {

    it ('Listar todas as categorias deve retornar status code 200 OK', async () => {
        const router = await supertest(server);
        const response = await router.get('/api/categoria');
        expect(response.statusCode).toEqual(200);
    });

    it ('Cadastro de categoria deve retornar um JSON com status code 201 CREATED', async() => {
        const router = await supertest(server);
        const response = await router.post('/api/categoria').send({ 'nome':'Limpeza', 'status':true });

        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
    });

});

afterAll(async () => {
    let conn = await getConn();
    conn.close();
})