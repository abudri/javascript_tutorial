// Section 4.5 JS Tutorial: https://www.learnenough.com/course/javascript/other_native_objects/unique_words
// counting the number of occurrences of each word in a text selection

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = new Map();

let words =  sonnet.match(/[\w']+/g)  // matches for any word characters of any size, globally (`/g`)

// below adds a count for each word in the sonnet to uour `uniques` plain object(aka hash)
for (let i = 0; i < words.length; i++) {
  let word = words[i]; // get the current word being iterated upon from the `words` array
  if (uniques.get(word)) { // if the `uniques` hash already has the `word`, then increase count by one
    uniques.set(word, uniques.get(word) + 1);
  } else {  // if the `uniques` hash does NOT have the `word`, then instantiate the count of `word` in the `unique` hash to 1, ie the value is 1 for the `word` key in `unique`
    uniques.set(word, 1);
  }
}

// print out results of our plain object (our hash) to the console
console.log(uniques)