-- psql -U postgres -d postgres -f part01/01_first_database.sql
-- psql -> postgres command line tool
-- -U postgres -> logging as user which is postgres
-- -d postgres -> connect to our databse postgres
-- -f part01/01_first_database.sql -> run this file

-- this practice we should never do in production app, this is only for learning
DROP DATABASE IF EXISTS postgressql_part1;

-- going to create new db inside postgre server
CREATE DATABASE postgressql_part1