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

function actionPrompt() {
    inquirer.prompt({
        name: "whichItem",
        message: "What would you like to purchase?"
    }, {
        name: quanityToPurchase,
        message: "How many of those do you want?"
    }).then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
            if (result[i].product_name ==== answer.choice) {
                chosenItem = results[i];
            }
        }
        //check if item is avaliable, if so create createConnection
        // with update query removing the product and quanity entered. 

    })
}
