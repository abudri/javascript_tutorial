// Section 5.3 Method Chaining

// reverses a String - we made this as not a prototype of the string class, commented out in section 7.3 to make String.prototype reverse fuction
// function reverse(string) {
//   // return string.split("").reverse().join("");
//   return Array.from(string).reverse().join("") // refactored to use custom Array.from() function, to handle emojis
// }

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

// returns boolean as to whether or not a string is a palindrome or not
// function palindrome(string) {
//   return string.toLowerCase() === reverse(string.toLowerCase());  // no longer case sensitive
// }

//commented out the above to put in the Phrase(content) method below from 7.1

// Question 1 of Section 5.3. Returns an array of the username and domain for a standard email address of the form username@example.com
function emailParts(email) {
  return email.toLowerCase().split("@");
}

// Section 7.1 on custom objects: Defines a Phrase object.
function Phrase(content) { // this is a constructor method, or the line just below, which gives a Phrase `content` attribute
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.  #commented out since refactored in 7.2
  // this.palindrome = function palindrome() {
  //   let processedContent = this.content.toLowerCase();
  //   return processedContent === reverse(processedContent);
  // }

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
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise. Refactored this in Section 7.2
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse(); // refactored in section 7.3, making built in String#reverse method
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
