//Basic Requirments
//1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.
function arrayFor(array) {
    for (i=0; i<array.length; i=i+1)
        console.log(array[i]);
}

//2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
function arrayWhile(array) {
    var i=0;
    while (i<array.length) {
        console.log(array[i])
        i=i+1;
    }
}

//3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.
function sum(array) {
    var result=0;
    for (i=0; i<array.length; i=i+1) {
        result=result+array[i];
    }
    return result;
}

//4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
function sumEveryOther(array) {
    var result=0;
    for (i=0; i<array.length; i=i+2) {
        result=result+array[i];
    }
    return result;
}

//5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.
function sumStartAt(array, index) {
    var result=0;
    for (i=index; i<array.length; i=i+1) {
        result=result+array[i];
    }
    return result;
}

//6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.
function sumUntil(array, index) {
    var result=0;
    for (i=0; i<=index; i=i+1) {
        result=result+array[i];
    }
    return result;
}

//7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
function subtractReverse(array) {
    var result=0;
    for (i=array.length-1; i>=0; i=i-1) {
        result=result-array[i];
    }
    return -result;
}

//8.Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.
function product(array) {
    var result=1;
    for (i=0; i<array.length; i=i+1) {
        result=result*array[i];
    }
    return result;
}

// 9.Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.
function average(array) {
    var result=0;
    for (i=0; i<array.length; i=i+1) {
        result=result+array[i];
    }
    return result/(array.length);
}

//10.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array.
function square(array) {
    for (i=0; i<array.length; i=i+1) {
        array[i]=Math.pow(array[i], 2)
    }
    return array;
}

//11.Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.
function isArray(array) {

}

//More Practice
//1.Write a function called min that takes an array as a parameter and returns the smallest number from the array.
function min(array) {
    var y=array[1];
    for (i=0; i<array.length; i=i+1) {
        var x=array[i];
        if (x<=y) {
             y=x;
        }

    }
    return y;
}

//2.Write a function called max that takes an array as a parameter and returns the largest number from the array.
function max(array) {
    var y=array[1];
    for (i=0; i<array.length; i=i+1) {
        var x=array[i];
        if (x>=y) {
             y=x;
        }

    }
    return y;
}

//3.Write a function called shortestString that takes an array of strings as a parameter and returns the length of the shortest string in the given array.
function shortestString(array) {
    var y=array[1].length;
    for (i=0; i<array.length; i=i+1) {
        var x=array[i].length;
        if (x<=y) {
             y=x;
        }

    }
    return y;
}

//4.Write a function called longestString that takes an array of strings as a parameter and returns the length of the longest string in the given array.
function longestString(array) {
        var y=array[1].length;
    for (i=0; i<array.length; i=i+1) {
        var x=array[i].length;
        if (x>=y) {
             y=x;
        }

    }
    return y;
}

//5.Write a function called shortestLongest that takes an array of strings as a parameter and returns a new array with the shortest and the longest string in the array.
function shortestLongest(array) {
        var y=array[1].length;
        var z=array[1].length;
    for (i=0; i<array.length; i=i+1) {
        var x=array[i].length;
        if (x<=y) {
             y=i;
        }
        if (x>=z) {
            z=i;
       }

    }
    return array[y, z]
}

//6.Write a function called minMax that takes an array as a parameter and returns a new array with the smallest and largest number.
function minMax(array) {
    var y=array[1];
    var z=array[1];
    for (i=0; i<array.length; i=i+1) {
        var x=array[i];
        if (x<=y) {
             y=array[i];
        }
        else if (x>=y) {
            z=array[i];
    }
    return array[y, z];
}
}

//7.Write a function called multiplyBy that takes an array and number as parameters and returns a new array with each of the elements from the array multiplied by the given number.
