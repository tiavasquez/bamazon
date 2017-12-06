var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "chinchilla3",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //show all the products available for purchase
  displayItems();
  purchaseItem();
  
  //queryByID(1); //just hard coding item 1 for testing
  
  //updateProduct(1,50); //just hard coding item 1 for testing
  connection.end(); 
});

function purchaseItem() {
  console.log("inside purchaseItem");
  
  //prompt user asking for item# and quantity they want to purchase
  inquirer
    .prompt([
        {
          type: "input",
          chosenID: "chosenID",
          message: "What item number would you like to purchase?"
        },
        {
          type: "input",
          amount: "amount",
          message: "How many would you like to purchase?"
        }
      ]) //end .prompt
    .then(function(answer) {
        // get the information of the item they chose
        var available_stock = queryByID(chosenID);
        // determine if there is enough in stock
        if (available_stock >= parseInt(answer.amount)) {
          //if stock available is enough, do two things:
          //1. calculate their total cost (price * quantity)
         //2. update that item's quantity in the database (subtract quantity purchased from stock quantity)
          // bid was high enough, so update db, let the user know, and start over
          //updateProduct(1,50);
          //TODO: start over
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Your bid was too low. Try again...");
          //TODO: start over
        }
    }); //end .then
    
}

function displayItems() {
  console.log("These are the items available for purchase:");
  var query = connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM: " + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
    }
    //console.log(res);
    console.log("we are here"); 
  });
  console.log("at the end of displayItems");
}

function queryByID(selectedID) {
  var query = connection.query("SELECT stock_quantity FROM products WHERE item_id=?", [selectedID], function(err, res) {
    console.log("stock_quantity: " + res[0].stock_quantity);
    return res[0].stock_quantity;
  });
  
}

function updateProduct(selectedID,new_stock_quantity) {
  
  var query = connection.query(
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: new_stock_quantity
        },
        {
          item_id: selectedID
        }
      ],
    function(err, res) {
      //console.log(res.affectedRows + " products updated!\n");

    }
  ));

} //end updateProduct function
