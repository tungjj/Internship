"use strict";

// Using a variable, without declaring it
x = 3.14;                 // This will cause an error
x = {p1:10, p2:20};      // This will cause an error

// Octal numeric literals are not allowed:
let x = 010;             // This will cause an error
let x = "\010";            // This will cause an error

