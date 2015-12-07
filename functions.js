//

(function () {
  'use strict';

  var arr1 = [1, 2, 3, 4];
  var obj1 = {
    show1a: function () {
      console.info("Hi from show1a");
    }
  };

  function foo(thing1, thing2) {
    if (this && this.money) {
      console.info("Money = " + this.money);
      console.info("thing1 = " + thing1 + ", thing2 = " + thing2)
    } else {
      console.info("You've got no money!");
    }
  }

  function sum() {
    var ndx, sum = 0;
    for (ndx = 0; ndx < arguments.length; ndx += 1) {
      if (typeof arguments[ndx] === 'number') {
        sum += arguments[ndx];
      }
    }
    return sum;
  }

  // everything is an object including arrays
  arr1.show = function () {
    console.info("Hello arr1 show");
  };

  // functions are used to construct new objects
  function Point(x, y) {
    // this is a context which refers
    this.x = x;
    this.y = y;
  }

  // why doesn't this go in the function?
  Point.prototype.calc = function () {
    return x + y;
  }


  function show1() {
    console.info("Hi from show1");
  }

  // I can even add a function to a function
  show1.showbiz = function () {
    console.info("Hello from showbiz");
  };

  show1.showbiz();

  arr1.show();
  obj1.show1a();  // invoking a function method
  show1();


  // four ways to call a function

  show1();        // invoke as a function
  obj1.show1a(); // invoke as a method
  var myPoint = new Point(50, 100); // constructor

  // using call and apply
  // call takes a "this" and parameters to pass
  foo.call({money: "$100"}, "apple", "banana");

  // apply takes a "this" and
  var arr2 = ["mango", "durazno"];
  foo.apply({money: "$100"}, arr2);

  // the this context and arguments
  var total = sum(10, 20, 30, 40, 100);
  console.info("Total = " + total);

  // sidebar: the default operator
  var bob = 13;
  // if bob is falsey, it will take the right side of the OR
  var weeks = bob || 52;
  console.log("Bob's weeks = " + weeks);


  // lab
  // rewrite the sum function to convert the arguments list
  // to an array, then filter the array to only include number
  // then sum the numbers
  // call the function coolSum

}());













