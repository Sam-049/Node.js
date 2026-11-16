PostgreSQL is a <Relational-Database-Management-System>. it is widely used because of its -
- ACID compliance, 
- Multiversion concurrancy control (MVCC)
- Reliability
- Extensibility
- Have some advanced datatype which handles JSON, XML and arays along sde tabular data


# RDBMS - RELATIONAL DATABSE MANAGEMENT SYSTEM
Here data are stored in table in the form of rows and column.
When we have multiple table, we need to establish relation within them to make more sense and data can be used in various shape and form
These are done with the help of different relationships

 - In Non-Relational database data are not connected using tables.
   They use documents and key-value pair

1. When to use Relational DB and when to use Non-relational DB?
  + When we have data has 
    - clear structure 
    - relationships
    - transations
    - joins and also
    - DB level string valdation
    <example - banking application, ecommerce

  + When data 
    - changes very often
    - docs are independent
    - not need much joins 
    <example - Real-Time Chat and Messaging Apps, Live gaming, IoT, Streaming platform, social media feed