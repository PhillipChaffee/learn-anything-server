module.exports = {
    "type": process.env.LA_CONNECTION,
    "host": process.env.LA_HOST,
    "port": process.env.LA_PORT,
    "username": process.env.LA_USERNAME,
    "password": process.env.LA_PASSWORD,
    "database": process.env.LA_DATABASE,
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}