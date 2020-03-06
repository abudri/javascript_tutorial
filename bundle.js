(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Section 9.1

let Phrase = require("abdullah-palindrome");
// alert(new Phrase("Madam, I'm Adam.").palindrome());

// main body here added Section 9.1, for web app palindrome.html file
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}
},{"abdullah-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;


// Adds `reverse` to all strings. Added in Sectio 7.3
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Section 7.3 Question 1
String.prototype.blank = function() {
  return /^\s*$/g.test(this); // this tests from beginning `^` of string to end `$` of string, for all white space `s` of zero or more `*`
}

// Section 7.3 Question 2, write a last function to get last element of an array
Array.prototype.last = function() {
  return this[this.length - 1]; 
}

//commented out the above to put in the Phrase(content) method below from 7.1

// Question 1 of Section 5.3. Returns an array of the username and domain for a standard email address of the form username@example.com
function emailParts(email) {
  return email.toLowerCase().split("@");
}

// Section 7.1 on custom objects: Defines a Phrase object.
function Phrase(content) { // this is a constructor method, or the line just below, which gives a Phrase `content` attribute
  this.content = content;

  // Makes the phrase LOUDER, all upcase, Question 1, Section 7.1
  this.louder = function () {
    return this.content.toUpperCase();
  };

  // Question 1, Section 7.2
  this.processor = function(content) {
    return content.toLowerCase();
  }

  // Returns content processed for palindrome testing. Refactored this in Section 7.2
  this.processedContent = function processedContent() {
    // return this.processor(this.content);  commented out Section 8.4 for refactoring line below
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise. Refactored this in Section 7.2
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse(); // refactored in section 7.3, making built in String#reverse method
  }

  // Returns the letters in the content. Section 8.4 first implemented
  // For example: new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    // const letterRegex = /[a-z]/i; // case insenstive character regex, Section 8.5, we refactored quite a bit before getting to this final(er) form
    // return Array.from(this.content).filter(char => char.match(/[a-z]/i)).join(""); , Section 8.5 we refactored this out again to get the below,
    return (this.content.match(/[a-z]/gi) || []).join("");  // `||` is in case of numbers only like "1234" or no a-z chars, which would return `null` and null.join("") errors out
  }
}

// Defines a TranslatedPhrase object. Section 7.2
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.  This overrides the `processedContent` method in the Phrase function/class, 
  // using this.translation instead of this.content
  this.processedContent = function processedContent() {
    return this.processor(this.translation); // inherits the `processor(content)` function from the Phrase class/object above
  }
}

// this is the "prototype system", and this is how TranslatedPhrase object inherits from Phrase object - and Phrase's methods. Section 7.2
TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
