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
  afterConnection();
});

function afterConnection() {
  console.log("These are the items available for purchase:")
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM: " + res[i].item_id + " PRODUCT: " + res[i].product_name + " PRICE: $" + res[i].price);
    }
    //console.log(res);
    connection.end();
  });
}
