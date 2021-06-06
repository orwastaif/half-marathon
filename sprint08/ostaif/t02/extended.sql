USE ucode_web;
CREATE TABLE IF NOT EXISTS powers
(
    id INT,
    hero_id INT,
    PowerName VARCHAR(30) ,
    type ENUM("attack","defense"),
    points INT,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);
CREATE TABLE IF NOT EXISTS races
(
    id INT,
    hero_id INT,
    RaceNаme VARCHAR(30) ,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS teams
(
    id INT,
    hero_id INT,
    TeamNаme VARCHAR(30) ,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

INSERT INTO powers (hero_id, name, points, type) VALUES
(5, 'iron shield', 200, 'defense'),
(4, 'iron shield', 200, 'defense'),
(9, 'iron shield', 200, 'defense'),
(2, 'bloody fist', 110, 'attack'),
(3, 'bloody fist', 110, 'attack'),


INSERT INTO races (hero_id, name)VALUES 
 ( 1, 'Human'),
 ( 3, 'Kree'),

 
 INSERT INTO teams (hero_id, name)VALUES
(1, 'Avengers'),
(2, 'Hydra'),