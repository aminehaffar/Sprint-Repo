/////
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  /////
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  /////
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }

  // Solve the following functions using High Order Functions:
  /*****************************  1  ***********************/
   // write a function called addOne that takes an array of numbers as an input,
    // and returns a new array with all array elements incremented by one as an output
  // addOne( [1,2,3,4] ) ==> [2,3,4,5]
  // addOne( [3,6,9] ) ==> [4,7,10]
    // Note: using MAP
function addOne(array) {
    return map(array, function(element){
        return element+1
    })
}

/*****************************  2  ***********************/
// Take an array and remove every second element out of that array.
  // Always keep the first element and start removing with the next element.
  // Example:
  // myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
  // Sample output: removeEveryOther([1, 12, 3, 44, 10, 6, 17]) => [1, 3, 10, 17]
  // None of the arrays will be empty, so you don't have to worry about that!
  // Note: using FILTER
   function removeEveryOther(array) {
    return filter(array, function(element, index){
        return index%2===0
    })
   }

/*****************************  3  ***********************/
// use map to write the following functions
 function doubleAll(nums){
    return map(array, function(element){
        return element*2
    })
 }

function squareAll(nums){
    return map(array, function(element){
        return element*element
    })
}

    // given an array of strings, return an array containing all string lengths
    // example: ["hello", "how", "are", "you", "doing?"] => [5, 3, 3, 3, 6]
function stringLengths(array){
    return map(array, function(element){
        return element.length
    })
}

/*****************************  4  ***********************/
 // use filter to write the following functions
   function odds(nums){
    return filter(nums, function(element, index){
         return element%2!==0
    })
   }

 function positives(nums){
    return filter(nums, function(element, index){
         return element>0
    })
 }

 function negatives(nums){
    return filter(nums, function(element, index){
         return element<0
    })
 }

 function evenLength(nums){
    return filter(nums, function(element, index){
         return element.length%2===0
    })
 }

   // (given an array of numbers, returns those larger than 6)
 function largerThanSix(nums){
    return filter(nums, function(element, index){
         return element>6
    })
 }

 /*****************************  5 ***********************/
  // Write a function called map2 that accepts two arrays and a function as arguments, and constructs
  // a new array by invoking its function argument on the elements of both arrays, 
  //  map2([1, 2, 3], [4, 5, 6], function(a, b) {
  //        return a * b;
  //  });
  //  => [4, 10, 18]
 function map2(arr1, arr2, callback){
    var acc=[]
     each(arr1, function(element,index){
        acc.push(callback(element, arr2[index]))
    })
    return acc 
 }

/*****************************  6************************/
//* we have an array of students :
var students = [
{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" },
{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" },
{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" },
{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }
]

function higherThan90(students){
    return filter(students, function(element, index){
        return (element.grade)>=90
    })
}
function names(students){
    return map(students, function(element){
        return element.name
    })
}

function level(students){
    return filter(students, function(element, index){
        return (element.level)==="A+"
    })
}

function grade(students){
    return map(students, function(element){
        return element.grade
    })
}

    function highest(array){
        return filter(array, function(element, index){
            return Math.max(...grade(array))===element.grade
    })
}

/*****************************  7 ***********************/
