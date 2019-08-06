let inquirer = require("inquirer");

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

})
