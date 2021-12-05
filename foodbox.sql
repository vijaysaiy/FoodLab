CREATE DATABASE  IF NOT EXISTS `foodbox` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `foodbox`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: foodbox
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (30,'admin@vijay.com',12345672,'vijay','admin'),(31,'admin.vijay@vijay.com',123456789,'vijay','Vijaysai');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (105);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` longtext,
  `img_src` varchar(255) DEFAULT NULL,
  `is_enabled` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (70,'maincourse','Serves with Gravy,Raita,Salad','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rxjo68dgwtvtpoe1ccer',_binary '','Veg Biryani',120),(71,'maincourse','A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices. Biryani Served with Salan, Raita and Salad.','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwzed7etjzj0tgou9zsm',_binary '','Veg Biryani (Family Pack)',380),(72,'maincourse','A super delicious and aromatic Indian rice entree made using fragrant basmati rice, cubes of paneer (Indian cottage cheese) and spices. Biryani Served with Salan, Raita and Salad.','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/polkfflq7inmrytfo5y5',_binary '','Paneer Biryani',200),(73,'kebabs','Juicy chicken marinated in a combination of flavourful spices and roasted to perfection in tandoor. (Served with chutney And Salad). (1 chest piece, 1 leg piece of chicken served )','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vji26sdj65v3sgjv1yfz',_binary '','Tandoori Chicken',299),(74,'kebabs','A scrumptious combo of lip smacking grilled chicken .(Served with chutney, Mayonnaise And Salad)','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkqw42qgum5ibudjivu2',_binary '','Grill Chicken',220),(75,'kebabs','Super soft chunks of chicken are coated with a spicy and peppery masala and grilled to perfection. (Served with chutney And Salad)','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jyvlqtxwrkzyxnixv1j0',_binary '','Chicken Tikka',220),(76,'maincourse','Aromatic rice preparation layered with marinated chicken pieces and spices slow-cooked to perfection. Serves one. (Biryani Served with Chicken 1 pc, Salan, Raita and Salad)','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ji9d2c1g1gboduallqkz',_binary '','Chicken Biryani Single',140),(77,'maincourse','Aromatic rice preparation layered with marinated chicken pieces and spices slow-cooked to perfection. Serves 2. (Biryani Served with Chicken 2 pc, Salan, Raita and Salad)','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/f5dvzudqmrelamgtm4r3',_binary '','Chicken Biryani Regular',240),(78,'maincourse','Wholesome biryani prepared with succulent mutton, aromatic basmati biryani rice and whole spices. (Biryani Served with Mutton 6 pc, Egg, Salan, Raita and Salad)','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xw0cmfmpqzx8taca5asi',_binary '','Mutton Biryani',240),(79,'shawarmas','Fresh rumali loaded with grilled paneer & salad. Loaded with egg based garlic mayonnaise & with a touch of in-house sauce','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ngksqnpcgt0qe39qwh77',_binary '','Paneer Shawarma',170),(80,'shawarmas','A flavorsome shawarma filled with succulent grilled chicken, mayonnaise and other sauces. (Served with Tomato Sauce) serves 1','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/chwtsnwmrz6pgt5f2nzf',_binary '','Chicken Shawarma',120),(81,'shawarmas','(100% Halal & Breast Boneless Chicken) Fresh rumali loaded with diced chicken (contains more chicken instead of onions). Loaded with egg based garlic mayonnaise & with a touch of in-house sauce.','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/n7xeudvhncei2g13c1nq',_binary '','Istah\'s Chicken Shawarma Rumali',170),(82,'desserts','Sweet','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wsyv88x1jl0rsgfvllzd',_binary '','Double Ka Meetha',120),(83,'desserts','Sweet','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/co0rlqrpe7vsvdvbtc68',_binary '','Gajar Ka Halwa',120),(84,'desserts','Sweet','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/r7xmupyvqyekv60c45gg',_binary '','Gulab Jamun',99),(85,'desserts','Sweet','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ci53j3k2nae7epow5dew',_binary '','Kaddu Ka Kheer',99),(86,'soups','A flavorsome Chicken soup with corn broth','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ocpgtfjba6hywqwvd0gx',_binary '','Chicken Corn Soup',120),(87,'soups','A flavorsome Chicken soup with blended spices','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sujxp3nafqtmidpogf9c',_binary '','Chicken Hot & Sour Soup',120),(88,'soups','A flavorsome Chicken soup with blended spices','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ksyb6lhch0ak4nabsypx',_binary '','Chicken Manchow Soup',120),(90,'starters','Roasted Paneer','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kqvbzw0kwpp1af5hdtit',_binary '','Peshawari Paneer Tikka',299),(91,'starters','Mixed veg Patties','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pfs9p0kzikyqipfnjoyt',_binary '','Veg Hara Bhara Kebab',299),(92,'starters','Roasted fish','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/taxb0hhfz3dztchxg3ob',_binary '','Apollo Fish',429);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchasereport`
--

DROP TABLE IF EXISTS `purchasereport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchasereport` (
  `id` int NOT NULL,
  `address` longtext,
  `city` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `products` longtext,
  `purchase_date` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `zip` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchasereport`
--

LOCK TABLES `purchasereport` WRITE;
/*!40000 ALTER TABLE `purchasereport` DISABLE KEYS */;
INSERT INTO `purchasereport` VALUES (64,'h.No 12345','Andhra',9704948844,'vijaysai','Paneer Tikka₹299 qty: 1, Peshawari Paneer Tikka₹299 qty: 1','01/12/2021, 10:11:53','kurnool',598,'Ankit',518301),(69,'h.No 12345','Andhra',9704948844,'vijaysai','Tandoori Chicken₹299 qty: 1, Grill Chicken₹220 qty: 1','02/12/2021, 14:09:10','kurnool',519,'Ankit',518301),(97,'h.No 12345','Andhra',9704948844,'vijaysai','Chicken Tikka₹220 qty: 1','04/12/2021, 18:48:14','kurnool',220,'Vijaysai',518301),(98,'h.No 12345','Andhra',9704948844,'vijaysai','Veg Biryani₹120 qty: 1, Veg Biryani (Family Pack)₹380 qty: 1','04/12/2021, 18:52:16','kurnool',500,'Vijaysai',518301),(99,'h.No 12345','Andhra',9704948844,'vijaysai','Tandoori Chicken₹299 qty: 4','04/12/2021, 21:29:19','kurnool',1196,'Vijaysai',518301),(100,'h.No 12345','Andhra',9704948844,'vijaysai','Paneer Biryani₹200 qty: 1','05/12/2021, 13:33:54','kurnool',200,'Ankit',518301),(104,'h.No 12345','Kurnool',85143241512,'Vijaysai','Tandoori Chicken₹299 qty: 2, Veg Biryani (Family Pack)₹380 qty: 1, Paneer Biryani₹200 qty: 1, Mutton Biryani₹240 qty: 1','05/12/2021, 18:36:49','Andhrapradesh',1418,'Ankit',518301);
/*!40000 ALTER TABLE `purchasereport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (43,'vijaysai@vijay.com',9704948844,'1234','Vijaysai'),(45,'ankit@vijay.com',9876451214,'1234','Ankit'),(95,'bharath@foodbox.com',85123345321,'1234','Bharath'),(96,'aishwarya@foodbox.com',532132,'1234','Aishwarya');
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

-- Dump completed on 2021-12-05 19:40:26
