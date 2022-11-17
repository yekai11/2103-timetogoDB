const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'user1',
    password: '0088',
    database: 'houseDB',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
