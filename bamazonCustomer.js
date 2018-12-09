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
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
    });
}

function actionPrompt() {
    inquirer.prompt({
        name: "whichItem",
        message: "What would you like to purchase?"
    }, {
        name: "quanityToPurchase",
        message: "How many of those do you want?"
    }).then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
            if (result[i].product_name === answer.choice) {
                chosenItem = results[i];
            }
        }
        //check if item is avaliable, if so create createConnection
        // with update query removing the product and quanity entered.
        if (chosenItem.stock_quantity > answer.stock_quantity) {
            //success go on and purchse
        }
        else if (chosenItem.stock_quantity < answer.stock_quantity) {
            console.log("Not enough of that item in the shop. Come back soon after we restock.");
        }

    })
}
