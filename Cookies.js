/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration: Functions, variables, parameters, & CONSTANTS || created: 05.01.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let saltTsp;
const FAT_CUP = 1, FLOUR_CUP = 2.75, EGG_QTY = 1, SUGAR_CUP = 1.5, BAKING_POWDER_TSP = .5, BAKING_SODA_TSP = 1,
     VANILLA_TSP = 1, OVEN_TEMP = 375, MIN_COOK_TIME = 8, MAX_COOK_TIME = 10;

function main() {
     setSaltTsp();
     preHeatOven();
     mixIngredients();
     bakeCookies();
}

main();

function setSaltTsp() {
     saltTsp = PROMPT.question('How much salt to add?');
}

function preHeatOven() {
     let numTimes = 4;
     numTimes = 'Hello';
     doStuff();
}

function mixIngredients() {
     doStuff();
}

function bakeCookies() {
     doStuff();
}