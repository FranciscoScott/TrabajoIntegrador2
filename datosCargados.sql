CREATE DATABASE  IF NOT EXISTS `proyecto_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto_db
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(400) NOT NULL,
  `userId` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `userId` (`userId`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Hola',1,3,'2022-06-24 02:21:00','2022-06-24 02:21:00','2022-06-24 02:21:00'),(2,'Muy lindas!!',2,3,'2022-06-24 02:33:40','2022-06-24 02:33:40','2022-06-24 02:33:40'),(3,'mis favoritas',2,4,'2022-06-24 02:33:57','2022-06-24 02:33:57','2022-06-24 02:33:57'),(4,'cuanto salen',2,2,'2022-06-24 02:34:06','2022-06-24 02:34:06','2022-06-24 02:34:06'),(5,'las tienen en otros colores??',2,5,'2022-06-24 02:34:19','2022-06-24 02:34:19','2022-06-24 02:34:19'),(6,'estan en verdes?',3,5,'2022-06-24 02:36:54','2022-06-24 02:36:54','2022-06-24 02:36:54'),(7,'QJ',3,4,'2022-06-24 02:37:02','2022-06-24 02:37:02','2022-06-24 02:37:02'),(8,'ufff ',3,7,'2022-06-24 02:37:11','2022-06-24 02:37:11','2022-06-24 02:37:11'),(9,'cuanto salen?',3,3,'2022-06-24 02:37:28','2022-06-24 02:37:28','2022-06-24 02:37:28'),(10,'me encanta el amarillo',4,2,'2022-06-24 02:44:57','2022-06-24 02:44:57','2022-06-24 02:44:57'),(11,'Hola',4,8,'2022-06-24 02:47:21','2022-06-24 02:47:21','2022-06-24 02:47:21'),(12,'tremendas!!!',1,4,'2022-06-24 19:48:14','2022-06-24 19:48:14','2022-06-24 19:48:14');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario_seguidor` int(11) DEFAULT NULL,
  `id_usuario_seguido` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_usuario_seguidor` (`id_usuario_seguidor`),
  CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`id_usuario_seguidor`) REFERENCES `users` (`id`),
  CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`id_usuario_seguidor`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` varchar(150) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Nike','Yellow','imagen-1656033221054.webp','Jordan Mid Air 1',1,'2022-06-24 01:13:41','2022-06-24 01:13:41','2022-06-24 01:13:41'),(3,'Converse','Black','imagen-1656034523286.webp','Chuck Taylor High',1,'2022-06-24 01:35:23','2022-06-24 01:35:23','2022-06-24 01:35:23'),(4,'Nike ','Pink & Black','imagen-1656037812791.webp','Jordan High Air 1',2,'2022-06-24 02:30:12','2022-06-24 02:30:12','2022-06-24 02:30:12'),(5,'Converse','White','imagen-1656037863393.webp','Chuck Taylor',2,'2022-06-24 02:31:03','2022-06-24 02:31:03','2022-06-24 02:31:03'),(6,'Nike','Blue/Green','imagen-1656038137005.webp','Jordan Low Air 1',3,'2022-06-24 02:35:37','2022-06-24 02:35:37','2022-06-24 02:35:37'),(7,'Adidas','White','imagen-1656038183038.webp','Adidas Forums Low',3,'2022-06-24 02:36:23','2022-06-24 02:36:23','2022-06-24 02:36:23'),(8,'Nike','White','imagen-1656038660108.webp','Nike Dunks Mid',4,'2022-06-24 02:44:20','2022-06-24 02:44:20','2022-06-24 02:44:20');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `foto` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fran@gmail.com','$2a$10$eUR9kIE/S5rABeLGSFPBJOEWsjl7ZX30AgN.sWVLAEWqIuf1R.GDa','Francisco','Scott','imgPerfil-1656030318175.JPG','2022-06-24 00:25:18','2022-06-24 00:25:18','2022-06-24 00:25:18'),(2,'pedro@gmail.com','$2a$10$LSERgVC5AA/wjLeAaFRryeTR1UFQAWdKuxyyQ0smkz176erQaH2u2','Pedro','Mainardi','imgPerfil-1656037767478.JPG','2022-06-24 02:29:27','2022-06-24 02:29:27','2022-06-24 02:29:27'),(3,'santi@gmail.com','$2a$10$LFHrKfP1Lbtr6NmPr8WfTua50405dipTCiPs9nQO5vMsJaxdZZPv.','Santi','Chamo','imgPerfil-1656038092206.JPG','2022-06-24 02:34:52','2022-06-24 02:34:52','2022-06-24 02:34:52'),(4,'analiamaidana@gmail.com','$2a$10$JNpFTwHLQjGUQOgBpX8OKOg.I.naiW9N2ZyHY6ug2lfX9PZzOW/Aq','Ana','Maidana','imgPerfil-1656038625560.JPG','2022-06-24 02:43:45','2022-06-24 02:43:45','2022-06-24 02:43:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-27 14:28:15
