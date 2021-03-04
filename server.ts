import path from 'path';
import dotenv from 'dotenv';
import express from 'express';

// Iniciar env
dotenv.config()

// Configurar Express
export const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

// Routers
server.use('/api/produto', require(path.join(__dirname, 'src', 'controller', 'api', 'produto.ts')));
server.use('/api/categoria', require(path.join(__dirname, 'src', 'controller', 'api', 'categoria.ts')));
