import {RowDataPacket} from "mysql2";

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserRow extends RowDataPacket, User {}

export function isUserWithoutId(obj: any): obj is User {
    return 'name' in obj && 'email' in obj;
}