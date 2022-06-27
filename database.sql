CREATE SCHEMA proyecto_db;
USE proyecto_db;

CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
email VARCHAR (255) UNIQUE NOT NULL,
contrasena VARCHAR (255) NOT NULL,
nombre VARCHAR(150) NOT NULL, 
apellido VARCHAR(150) NOT NULL, 
foto VARCHAR (500) NOT NULL,
createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
product VARCHAR (150) NOT NULL,
descripcion VARCHAR (255) NOT NULL,
imagen VARCHAR (500) NOT NULL,
modelo VARCHAR (255) NOT NULL,
userId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES users(id),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE followers (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
id_usuario_seguidor INT,
id_usuario_seguido INT,
FOREIGN KEY (id_usuario_seguidor) REFERENCES users(id),
FOREIGN KEY (id_usuario_seguidor) REFERENCES users(id)
);

CREATE TABLE comments (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
comentario VARCHAR(400) NOT NULL, 
userId INT NOT NULL,
products_id INT NOT NULL,
FOREIGN KEY (id_usuario_seguidor) REFERENCES users(id),
FOREIGN KEY (id_usuario_seguidor) REFERENCES users(id),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
deletedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);