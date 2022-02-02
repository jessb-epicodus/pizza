// --- Business Logic ---
function Pizza (size, base) {
  this.size = size;
  this.base = base;
}

Pizza.prototype.costCond = function() {
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