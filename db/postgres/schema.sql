\timing
DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;
\c restaurant
CREATE TABLE info(
  id INT PRIMARY KEY NOT NULL,
  image TEXT NOT NULL,
  name TEXT NOT NULL,
  category1 TEXT NOT NULL,
  category2 TEXT NOT NULL,
  ratings FLOAT NOT NULL,
  counts INT NOT NULL,
  waitingtime TEXT NOT NULL
);
/*
psql restaurant -f db/postgres/schema.sql
*/

\copy info FROM 'db/postgres/seed.csv' CSV HEADER;