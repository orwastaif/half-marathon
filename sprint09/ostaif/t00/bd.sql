CREATE DATABASE IF NOT EXISTS sword;
CREATE USER IF NOT EXISTS 'ostaif'@'localhost' IDENTIFIED BY 'securepass';
ALTER  USER 'ostaif'@'localhost' IDENTIFIED with mysql_native_password BY 'securepass';
GRANT ALL ON ucode_web.* TO 'ostaif'@'localhost';

use sword;
CREATE TABLE IF NOT EXISTS users
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    LOGIN VARCHAR(30) UNIQUE,
    password VARCHAR(100) ,
    full_name VARCHAR(30) UNIQUE ,
    email VARCHAR(50) UNIQUE 
    status VARCHAR(20) default 'user' NOT NULL
);

