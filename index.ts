import path from 'path';
import dotenv from 'dotenv';
import express from 'express';

import { createConnection } from "typeorm";

// Iniciar env
dotenv.config({ path: path.join(__dirname, '.env') })

// Configurar Express
const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

// Routers
server.use('/api/produto', require(path.join(__dirname, 'src', 'controller', 'api', 'produto.ts')));
server.use('/api/categoria', require(path.join(__dirname, 'src', 'controller', 'api', 'categoria.ts')));

// Listen
createConnection().then(() => {
  server.listen(process.env.SERVER_PORT, () => {
    console.log(`⚡️[server]: Server is running at ${process.env.SERVER_PORT}`);
  });
});