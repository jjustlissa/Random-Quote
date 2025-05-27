const quotes = [
  {text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"},

  {text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"},

  {text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"},

  {text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"},

  {text: "Everything you can imagine is real.",
    author: "Pablo Picasso"},

  {text: "Dream big and dare to fail.",
    author: "Norman Vaughan"},

  {text: "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie"},

  {text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett"}
];

const quoteText = document.getElementById("quoteText");
const newQuote = document.getElementById("newQuote");
const author = document.getElementById("author");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.innerText = `"${quote.text}"`;
    author.innerText = `—${quote.author}`;
}

newQuote.addEventListener("click", getRandomQuote);

getRandomQuote();