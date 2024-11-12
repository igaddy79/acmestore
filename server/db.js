//server/db.js

const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_talent_agency_db');

const createTables = async()=> {
    const SQL = `
        DROP TABLE IF EXISTS user_skills;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS skills;
        CREATE TABLE users(
            id UUID PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            pass            
            )`
}

module.exports = {
    client
};