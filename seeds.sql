DROP DATABASE IF EXISTS bamazondb;

CREATE DATABASE bamazondb;
USE bamazondb;
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name varchar(100),
department_name varchar(100),
price INT,
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products ( item_id, product_name, department_name, price, stock_quantity)
VALUES ( "1", "shirts", "clothing", "20", "800");
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ('2', 'pants', 'clothing', '30', '800' );
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( '3', 'socks', 'clothing', '10', '9001');
INSERT INTO products ( item_id, product_name, department_name, price, stock_quantity)
VALUES ( '4', 'underwear', ' clothing', '10', '9021')
 
 