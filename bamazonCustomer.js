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
            // nextStep(answers,data);
            //SQL statement to update the database, subtract quantity and give customer total
            //total = unit price * quanity

            var sql = "UPDATE products SET stock_quantity" - data.name[1];  "WHERE id " = data.name[0];
            
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record updated");
                console.table(data);
            })
        })
    })
}

function nextStep(values, database) {
    console.log(values);

    nextNextStep(database);
}

function nextNextStep(info) {
    console.log(info);
}

