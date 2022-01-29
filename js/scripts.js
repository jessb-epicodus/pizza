// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. 
// Allow the user to choose toppings and size for the pizza they'd like to order.

// --- Business Logic ---
function Pizza (size, base, cost) {
  this.size = size;
  this.base = base;
  this.cost = 0;
}

Pizza.prototype.costCond = function(pizza) {
  this.cost = 0;
  if (this.size === "lg") {
      this.cost += 12;
  } else if (this.size === "md") {
    this.cost += 10;
  } else if (this.size === "sm") {
    this.cost += 8;
  };
  if (this.base === "cheese") {
    this.cost += 0;
  } else if (this.base === "special") {
    this.cost += 2;
  };
  return this.cost;
};

// --- UI Logic ---
// let lgpizza = new Pizza ("lg", "special");
// let mdpizza = new Pizza ("md", "special");
// let smpizza = new Pizza ("sm", "cheese");
// lgpizza.costCond();
// mdpizza.costCond();
// smpizza.costCond();
$(document).ready(function() {
  $("#add-pizza").submit(function(event) {
    event.preventDefault();
    let inputSize = $("#size").val();
    let inputBase = $("#base").val();
    let newPizza = new Pizza(inputSize, inputBase);
    newPizza.costCond();
    $("#cost").text("$" + newPizza.cost);
  })
})