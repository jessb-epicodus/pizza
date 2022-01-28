// Create a pizza object constructor with properties for toppings and size.
// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
// Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.
// --- busness logic ---
// Cart
function Cart() {
  this.pizzas = {};
}

// Pizza
function Pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

// --- UI logic ---
// Tests
let testCart = new Cart();
let pizza1 = new Pizza ("lg", "matinee", "adult");
let pizza2 = new Pizza ("lg", "matinee", "senior");
let pizza3 = new Pizza ("med", "matinee", "child");

// $(document).ready(function() {
  // $("form#new-pizza").submit(function(event) {
  //   event.preventDefault();
// });