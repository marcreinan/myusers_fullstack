module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/api/v1/database/db.sqlite3'
    },
    migrations: {
      directory: './src/api/v1/database/migrations'
    },
    useNullAsDefault: true
  },
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/api/v1/database/db.sqlite3'
    },
    migrations: {
      directory: './src/api/v1/database/migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/api/v1/database/db.sqlite3'
    },
    migrations: {
      directory: './src/api/v1/database/migrations'
    },
    useNullAsDefault: true
  }

};
