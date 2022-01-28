// Create a pizza object constructor with properties for toppings and size.
// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
// Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.
// --- busness logic ---
// Cart
function Cart() {
  this.orderedPizzas = {};
  this.currentId = 0;
}

Cart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.orderedPizzas[pizza.id] = pizza;
};

Cart.prototype.assignId = function() { 
  this.currentId += 1;
  return this.currentId;
};

// Pizza
function Pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

// --- UI logic ---
// Tests
let testCart = new Cart();
let pizza1 = new Pizza ("lg", "thin", "cheese");
let pizza2 = new Pizza ("lg", "thin", "peperoni");
let pizza3 = new Pizza ("med", "thick", "pineapple");
testCart.addPizza(pizza1);
testCart.addPizza(pizza2);
testCart.addPizza(pizza3);


$(document).ready(function() {
  const inputSize = $("#size").val();
  const inputCrust = $("#crust").val();
  let selectTop = $("input[type=checkbox][name=toppings]")
  let toppings = [];

  selectTop.change(function() {
    toppings = toppings
      .filter(":checked") // Filter out unchecked boxes.
      .map(function() { // Extract values using jQuery map.
        return this.value;
      }) 
      .get() // Get array.

      console.log(toppings);
    });
});