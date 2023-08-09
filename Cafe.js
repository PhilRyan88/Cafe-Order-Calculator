const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Cafe");

console.log("Each coffee costs $2 and each cookie costs $1");

rl.question("How many coffees? ", function (m) {
  rl.question("How many cookies? ", function (n) {
    rl.question("Feel free to leave a tip: ", function (o) {
      m = parseInt(m);
      n = parseInt(n);
      o = parseInt(o);

      //  total cost
      var total = m * 2 + n * 1 + o;

      // Display the order total
      console.log("Your order total is $" + total);

      // Close the readline interface
      rl.close();
    });
  });
});
