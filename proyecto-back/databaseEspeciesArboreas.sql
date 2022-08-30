Create Database especiesarboreas;
use EspeciesArboreas;
create table if not exists permiso(
	id_permiso integer primary key auto_increment,
	nombre_permiso varchar(50) not null,
	descripcion_permiso text not null,
    isActive boolean not null
);

create table if not exists rol(
	id_rol integer primary key auto_increment,
	nombre_rol varchar(50) not null,
	descripcion_rol text not null,
    isActive boolean not null,
	id_permiso integer not null references permiso(id_permiso)
);
create table if not exists especie(
	id_especie integer primary key auto_increment,
	nombre_especie varchar(150) not null,
	descripcion_especie text not null,
    isActive boolean not null
);

create table if not exists identificacion(
	id_identificacion integer primary key auto_increment,
	nombre_tipo varchar(100) not null,
    isActive boolean not null
);

create table if not exists usuario(
	id_usuario integer primary key auto_increment,
	nombres varchar(50) not null,
	apellidos varchar(50) not null,
	fk_id_tipo_identificacion integer not null
	references identificacion(id_identificacion),
	numero_identificacion varchar(15),
	numero_telefono varchar(10) not null,
	usuario varchar(50) not null,
	clave varchar(25) not null,
    isActive boolean not null,
	fk_id_rol integer not null references rol(id_rol)
	
);

create table if not exists peticion_registro(
	id_peticion integer primary key auto_increment,
	nombre_peticion varchar(50) not null,
	estado_peticion varchar(3) not null,
	fk_id_usuario integer not null references usuario(id_usuario),
	imagen_arbol longblob not null,
	ubicacion JSON not null,
    isActive boolean not null,
	fk_personal_asignado integer references usuario(id_usuario)
);


create table if not exists especie_arborea(
	id_especie_arborea integer primary key auto_increment,
	nombre_especie_arborea varchar(50) not null,
	fk_id_especie integer not null references especie(id_especie),
	descripcion text,
	comentarios text,
    isActive boolean not null,
	fk_id_peticion_registro integer not null
);

create table if not exists mantenimiento(
	id_mantenimiento integer primary key auto_increment,
	descripcion text,
	fk_id_especie integer not null references especie(id_especie),
	imagen_arbol longblob not null,
	comentarios text,
    isActive boolean not null,
	fk_id_personal_asignado integer not null 
	references usuario(id_usuario),
	fk_id_usuario_registro integer not null 
	references usuario(id_usuario)
);



