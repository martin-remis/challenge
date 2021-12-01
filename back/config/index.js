/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv');
}

const config = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'pass',
    database: process.env.DB_NAME || 'db_challenge',
    port: process.env.DB_PORT || '5432',
  },
  loreFaker: {
    apiUrl: process.env.LOREM_FAKER_API_URL || 'https://lorem-faker.vercel.app/api',
    defaultQuantity: process.env.LOREM_FAKER_DEFAULT_QUANTITY || 3,
  },
};

exports.config = config;
