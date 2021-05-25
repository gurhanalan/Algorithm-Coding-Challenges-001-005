"use strict";

// 11. Replace With Alphabet Position
/* 
Welcome.

In this challenge you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */

function alphabetPosition(text) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let char of text) {
        if (alph.indexOf(char.toLowerCase()) !== -1)
            str += alph.indexOf(char.toLowerCase()) + 1 + " ";
    }

    return str.trim();
}
console.log(alphabetPosition("ali"));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function alphabetPosition2(text) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let str = [];
    for (let char of text) {
        if (alph.indexOf(char.toLowerCase()) !== -1)
            str.push(alph.indexOf(char.toLowerCase()) + 1);
    }

    return str.join(" ");
}
console.log(alphabetPosition2("The sunset sets at twelve o' clock."));

// 12. Disemvowel Trolls
/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */
function disemvowel(str) {
    const vowels = "A, E, I, O, U".split(", ");
    for (let vow of vowels) {
        str = str.replaceAll(vow, "");
        str = str.replaceAll(vow.toLowerCase(), "");
    }
    return str;
}
function disemvowel2(str) {
    let vowelsRegex = /aueoi/gi;

    return str.replace(/[aueoi]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel2("This website is for losers LOL!"));

// ##############################################################################
// 13. Who likes it?
/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
 */
// Likes function
function likes(names) {
    let length = names.length;
    if (length === 0) return "no one likes this";
    if (length === 1) return `${names[0]} likes this`;
    if (length === 2) return `${names[0]} and ${names[1]} likes this`;
    if (length === 3)
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    if (length >= 4) {
        return `${names[0]}, ${names[1]} and ${length - 2} others likes this`;
    }
}

// likes (["Peter"]) // must be "Peter likes this"
// likes (["Jacob", "Alex"]) // must be "Jacob and Alex like this"
// likes (["Max", "John", "Mark"]) // must be "Max, John and Mark like this"
// likes (["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"
console.log(likes([]));

// #######################################################################################
// 14. You're a square!
/* A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
 */

const isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
};
console.log(Number.isInteger(Math.sqrt(25)));

// 15. Abbreviate a Two Word Name
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
 */
function abbrevName(name) {
    return name
        .split(" ")
        .map((el) => el[0].toUpperCase())
        .join(".");
    // code away
}
console.log(abbrevName("sam Harris"));

// 16. Square Every Digit
/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num) {
    let strNum = num + "";

    return +strNum
        .split("")
        .reduce((acc, cur, i, arr) => acc + (+cur) ** 2, "");
}

console.log(squareDigits(42));

// 17. Fast Fibonacci
/* The generic implementation of the fibonacci algorithm is usually something like the following

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}
Now thats all and well and good but that function isn't too efficient. If I wanted to get the 1000th number in the series, I'd have to wait... days? maybe years?

Your task
Write a more efficient fibonacci function that can calculate the 1000th+ number series without breaking a sweat. Read up on tail call optimization for some help.

Starting values
fib(0) = 0;
fib(1) = 1; */

function fib(num) {
    let current = 0;
    const arr = [];
    for (let i = 0; i < num + 1; i++) {
        arr.push(current);
        current = (arr[arr.length - 1] || 1) + (arr[arr.length - 2] || 0);
    }
    return arr[num];
}

//Answer with a tail call

function fib2(num, current = 0, next = 1) {
    if (num === 0) return current;
    return fib2(--num, next, next + current);
}

// console.log(fib(5));
// console.log(fib2(5));
