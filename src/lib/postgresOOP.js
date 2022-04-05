const { Pool } = require('pg');
const {connection} = require('../config');

const outsidePool = new Pool({
  connectionString: connection
});

class PG {
  constructor(pool) {
    this.pool = pool || outsidePool
  }

  async fetch(SQL, ...params) {
    const client = await this.pool.connect();
    try{
      const { rows: [row] } = await client.query(SQL, params || null);
      return row
    }finally {
      client.release();
    }
  }

  async fetchAll(SQL, ...params) {
    const client = await this.pool.connect();
    try{
      const { rows } = await client.query(SQL, params || null);
      return rows;
    } finally{
      client.release();
    }
  }
}

module.exports = PG;