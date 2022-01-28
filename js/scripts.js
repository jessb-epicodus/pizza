// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. 
// Allow the user to choose toppings and size for the pizza they'd like to order.

// --- Business Logic ---
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.costCond = function(pizza) {
  if (this.size === "lg") {
      this.price = "$15";
  } if else (this.size === "med") {
    this.price = "$10";
  } if else (this.size === "sm") {
    this.price = "$5";
}

}

// --- UI Logic ---
let pizza = new Pizza ("lg", "sausage");
pizza.costCond();
