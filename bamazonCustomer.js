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
    connection.query('SELECT * FROM products', function(data) {
      console.log(data);
      inquirer.prompt([

      ]).then(function(answers)  {
          nextStep(answers,data);
      })
    })
}

function nextStep(values, database) {
    console.log(values);

    nextNextStep(database);
}

function nextNextStep(info){
    console.log(info);
}
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
console.log()
})
