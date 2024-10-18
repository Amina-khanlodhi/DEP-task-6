const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  ];
  
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const generateBtn = document.getElementById('generate-btn');
  
  generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  });
  
  