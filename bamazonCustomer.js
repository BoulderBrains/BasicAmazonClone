var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.table(results);
    });
    actionPrompt();
}

function actionPrompt() {
    inquirer.prompt({
        name: "choice",
        type: "rawlist",
        choice: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
            }
            return choiceArray;
        },
        message: "What would you like to purchase?"
    }, {
        name: "quanityToPurchase",
        type: "input",
        message: "How many of those do you want?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }).then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.choice) {
                chosenItem = results[i];
            }
        }
        //check if item is avaliable, if so create createConnection
        // with update query removing the product and quanity entered.
        if (chosenItem.stock_quantity < answer.stock_quantity) {
            // we have enough items in stock for your purchased
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: anwser.quantity
                    },
                    {
                        item_id: chosenItem.item_id
                    }
                ],
                function(error) {
                    if (error) throw err;
                    console.log("Item purchased successfully.");
                    loadProducts();
                }
            )
        }
        else if (chosenItem.stock_quantity > answer.stock_quantity) {
            console.log("Not enough of that item in the shop. Come back soon after we restock.");
        }
    });
}
