# logger

### PostgreSQL commands
```sql
CREATE USER logging_user WITH PASSWORD 'abcd';
CREATE DATABASE logging_database WITH OWNER logging_user;
```

### .env contents
```
DB_URL=postgres://logging_user:abcd@localhost:5432/logging_database
```