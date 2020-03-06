// Section 5.4 JS Tutorial - forEach

let a = ["ant", "bat", "cat", 42];

a.forEach(function(element) {
  console.log(element);
});

// below is a compact form of the above forEach, Exercise 3
a.forEach(element => console.log(element));

// another practice case from lesson

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});


// Question 1, Section 5.4
// let a = ["ant", "bat", "cat", 42];  // defined at top of file

let logElements = (arr) => {
  arr.forEach(function (element) {
    console.log(element);
  })
};

// other formats for Question 1

a.forEach((element) => {
  console.log(element);
});

a.forEach(element => {
  console.log(element);
});