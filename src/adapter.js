const { SqlAdapter } = require('js-data-sql');

// Create an instance of SqlAdapter
module.exports = new SqlAdapter({
  knexOpts: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'bahador',
      database: 'usda',
      port: '5432'
    }
  }
});
