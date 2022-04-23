// --- Business Logic ---
function Order () {

}

function Pizza (size, base, crust, toppings, cost) {
  this.size = size;
  this.crust = crust;
  this.base = base;
  this.toppings = toppings;
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


$(document).ready(function() {
    $("#cost").text("$" + newPizza.cost);
  $("#add-pizza").submit(function(event) {
    event.preventDefault();
    let inputSize = $("input:radio[name=size]:checked").val();
    let inputBase = $("input:radio[name=base]:checked").val();
    let newPizza = new Pizza(inputSize, inputBase);
    newPizza.costCond();
  })
})