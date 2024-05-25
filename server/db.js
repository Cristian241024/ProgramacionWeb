import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'isma123',
    database: 'baseweb',
    port: '3306'
});

