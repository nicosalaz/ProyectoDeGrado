-- especies_arboreas.especie definition

CREATE TABLE `especie` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.identificacion definition

CREATE TABLE `identificacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.permiso definition

CREATE TABLE `permiso` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.rol definition

CREATE TABLE `rol` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.especie_arborea definition

CREATE TABLE `especie_arborea` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `id_especie` bigint NOT NULL,
  `descripcion` text,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_especie_fk2` (`id_especie`),
  CONSTRAINT `id_especie_fk2` FOREIGN KEY (`id_especie`) REFERENCES `especie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.especie_arborea_ubicacion definition

CREATE TABLE `especie_arborea_ubicacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `latitud` text NOT NULL,
  `longitud` text NOT NULL,
  `id_especie_arborea` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_especie_arborea_fk2` (`id_especie_arborea`),
  CONSTRAINT `id_especie_arborea_fk2` FOREIGN KEY (`id_especie_arborea`) REFERENCES `especie_arborea` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.rol_permiso definition

CREATE TABLE `rol_permiso` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_rol` bigint NOT NULL,
  `id_permiso` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_permiso_fk1` (`id_permiso`),
  KEY `id_rol_fk2` (`id_rol`),
  CONSTRAINT `id_permiso_fk1` FOREIGN KEY (`id_permiso`) REFERENCES `permiso` (`id`),
  CONSTRAINT `id_rol_fk1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.usuario definition

CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `apellido` text,
  `usuario` text NOT NULL,
  `correo` text NOT NULL,
  `clave` text NOT NULL,
  `id_identificacion` bigint NOT NULL,
  `numero_identificacion` text NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_identificacion_fk1` (`id_identificacion`),
  CONSTRAINT `id_identificacion_fk2` FOREIGN KEY (`id_identificacion`) REFERENCES `identificacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.usuario_rol definition

CREATE TABLE `usuario_rol` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint NOT NULL,
  `id_rol` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_usuario_fk1` (`id_usuario`),
  KEY `id_rol_fk2` (`id_rol`),
  CONSTRAINT `id_rol_fk2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`),
  CONSTRAINT `id_usuario_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.comentario_especie_arborea definition

CREATE TABLE `comentario_especie_arborea` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `id_especie_arborea` bigint NOT NULL,
  `id_usuario` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_especie_arborea_fk1` (`id_especie_arborea`),
  KEY `id_usuario_fk5` (`id_usuario`),
  CONSTRAINT `id_especie_arborea_fk1` FOREIGN KEY (`id_especie_arborea`) REFERENCES `especie_arborea` (`id`),
  CONSTRAINT `id_especie_arborea_fk5` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.especie_arborea_request definition

CREATE TABLE `especie_arborea_request` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `id_especie` bigint NOT NULL,
  `id_especie_arborea` bigint DEFAULT NULL,
  `id_usuario` bigint NOT NULL,
  `longitud` text NOT NULL,
  `latitud` text NOT NULL,
  `aceptado_por` bigint DEFAULT NULL,
  `rechazado_por` bigint DEFAULT NULL,
  `justificacion_rechazo` text,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_especie_arborea_fk4` (`id_especie_arborea`),
  KEY `id_usuario_fk7` (`id_usuario`),
  KEY `id_especie_fk7` (`id_especie`),
  CONSTRAINT `id_especie_arborea_fk4` FOREIGN KEY (`id_especie_arborea`) REFERENCES `especie_arborea` (`id`),
  CONSTRAINT `id_especie_fk7` FOREIGN KEY (`id_especie`) REFERENCES `especie` (`id`),
  CONSTRAINT `id_usuario_fk7` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.mantenimiento definition

CREATE TABLE `mantenimiento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `descripcion` text NOT NULL,
  `id_especie_arborea` bigint NOT NULL,
  `id_usuario` bigint NOT NULL,
  `comentarios` text,
  `estado` text,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_especie_arborea_fk3` (`id_especie_arborea`),
  KEY `id_usuario_fk6` (`id_usuario`),
  CONSTRAINT `id_especie_arborea_fk3` FOREIGN KEY (`id_especie_arborea`) REFERENCES `especie_arborea` (`id`),
  CONSTRAINT `id_especie_arborea_fk6` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.publicacion definition

CREATE TABLE `publicacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `id_usuario` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_usuario_fk2` (`id_usuario`),
  CONSTRAINT `id_usuario_fk2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.reaccion definition

CREATE TABLE `reaccion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tipo_reaccion` text NOT NULL,
  `id_publicacion` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_publicacion_fk2` (`id_publicacion`),
  CONSTRAINT `id_publicacion_fk2` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- especies_arboreas.comentario definition

CREATE TABLE `comentario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `id_publicacion` bigint NOT NULL,
  `modificado_por` bigint DEFAULT NULL,
  `justificacion_modificacion` text,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_publicacion_fk1` (`id_publicacion`),
  CONSTRAINT `id_publicacion_fk1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;