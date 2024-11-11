// All of the possible quotes we can show.
const QUOTES = [
  'Be yourself; everyone else is already taken.',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
  'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
  'You only live once, but if you do it right, once is enough.',
  'Be the change that you wish to see in the world.',
  'In the midst of chaos, there is also opportunity.',
  'A friend is someone who knows all about you and still loves you.',
  'Insanity is doing the same thing, over and over again, but expecting different results.',
  'Good friends, good books, and a sleepy conscience: this is the ideal life.',
  'Even the finest sword plunged into salt water will rust.'
];

// The array of used quotes. Do not select a quote if the quote exists in this array.
let usedQuotes = [];

function randomOf(array) {
  // Returns a random value from an array.
  return array[Math.floor(Math.random() * array.length)];
}

// Called when the user clicks the button.
function onClick() {
  if(usedQuotes.length === QUOTES.length) {
    alert('No more quotes to show');
    return;
  }
  
  // Choose a random quote that we have not used before.
  let quote;
  do {
    quote = randomOf(QUOTES);
  }while(usedQuotes.includes(quote));

  // Track this quote. Do not use it again in the future.
  usedQuotes.push(quote);

  // Alert to the user the quote.
  alert(quote);
}
