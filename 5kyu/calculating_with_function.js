// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); /// must return 3

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function helper(number, operation) {
    if (operation) return operation(number);
    return number;
}

function times(y) {
    return function(x) {
        return x * y;
    }
}

function dividedBy(y) {
    return function(x) {
        return Math.floor(x / y);
    }
}

function plus(y) {
    return function(x) {
        return x + y;
    }
}

function minus(y) {
    return function(x) {
        return x - y;
    }
}

function zero(operation) {
    return helper(0, operation);
}

function one(operation) {
    return helper(1, operation);
}

function two(operation) {
    return helper(2, operation);
}

function three(operation) {
    return helper(3, operation);
}

function four(operation) {
    return helper(4, operation);
}

function five(operation) {
    return helper(5, operation);
}

function six(operation) {
    return helper(6, operation);
}

function seven(operation) {
    return helper(7, operation);
}

function eight(operation) {
    return helper(8, operation);
}

function nine(operation) {
    return helper(9, operation);
}

