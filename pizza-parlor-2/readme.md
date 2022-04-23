# _Pizza Parlor_

#### By _**Jessica Baker**_ 

#### _Pizza Parlor - Epicodus - Object-Oriented JavaScript - Code Review_

## Technologies Used

* GIT
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Description

This website is for a pizza company where a user can choose one or more individual toppings and a size to order a pizza and see the final cost.

## Setup/Installation Requirements

* Go to _https://github.com/jessb-epicodus/pizza-parlor.git_
* Cone this repository to your desktop (or other desired location)
* Navigate to the top level of the directory called _pizza-parlor_
* Open the index.html file in your browser
* This is not yet published

## Tests
* Describe: function Pizza (size, crust, toppings)
Test: "Should return new pizza with size, crust & toppings"
Code: let pizza1 = let pizza1 = new Pizza ("lg", "thin", "cheese");
Expected Output: Pizza {size: 'lg', crust: 'thin', toppings: 'cheese'}

* Describe: Cart.prototype.addPizza = function(pizza)
Test: "Should add Pizza to Cart"
Code:
let testCart = new Cart();
let pizza1 = new Pizza ("lg", "thin", "cheese");
let pizza2 = new Pizza ("lg", "thin", "peperoni");
let pizza3 = new Pizza ("med", "thick", "pineapple");
Expected Output: Cart {orderedPizzas: {1: Pizza, 2: Pizza, 3: Pizza}}


## Known Bugs

* No known issues

## License

_If you run into any issues or have questions, ideas or concerns or wish to make a contribution to the code see contact information below._
* Jessica Baker: jessb.epicodus@gmail.com

Copyright (c) _Jan 2022_ _Jessica Baker_