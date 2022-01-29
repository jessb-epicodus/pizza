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
      this.cost = 15;
  } else if (this.size === "med") {
    this.cost = 10;
  } else if (this.size === "sm") {
    this.cost = 5;
  } else if (this.base === "veg") {
    this.cost += 1;
  } else if (this.base === "supr") {
    this.cost += 2;
  } else if (this.base === "meat") {
    this.cost += 3;
  }
  return this.cost;
};


// --- UI Logic ---
// let lgpizza = new Pizza ("lg", "sausage");
// let mdpizza = new Pizza ("med", "peperoni");
// let smpizza = new Pizza ("sm", "cheese");
// lgpizza.costCond();
// mdpizza.costCond();
// smpizza.costCond();

Pizza.prototype.displayPizza = function () {
  $("#order").show();
  $("#size").text($("input:radio[name=size]:checked").text());
  $("#base").text($("input:radio[name=base]:checked").text());
  $("#cost").text(this.cost);
};

$(document).ready(function(){
  $("#new-pizza").submit(function(event){
    event.preventDefault();
    let size = $("input:radio[name=size]:checked").val();
    let base = $("input:radio[name=base]:checked").val();
    let pizza = new Pizza(size, base);
    pizza.costCond();
    pizza.displayPizza();
  });
});

