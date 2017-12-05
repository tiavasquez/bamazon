var mysql = require("mysql");

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
  displayItems();
  //prompt user asking for item# and quantity they want to purchase
  //query by the item
  queryByID(1); //just hard coding item 1 for testing
  //if stock available is enough, do two things:
  //1. calculate their total cost (price * quantity)
  //2. update that item's quantity in the database (subtract quantity purchased from stock quantity)
  
});

function displayItems() {
  console.log("These are the items available for purchase:")
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM: " + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
    }
    //console.log(res);
    connection.end();
    
  });
}

function queryByID(selectedID) {
  var query = connection.query("SELECT stock_quantity FROM products WHERE item_id=?", [selectedID], function(err, res) {
    console.log("stock_quantity: " + res[0].stock_quantity);
  });
  
}
