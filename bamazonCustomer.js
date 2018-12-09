var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM PRODUCTS", function(err, result) {
        if (err) throw err;
        console.table(result);
    });
}
