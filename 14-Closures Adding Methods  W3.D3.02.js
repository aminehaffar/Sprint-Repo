//Basic Requirements
//0. Our closures is :
function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         }
    };
}

//1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:
function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         },
         checkBalance: function(amount) {
            return 'Your balance is: $' + balance;
            }
    };
}

//2. Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which has functions as values. up should make the count increase, and down should make the count decrease
function makeCounter(x){
    var count=x;
    return {up: function() {
        count = count + 1;
        return count;
    },
    down: function() {
        count = count -1;
        return count;
    }
    }
}

//3. Give your counter a reset capability as well, that resets the count back to its initial value.
function makeCounter(x){
    var count=x;
    return {up: function() {
        count = count + 1;
        return count;
    },
    down: function() {
        count = count -1;
        return count;
    },
    reset: function() {
        return count=x;
    }
    }
}

//4. code review

//5. Kindly fill the following survey INDIVIDUALLY, you can read the passage (in the survey) in pairs, but make sure you fill the survey individually, we trust that each one will answer on his own
//https://forms.gle/HJ3io2eYBWQ1PamN8

//More Practice
//1. Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:
function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
    }
    var upperBound = 5;
     function guessMyNumber(n) {
    if (n > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
         return 'You guessed my number!';
         }
    return 'Nope! That wasnt it!';
    }
    }

//2. You will need to define a function makeGame, and at the minimum, you should be able to play the game like this
function makeGame(upperBound){
    var upperBound=
    return function guessMyNumber(n) {
        if (n > upperBound) {
             return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
        } else if (n === randInt(upperBound)) {
             return 'You guessed my number!';
             }
        return 'Nope! That wasnt it!';
        }
}

