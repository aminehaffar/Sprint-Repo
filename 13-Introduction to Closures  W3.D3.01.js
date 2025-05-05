//Basic Requirements
//0. Closure looks like this
function makeAccount(initial) {
    var balance = initial;
   return function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here is your money: $' + amount;
        }
   return 'Insufficient funds.';
   };
}

//1. 1. Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:
function makeCounter(){
    var count=0;
    return function counter() {
        count = count + 1;
        return count;
    }
}
var counter1 = makeCounter();
var counter2 = makeCounter();

//2. Update makeCounter so that, instead of always starting from zero, you can start from any number, e.g.:
function makeCounter(x){
    var count=x;
    return function counter() {
        count = count + 1;
        return count;
    }
}
var counter = makeCounter(x);

//3. One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:
function pow(exponent) {
    return function (number) {
         return Math.pow(number, exponent);
         }
    } 
var square = pow(2);
var cube = pow(3); 
var power4 = pow(4);

//More Practice
//1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.The function value is one new array.If the arrays are of unequal length, the output will only be as long as the shorter one.(Values of the longer array are simply not used.)Inputs should not be modified.


//2. We want to create a function that will add numbers together when called in succession
