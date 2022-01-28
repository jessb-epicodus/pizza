// Create a pizza object constructor with properties for toppings and size.
// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
// Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.
// --- busness logic ---
// Cart
function Cart() {
  this.addedPizzas = {};
  this.currentId = 0;
}

Cart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.addedPizzas[pizza.id] = pizza;
};

Cart.prototype.assignId = function() { 
  this.currentId += 1;
  return this.currentId;
};

Cart.prototype.findPizza = function(id) {
  if (this.addedPizzas[id] != undefined) {
    return this.addedPizzas[id];
  }
  return false;
};

// Pizza
function Pizza (size, crust, base, price) {
  this.size = size;
  this.crust = crust;
  this.base = base;
  this.price = price;
}

Pizza.prototype.addPrice = function() {
  if (this.size === "Small") {
    this.price = 8;
  } else if (this.size === "Medium") {
    this.price = 10;
  } else if (this.size === "Large") {
    this.price = 12;
  }
  return this.price
};
  // this.addedPizza[id].turnTally = this.addedPizza[id].turnTally + this.addedPizza[id].roll1 + this.addedPizza[id].roll2;

// --- UI logic ---
let userCart = new Cart()

function displayOrder(usersOrder) {
  let usersPizza = $("ul#added-pizza");
  let htmlForAddedPizza = "";
  Object.keys(usersOrder.addedPizzas).forEach(function(key) {
    const pizza = usersOrder.findPizza(key);
    htmlForAddedPizza += "<li id=" + pizza.id + ">" + pizza.size + " - " + pizza.crust + " - " + pizza.base + ":   " + pizza.price + "</li>";
  });
  usersPizza.html(htmlForAddedPizza);
}

$(document).ready(function() {
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();
    let inputSize = $("input:radio[name=size]:checked").val();
    let inputCrust = $("input:radio[name=crust]:checked").val();
    let inputBase = $("input:radio[name=base]:checked").val();
    let newPizza = new Pizza(inputSize, inputCrust, inputBase);
    userCart.addPizza(newPizza);
    displayOrder(userCart);
    newPizza.addPrice();
  });
});