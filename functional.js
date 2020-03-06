// Chapter 6 - Functional Programming - working file
// " focusing instead on applying functions to manipulate and transform arguments to functions."
// "focusing on a classic triumvirate of methods commonly used in functional programming: map, filter, and reduce"


let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));  // call to urlify(string) method defined above
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version using #map
function functionalUrls(elements) {
  return elements.map(element => urlify(element)); // call to urlify(string) method defined above
}
console.log(functionalUrls(states));

// Question 1, Section 6.1.1

// function that returns full urls of the form https://example.com/<urlified form>
function fullUrls(states_arr) {
  return states_arr.map(element => 'https://example.com/' + urlify(element));
}

console.log(fullUrls(states));


////////////////////////////////
///// Section 6.2 Filter

// selecting single word states, without using filter
// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version, using #filter
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// check for Dakotas using String#includes(), Question 1 Section 6.2
function findDakotas(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
console.log(findDakotas(states));

// check for Dakotas using array length of 2 to check, Question 1 Section 6.2
function findDakotasByLength(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(findDakotasByLength(states));

// Question 2, Section 6.3
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states));