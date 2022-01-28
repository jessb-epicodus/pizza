// --- Business Logic ---
function Order () {
  this.addedPizzas = {};
  this.totalCost = 0;
}

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}


// --- UI Logic ---
let userOrder = new Order;
let pizza1 = new Pizza ("lg", "sausage", "15");
let pizza2 = new Pizza ("md", "peperoni", "12");
let pizza3 = new Pizza ("sm", "cheese", "10");
