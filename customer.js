var mysql = require('mysql');
var inquirer = require('inquirer');
var connectiobn = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "bamazondb"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryProducts();
    queryCost();
});

function queryProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (var i = 0; i< res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + "|" + res[i].price + "|" + res[i].stock_quantity);
        }
        console.log("---------------------------------");
    });    
};




console.log(query.sql);
    connection.end();
    // build constructors for questions:
// build database for inventory
// figure out why table wont accept insert into the table
//  The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// var products = product(function(){
// console.log()
// })