// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr.length-1;
  return cb(arr[lastItem]);
}

last(items, function(end) {
  console.log(end);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function add(param1, param2) {
  return param1 + param2;
}

console.log(sumNums(3, 5, add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(param1, param2) {
  return param1 * param2;
}

console.log(multiplyNums(3, 8, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function hasItem(item, arr) {
  
    if(arr.includes(item)) {
      return true;
    } else {
      return false;
    }
  
}

console.log(contains("Gum", items, hasItem));

/* STRETCH PROBLEM */

// let carArray = ["Subaru", "Honda", "Subaru", "Toyota", "Mazda", "Mazda"];
// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   return cb(array);
// }

// function duplicates(array) {
// const newCarArray = array.map()

// }
// console.log(removeDuplicates(carArray, duplicates));
