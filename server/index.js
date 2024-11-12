//server/index.js
const { client } = require('./db');

const init = async()=> {
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
    //get client by requiring from db.js and connect
  };

  init();