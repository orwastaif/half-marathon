USE ucode_web;
CREATE TABLE IF NOT EXISTS heroes
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE ,
    description VARCHAR(255),
    race VARCHAR(30) DEFAULT "human",
    class_role ENUM("tankman","healer","dps")
);