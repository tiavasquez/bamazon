DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("appliances", "toaster", 14.99, 100);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronics", "polaroid camera", 65.00, 20);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("baby", "bottle brush", 4.99, 25);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("home & kitchen", "crock pot", 36.95, 5);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("musical instruments", "electronic keyboard", 119.99, 6);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("office supplies", "file folders", 11.99, 3);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("pet supplies", "milk bone dog treats", 7.39, 12);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("household", "AA batteries", 12.99, 7);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("automotive", "snow brush", 7.49, 2);
INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("books", "Diary of a Wimpy Kid", 8.99, 33);


