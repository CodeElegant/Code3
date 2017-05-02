/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration: Functions, variables, parameters, & CONSTANTS || created: 05.01.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let lastName, firstName;
let age;
const LANGUAGE = 'English';

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
     let currentYear = 2017;
     setLastName();
     firstName = setFirstName();
     setAge(currentYear);
     printResults();
}

main();

/**
 * @method
 * @desc lastName mutator
 * @returns {null}
 */
function setLastName() {
     lastName = PROMPT.question(`\nPlease enter last name: `);
}

/**
 * @method
 * @desc firstName mutator
 * @returns {String}
 */
function setFirstName() {
     return PROMPT.question(`\nPlease enter first name: `);
}

/**
 * @method
 * @desc age mutator
 * @param {int} currentYear - So we can subtract birth year to determine age
 * @returns {null}
 */
function setAge(currentYear) {
     let year = PROMPT.question(`\nWhat year were you born?: `);
     age = currentYear - year;
     let ageSquared = age ** 2;
     console.log(ageSquared);
}

/**
 * @method
 * @desc worker method for printing results
 * @returns {null}
 */
function printResults() {
     process.stdout.write('\x1Bc'); //Clears the screen
     console.log("\nHello " + firstName + " " + lastName + ". You are " + age + " years old.");
     console.log(`Your primary language is ${LANGUAGE}`);
}

/*
 Demonstrating code modularization (methods, functions, subroutines), variables, parameters, & CONSTANTS.

 Topics:  Functions, sequence, variables, parameters, CONSTANTS, scope, mutation terms (mutable, immutable, mutate),
          data types (Number, String, Boolean, Null, Undefined), concatenation & the three types of JavaScript quoting,
          operators (+, -, /, *, %, **), escape characters, console logging, 10 commandments of programming intro

 URLs:    Chapters 1-3 & 9:  https://www.youtube.com/watch?v=JL7-g4W9Hl8&list=PL9KGzX0z-QNMsWfPYGINNvVHGs1Kxv0ev
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
          http://archive.oreilly.com/pub/a/javascript/excerpts/learning-javascript/javascript-datatypes-variables.html (watch the eyes, lol)
          https://library.oreilly.com/book/9780596521882/learning-javascript/31.xhtml?ref=toc#the_arithmetic_operators
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */