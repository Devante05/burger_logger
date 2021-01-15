
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name varchar (50) not null,
    devoured boolean DEFAULT false,
    PRIMARY KEY (id)
);