CREATE DATABASE  IF NOT EXISTS `task_directory`;
USE `task_directory`;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(45) NOT NULL,
  `name` char(60) NOT NULL,
  `is_complete` BIT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;