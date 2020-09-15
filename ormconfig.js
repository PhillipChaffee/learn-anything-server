{
   "type": "postgres",
   "host": "learn-anything-prod.csune6yvwmny.us-west-2.rds.amazonaws.com",
   "port": 5432,
   "username": "postgres",
   "password": "nV48ritBgah750ffDdMCcC9DOIwPvK",
   "database": "learn-anything",
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