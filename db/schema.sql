DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

USE airbnb;

DROP TABLE IF EXISTS `photos`;
CREATE TABLE `photos` (
  `id` VARCHAR(16),
  `likes` INT,
  `username` VARCHAR(64),
  `link` VARCHAR(255),
  `tag` VARCHAR(32),
  `photo_set` VARCHAR(10),
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `photobigdata`;
CREATE TABLE `photobigdata` (
  `id` VARCHAR(16),
  `likes` INT,
  `username` VARCHAR(64),
  `link` VARCHAR(255),
  `tag` VARCHAR(32),
  `photo_set` VARCHAR(10),
  PRIMARY KEY (`id`)
);