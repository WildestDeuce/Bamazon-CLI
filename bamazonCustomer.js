let inquirer = require("inquirer");
let mysql = require("mysql")

//create the connection information for the sql database

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    //Your username
    user: 'root',
    //Your password
    password: 'GabbyTwins1217!',
    database: 'bamazon_db'
});

startApp();

function startApp() {
    connection.query('SELECT * FROM products', function (err, data) {
        //console.log(data);
        // console.log(data[0].id);
        console.table(data);
        inquirer.prompt([


            {
                type: 'input',
                name: 'productID',
                message: 'What is the product ID?',
            },

            {
                type: 'input',
                name: 'numberOfUnits',
                message: 'How many units are you purchasing?',
            }


        ]).then(function (answers) {
            console.log(answers);
            var quan = data[parseInt(answers.productID) - 1].stock_quantity;
            console.log(quan);
            // nextStep(answers,data);
            //SQL statement to update the database, subtract quantity and give customer total
            //total = unit price * quanity

            var sql = "UPDATE products SET products.stock_quantity = " + (parseInt(quan) - parseInt(answers.numberOfUnits)) + " WHERE id = " + answers.productID;

            console.log(sql);

            connection.query(sql, function (err, result) {

                connection.query('SELECT * FROM products', function (err, info) {
                    if (err) throw err;
                    console.table(info);


                })
                console.log("You Purchased")
            })
        })
    })
}
