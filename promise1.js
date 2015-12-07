// promises example 1

(function () {
  'use strict';

  var getRandomNum = function (min, max) {
    return Math.random() * (max - min) + min;
  }

  //
  function sometimesWorks() {
    var deferred = $.Deferred();
    var delay = getRandomNum(1000, 3000);
    setTimeout(function () {
      // whether it is successful or not
      var worked = !!Math.floor(getRandomNum(0, 2));
      if (worked) {
        deferred.resolve('It worked!');
      } else {
        deferred.reject('It failed');
      }
    }, delay);

    return deferred.promise();
  }

  // call our function which returns a promise and sometimes works
  //sometimesWorks().then(
  //  // if it is successful, it will come here
  //  function (data) {
  //    console.info(data);
  //  },
  //  // if it fails it will come here
  //  function (err) {
  //    console.info(err);
  //  }
  //);
  //console.info('Back from promise land');

  // lab #1
  // Make another call to the sometimesWorks function.
  // Create two named functions to pass to the promise object.
  // When successful call the itWorked function
  //    display message passed from the promise, and "It Worked"
  // When rejected call the itFailed function
  //    display message passed from the promise, and "It failed"

  function itWorked(data) {
    console.info(data + ': It worked');
  }

  function itFailed(err) {
    console.info(err + ': It failed');
  }

  //sometimesWorks().then(itWorked, itFailed);
  //console.info('Back from promise land again.');

  // lab #2
  // create a function fifty50() which uses the
  // Date.now value as a coin toss. It returns
  // a promise. At the end of a one second time out
  // Check the value of Date.now. If it is
  // odd resolve, if it is even reject
  // hint #1: look at sometimesWorks in promise1.js

  function fifty50() {
    var deferred = $.Deferred();

    setTimeout(function () {
      // whether it is successful or not
      var worked = !!(Date.now() % 2);
      if (worked) {
        deferred.resolve('It worked!');
      } else {
        deferred.reject('It failed');
      }
    }, 1000);
    return deferred.promise();
  }

  fifty50().then(itWorked, itFailed);
  console.info('Back from promise land once again.');


}());