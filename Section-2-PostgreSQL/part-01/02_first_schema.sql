-------------------------------------------------------------------------------------------------------------------
--A structured framework or blueprint that defines how the data is structured, stored and related inside the DB
-------------------------------------------------------------------------------------------------------------------



-- db will contain container -> this will conain table -> this will contain rows


-- prevent an error if schema already exists
CREATE SCHEMA IF NOT EXISTS basics; 

CREATE EXTENSION IF NOT EXISTS pgcrypto; --helps to create random uuid whille creating a table

-- query
--give me all the schemas in my current db
SELECT schema_name
FROM information_schema.schemata
ORDER BY schema_name;
/* 
 basics              -> our custom created schema
 information_schema  -> built-in schema containing standardise set of read-only views that provide metadata about all the objects in the current db
 pg_catalog          -> internal system schema. This also stores all db metadata. slower than info_schema because of its complex wrap of views 
 pg_toast            -> The Oversized-Attribute Storage Technique.  is the internal schema and storage mechanism used to handle oversized 
                        column values that cannot fit inside a standard database page.
 public              -> default schema automatically created inside every new database.
*/

