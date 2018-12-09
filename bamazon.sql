DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kershaw Pocket Knife", "sporting goods", 60.00, 4),
("24oz Kleen Kanteen", "housewares", 26.99, 2),
("Rainboots", "mens wear", 38.99, 5),
("Umbrella", "accessories", 4.99, 20),
("1 gallon of water", "food & drink", .99, 90),
("6pack of Long Trail Ale", "food & drink", 7.99, 4),
("Paper plates", "housewares", 2.99, 10),
("Flannel button up", "mens wear", 24.99, 1),
("Loaf of bread", "food & drink", 3.99, 3),
("Porkchop sandwich", "food & drink", 6.99, 3);

SELECT * FROM products;
