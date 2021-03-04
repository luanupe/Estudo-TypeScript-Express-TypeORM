import { getConnection, createConnection, getRepository, EntityTarget } from "typeorm";

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

export async function getRepo(entityClass: EntityTarget<unknown>) {
    await getConn();
    return getRepository(entityClass);
}
