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