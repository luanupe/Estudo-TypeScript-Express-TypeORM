import { getConnection, createConnection, getRepository, EntityTarget, Repository } from "typeorm";

import { Categoria } from "./entity/Categoria";
import { Produto } from "./entity/Produto";

export async function getConn() {
    let connection = null;
    try {
        connection = getConnection();
        if ((!connection.isConnected)) await connection.connect();
    }
    catch (err) {
        connection = await createConnection();
    }
    return connection;
}

export async function getRepositoryCategoria(): Promise<Repository<Categoria>> {
    await getConn();
    return getRepository(Categoria);
}

export async function getRepositoryProduto(): Promise<Repository<Produto>> {
    await getConn();
    return getRepository(Produto);
}
