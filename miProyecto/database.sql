USE proyectoDB;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
username VARCHAR(100) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
bday DATE,
password VARCHAR(255) NOT NULL,
dni INT UNIQUE NOT NULL,
profilePic VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
product VARCHAR(255) NOT NULL,
autor VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
imagen VARCHAR(255),
comentario VARCHAR(255) NOT NULL,
userId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarios(
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
comentario VARCHAR(400) NOT NULL,
userId INT,
productId INT,
FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (productId) REFERENCES products(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, email, password, userName)
VALUES (DEFAULT, 'fscott@udesa.edu.ar', 'fscott123', 'FranciscoScott');

INSERT INTO users (id, email, password, userName, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'pmaindardi@udesa.edu.ar', 'mainardi123', 'PedroMainardi', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO users (id, email, password, userName, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'santi@udesa.edu.ar', 'santi123', 'SantiChamo', DEFAULT, DEFAULT, DEFAULT);

CREATE TABLE followers (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
seguidor INT,
seguido INT,
FOREIGN KEY (seguidor) REFERENCES users(id),
FOREIGN KEY (seguido) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);