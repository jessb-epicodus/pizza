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
  this.base = base;
}

// --- UI logic ---
$(document).ready(function() {
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();
  const inputSize = $("input:radio[name=size]:checked").val();
  const inputCrust = $("input:radio[name=crust]:checked").val();
  const inputBase = $("input:radio[name=base]:checked").val();
  })
});