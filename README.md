# HomeTask8.4-PostgreSQLCrudRest
-Installed postgresql to store directly in database but not in memory(arr) & performed below commands on sql shell
postgres=# CREATE DATABASE api;
postgres=# \c api
You are now connected to database "api" as user "postgres".
api=# CREATE TABLE users (
api(#   id SERIAL PRIMARY KEY,
api(#   login VARCHAR(30) NOT NULL UNIQUE,
api(#   password VARCHAR(60) NOT NULL,
api(#   age INTEGER,
api(#   is_deleted BOOLEAN DEFAULT FALSE
api(# );
CREATE TABLE

api=# INSERT INTO users(login, password, age) values
api-# ('bhu','bhu@gmail.com',26),
api-# ('sai','dai@gmail.com',67);
INSERT 0 2
api=# SELECT * FROM users;
 id | login |   password    | age | is_deleted
----+-------+---------------+-----+------------
  1 | bhu   | bhu@gmail.com |  26 | f
  2 | sai   | dai@gmail.com |  67 | f
(2 rows)


api=# CREATE USER me WITH PASSWORD 'mypassword';
CREATE ROLE
api=# GRANT ALL PRIVILEGES ON TABLE users TO me;
GRANT
api=# GRANT INSERT, SELECT ON TABLE users TO me;
GRANT
api=# GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO me;
GRANT
api=# SELECT * FROM users;
 id | login |     password     | age | is_deleted
----+-------+------------------+-----+------------
  1 | bhu   | bhu@gmail.com    |  26 | f
  2 | sai   | dai@gmail.com    |  67 | f
  3 | abcs  | bsdahu@gmail.com |  26 | f
(3 rows)
