// import mysql, {ConnectionOptions} from 'mysql2/promise';
// import {User} from "../models/user";
//
// let config: ConnectionOptions = require("./config");
//
// export async function query(sql, params) : Promise<User> {
//     const connection = await mysql.createConnection(config);
//     const [results] = await connection.execute(sql, sql);
//
//     return results
// }