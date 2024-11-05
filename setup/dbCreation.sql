DROP SCHEMA IF EXISTS `SERVER_DATA`;

CREATE SCHEMA IF NOT EXISTS `SERVER_DATA`;

USE `SERVER_DATA`;

CREATE TABLE IF NOT EXISTS `users`
(
    id      int             NOT NULL AUTO_INCREMENT,
    name    varchar(200)    NOT NULL,
    email   varchar(200)    NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB ROW_FORMAT = DYNAMIC;

INSERT INTO `users` VALUES
('Robert Pink', 'robert.pink@company.com'),
('Stephany Holt', 'stephany.holt@company.com')
('John Smith', 'john.smith@company.com');