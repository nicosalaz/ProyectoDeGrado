/*
Navicat MySQL Data Transfer

Source Server         : LOCALHOST
Source Server Version : 80029
Source Host           : localhost:3306
Source Database       : especiesarboreas

Target Server Type    : MYSQL
Target Server Version : 80029
File Encoding         : 65001

Date: 2022-08-29 08:40:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for especie
-- ----------------------------
DROP TABLE IF EXISTS `especie`;
CREATE TABLE `especie` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre_especie` text,
  `descripcion_especie` text,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of especie
-- ----------------------------

-- ----------------------------
-- Table structure for especie_arborea
-- ----------------------------
DROP TABLE IF EXISTS `especie_arborea`;
CREATE TABLE `especie_arborea` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre_especie_arborea` varchar(100) NOT NULL,
  `especie_id` bigint NOT NULL,
  `descripcion` text,
  `comentarios` text,
  `peticion_registro_id` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `especie_id` (`especie_id`) USING BTREE,
  KEY `peticion_registro_id` (`peticion_registro_id`) USING BTREE,
  CONSTRAINT `especie_fk1` FOREIGN KEY (`especie_id`) REFERENCES `especie` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `peticion_fk2` FOREIGN KEY (`peticion_registro_id`) REFERENCES `peticion_registro` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of especie_arborea
-- ----------------------------

-- ----------------------------
-- Table structure for identificacion
-- ----------------------------
DROP TABLE IF EXISTS `identificacion`;
CREATE TABLE `identificacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre_tipo` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of identificacion
-- ----------------------------

-- ----------------------------
-- Table structure for mantenimiento
-- ----------------------------
DROP TABLE IF EXISTS `mantenimiento`;
CREATE TABLE `mantenimiento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text,
  `comentarios` text,
  `imagen_arbol` longblob NOT NULL,
  `usuario_id` bigint DEFAULT NULL,
  `usuario_asignado_id` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`) USING BTREE,
  KEY `usuario_asignado_id` (`usuario_asignado_id`) USING BTREE,
  CONSTRAINT `usuario_asignado_fk2` FOREIGN KEY (`usuario_asignado_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usuario_mantenimiento_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of mantenimiento
-- ----------------------------

-- ----------------------------
-- Table structure for permiso
-- ----------------------------
DROP TABLE IF EXISTS `permiso`;
CREATE TABLE `permiso` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre_permiso` text,
  `descripcion_permiso` text,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of permiso
-- ----------------------------

-- ----------------------------
-- Table structure for peticion_registro
-- ----------------------------
DROP TABLE IF EXISTS `peticion_registro`;
CREATE TABLE `peticion_registro` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `peticion_registro` varchar(100) NOT NULL,
  `estado_peticion` varchar(50) NOT NULL,
  `usuario_id` bigint NOT NULL,
  `imagen_arbol` longblob,
  `ubicacion` json NOT NULL,
  `usuario_asignado_id` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`) USING BTREE,
  KEY `usuario_asignado_id` (`usuario_asignado_id`) USING BTREE,
  CONSTRAINT `persona_asignada_fk2` FOREIGN KEY (`usuario_asignado_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usuario_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of peticion_registro
-- ----------------------------

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre_rol` text,
  `descripcion_rol` text,
  `permiso_id` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `permiso_id` (`permiso_id`) USING BTREE,
  CONSTRAINT `permiso_fk` FOREIGN KEY (`permiso_id`) REFERENCES `permiso` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of rol
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `identificacion_id` bigint NOT NULL,
  `numero_identificacion` varchar(100) DEFAULT NULL,
  `numero_telefono` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `rol_id` bigint NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `identificacion_id` (`identificacion_id`) USING BTREE,
  KEY `rol_id` (`rol_id`) USING BTREE,
  CONSTRAINT `identificacion_fk1` FOREIGN KEY (`identificacion_id`) REFERENCES `identificacion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `rol_fk2` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `publicacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text,
	`imagen_arbol` longblob,
  `usuario_id` bigint NOT NULL,
	`puclicacion_id` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`) USING BTREE,
	KEY `puclicacion_id` (`puclicacion_id`) USING BTREE,
  CONSTRAINT `usuario_id_fk2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
	CONSTRAINT `puclicacion_id_fk2` FOREIGN KEY (`puclicacion_id`) REFERENCES `publicacion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB;


-- ----------------------------
-- Records of usuario
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
