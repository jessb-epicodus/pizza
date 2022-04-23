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
* Describe: function Pizza (size, toppings, price) {}
Test: "Should return new pizza with size, toppings & price"
Code: let pizza1 = new Pizza ("large", "cheese", "12");
Expected Output: Pizza {size: 'large', toppings: 'cheese', price:'12'}

* Describe: prototype.costCond = function(pizza) {}
Test: "Should return pizza cost based on size & toppings"
Code: let pizza1 = new Pizza ("large", "cheese");
Expected Output: Pizza {size: 'large', toppings: 'special', price:'12'}

Code: let pizza2 = new Pizza ("medium", "cheese");
Expected Output: Pizza {size: 'medium', toppings: 'cheese', price:'10'}

Code: let pizza3 = new Pizza ("small", "cheese");
Expected Output: Pizza {size: 'small', toppings: 'cheese', price:'8'}

Code: let pizza4 = new Pizza ("large", "special");
Expected Output: Pizza {size: 'large', toppings: 'special', price:'14'}

Code: let pizza5 = new Pizza ("medium", "special");
Expected Output: Pizza {size: 'medium', toppings: 'special', price:'12'}

Code: let pizza6 = new Pizza ("small", "special");
Expected Output: Pizza {size: 'small', toppings: 'special', price:'10'}

## Known Bugs

* No known issues

## License

Copyright (c) _Jan 2022_ _Jessica Baker_

## Contact Information

_If you run into any issues or have questions, ideas or concerns or wish to make a contribution to the code see contact information below._
* Jessica Baker: jessb.epicodus@gmail.com