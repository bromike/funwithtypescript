import {User, UserRow} from "../models/user";
import mysql, {ConnectionOptions} from "mysql2/promise";

let config: ConnectionOptions = require("../../config");

export async function createUser(user: User) : Promise<User> {
    const connection = await mysql.createConnection(config);
    let [data] = await connection
        .execute('INSERT INTO users (name, email) VALUES (?, ?);', [user.name, user.email]);

    return {
        id: (data as mysql.ResultSetHeader).insertId,
        name: user.name,
        email: user.email,
    };
}

export async function getUserById(id: number) : Promise<User> {
    const connection = await mysql.createConnection(config);
    let [data] = await connection.query<UserRow[]>('SELECT * FROM users WHERE id = ?', [id]);
    if (data.length > 0) {
        return data[0];
    }
    return undefined as any;
}

export async function getAllUsers() : Promise<User[]> {
    const connection = await mysql.createConnection(config);
    let [data] = await connection.query<UserRow[]>('SELECT * FROM users');
    return data;
}