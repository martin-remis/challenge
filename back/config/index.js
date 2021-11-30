const config = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'pass',
    database: process.env.DB_NAME || 'db_challenge',
    port: process.env.DB_PORT || '5432',
  },
};

exports.config = config;
